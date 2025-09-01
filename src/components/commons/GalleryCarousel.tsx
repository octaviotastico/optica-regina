import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useRef } from "react";

/** Carrusel táctil responsive con snap */
export const GalleryCarousel = ({ posts, ariaLabel }: { posts: { thumb: string; href: string; alt?: string }[]; ariaLabel: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector<HTMLAnchorElement>("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 260; // ancho tarjeta + gap
    container.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Gradientes laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-white to-transparent rounded-l-2xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-white to-transparent rounded-r-2xl" />

      {/* Botones */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur border border-gray-200 shadow rounded-full p-2 sm:p-2.5 hover:bg-white active:scale-95"
        aria-label="Anterior"
        type="button"
      >
        <ChevronLeft className="size-5 sm:size-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur border border-gray-200 shadow rounded-full p-2 sm:p-2.5 hover:bg-white active:scale-95"
        aria-label="Siguiente"
        type="button"
      >
        <ChevronRight className="size-5 sm:size-6" />
      </button>

      {/* Track scrollable */}
      <div
        ref={scrollRef}
        className="
          flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth px-6 sm:px-8 py-1
          snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
        aria-label={ariaLabel}
      >
        {posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            data-card
            className="
              group relative shrink-0 snap-center
              w-[78vw] xs:w-[68vw] sm:w-[48vw] md:w-[340px] lg:w-[360px]
              aspect-square
            "
            aria-label={`${ariaLabel} ${i + 1}`}
          >
            <img
              src={p.thumb}
              alt={p.alt ?? ariaLabel}
              className="h-full w-full object-cover rounded-xl border border-gray-200"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-brand/40 transition" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default GalleryCarousel;