#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Recursively convert JPG/JPEG/PNG images to AVIF next to originals.

Requirements:
    pip install Pillow pillow-avif-plugin

Usage:
    python to_avif.py /path/to/public
    python to_avif.py /path/to/public --quality 55 --effort 6 --threads 4
    python to_avif.py . --overwrite
"""

from __future__ import annotations

import argparse
import concurrent.futures as futures
import os
import sys
import time
from pathlib import Path
from typing import Iterable, Tuple

from PIL import Image  # pillow-avif-plugin auto-registers when installed

# File extensions we will convert
SRC_EXTS = {".jpg", ".jpeg", ".png"}

def find_images(root: Path) -> Iterable[Path]:
    """Yield source image paths recursively."""
    for dirpath, dirnames, filenames in os.walk(root):
        # Skip hidden dirs like .git, .next, etc. (customize as needed)
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        for name in filenames:
            ext = Path(name).suffix.lower()
            if ext in SRC_EXTS:
                yield Path(dirpath) / name

def should_skip(src: Path, dst: Path, overwrite: bool) -> Tuple[bool, str]:
    """Decide whether to skip processing."""
    if not dst.exists():
        return False, "no existing avif"
    if overwrite:
        return False, "overwrite enabled"
    # If AVIF exists and is at least as new as the source, skip
    if dst.stat().st_mtime >= src.stat().st_mtime:
        return True, "avif up-to-date"
    return False, "avif older than source"

def convert_to_avif(
    src: Path,
    quality: int = 55,
    effort: int = 6,
    overwrite: bool = False,
    keep_icc: bool = True,
    lossless_png_threshold: int | None = None,
) -> Tuple[Path, bool, str]:
    """
    Convert a single image to AVIF.
    Returns (dst_path, success, message).
    """
    try:
        dst = src.with_suffix(".avif")
        skip, reason = should_skip(src, dst, overwrite)
        if skip:
            return dst, False, f"skip ({reason})"

        with Image.open(src) as im:
            # Convert modes: keep alpha for PNGs, drop to RGB otherwise
            has_alpha = "A" in im.getbands()
            if has_alpha:
                im = im.convert("RGBA")
            else:
                im = im.convert("RGB")

            save_kwargs = {
                # pillow-avif-plugin options
                "quality": int(quality),   # 0-100 (typical sweet spot 45-60)
                "effort": int(effort),     # 0-10 (higher = slower, smaller)
            }

            # Preserve ICC profile if present (helps color consistency)
            if keep_icc and "icc_profile" in im.info:
                save_kwargs["icc_profile"] = im.info["icc_profile"]

            # Preserve EXIF if present (note: AVIF metadata support varies)
            if "exif" in im.info:
                save_kwargs["exif"] = im.info["exif"]

            # Optional: if you mostly have design PNGs with flat colors,
            # use lossless for small PNGs (set threshold in KB)
            if lossless_png_threshold is not None and src.suffix.lower() == ".png":
                try:
                    if src.stat().st_size <= lossless_png_threshold * 1024:
                        save_kwargs["lossless"] = True
                except Exception:
                    pass

            # Make sure parent directory exists
            dst.parent.mkdir(parents=True, exist_ok=True)

            im.save(dst, format="AVIF", **save_kwargs)

        # Match timestamps to help caching/CI tools
        try:
            os.utime(dst, (time.time(), src.stat().st_mtime))
        except Exception:
            pass

        return dst, True, f"wrote (q={quality}, effort={effort})"

    except Exception as e:
        return src.with_suffix(".avif"), False, f"error: {e}"

def _process_image_task(args: Tuple[Path, int, int, bool, int | None]) -> Tuple[Path, bool, str]:
    """
    Module-level function to process a single image.
    This is needed to work with multiprocessing (local functions can't be pickled).
    """
    src_path, quality, effort, overwrite, lossless_png_threshold = args
    return convert_to_avif(
        src_path,
        quality=quality,
        effort=effort,
        overwrite=overwrite,
        lossless_png_threshold=lossless_png_threshold,
    )

def process_all(
    root: Path,
    quality: int,
    effort: int,
    overwrite: bool,
    threads: int,
    lossless_png_threshold: int | None,
) -> Tuple[int, int, int]:
    """Convert all images; return (converted, skipped, failed)."""
    imgs = list(find_images(root))
    total = len(imgs)
    if total == 0:
        print("No JPG/JPEG/PNG images found.")
        return 0, 0, 0

    print(f"Found {total} images. Converting to AVIF…")
    converted = 0
    skipped = 0
    failed = 0

    # Prepare arguments for each image processing task
    task_args = [
        (img_path, quality, effort, overwrite, lossless_png_threshold)
        for img_path in imgs
    ]

    # AVIF encoding is CPU-bound; processes scale better than threads.
    # But Pillow objects aren't picklable pre-load, so we submit file paths.
    with futures.ProcessPoolExecutor(max_workers=threads or None) as ex:
        for dst, ok, msg in ex.map(_process_image_task, task_args):
            # Print relative path for nice logs
            try:
                rel = dst.relative_to(root)
            except Exception:
                rel = dst
            status = "OK" if ok else "SKIP" if "skip" in msg else "FAIL"
            print(f"[{status}] {rel} — {msg}")
            if ok:
                converted += 1
            elif status == "SKIP":
                skipped += 1
            else:
                failed += 1

    print(
        f"\nDone. Converted: {converted}, Skipped: {skipped}, Failed: {failed}"
    )
    return converted, skipped, failed

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Recursively convert JPG/JPEG/PNG to AVIF next to originals."
    )
    p.add_argument(
        "root",
        nargs="?",
        default=".",
        help="Root folder to scan (default: current directory).",
    )
    p.add_argument(
        "--quality",
        type=int,
        default=55,
        help="AVIF quality 0-100 (default: 55 is a good balance).",
    )
    p.add_argument(
        "--effort",
        type=int,
        default=6,
        help="Encoder effort 0-10 (higher = slower, smaller). Default: 6.",
    )
    p.add_argument(
        "--overwrite",
        action="store_true",
        help="Re-encode even if an up-to-date .avif already exists.",
    )
    p.add_argument(
        "--threads",
        type=int,
        default=os.cpu_count() or 4,
        help="Parallel processes to use (default: CPU count).",
    )
    p.add_argument(
        "--lossless-png-threshold",
        type=int,
        default=None,
        help="If set (KB), encode PNGs <= this size as lossless AVIF.",
    )
    return p.parse_args()

def main():
    args = parse_args()
    root = Path(args.root).resolve()
    if not root.exists() or not root.is_dir():
        print(f"Error: root path not found or not a directory: {root}", file=sys.stderr)
        sys.exit(2)

    process_all(
        root=root,
        quality=args.quality,
        effort=args.effort,
        overwrite=args.overwrite,
        threads=args.threads,
        lossless_png_threshold=args.lossless_png_threshold,
    )

if __name__ == "__main__":
    main()
