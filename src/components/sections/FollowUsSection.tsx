import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

/**
 * Lazy iframe with an IntersectionObserver so we don't load embeds offscreen.
 */
function LazyIframe({
  title,
  src,
  height = 20,
  className = "",
}: {
  title: string;
  src: string;
  height?: number | string;
  className?: string;
}) {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCanLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 rounded-2xl bg-gray-100 animate-pulse" />
      )}
      <iframe
        ref={ref}
        title={title}
        src={canLoad ? src : "about:blank"}
        width="100%"
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        className="relative z-10 w-full rounded-2xl"
      />
    </div>
  );
}

/**
 * Instagram embed loader:
 * - Injects the embed script once.
 * - Calls window.instgrm.Embeds.process() when the blockquote mounts.
 */
function InstagramEmbed({ permalink }: { permalink: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ensureScript = () =>
      new Promise<void>((resolve) => {
        // Already there?
        if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.async = true;
        s.src = "//www.instagram.com/embed.js";
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    ensureScript().then(() => {
      // @ts-expect-error - Instagram injects the global
      if (window.instgrm?.Embeds?.process) {
        // Re-process this container only
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.instgrm.Embeds.process(containerRef.current);
      }
    });
  }, [permalink]);

  return (
    <div ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 12,
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.15)",
          margin: "0 auto",
          minWidth: 326,
          maxWidth: 540,
          width: "100%",
        }}
      />
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.06 },
  },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function FollowUsSection() {
  return (
    <section id="follow-us" className="bg-gray-50 border-t border-gray-100">
      {/* Header / CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="max-w-7xl mx-auto px-6 pt-14"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Seguinos en Redes
            </h2>
            <p className="text-gray-600 mt-2">
              Novedades, estilos y tips de cuidado visual todos los días.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-brand hover:!bg-[#dd3a45]">
              <a
                href="https://www.instagram.com/opticareginaelena"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.facebook.com/OpticaReginaElena/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Facebook className="size-4" />
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Feed cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Facebook Post */}
          <motion.article
            variants={item}
            className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm"
          >
            <h3 className="sr-only">Publicación destacada de Facebook</h3>
            <LazyIframe
              title="Facebook Post - Óptica Regina Elena"
              className="w-full"
              // Kept your exact URL; width is handled by the iframe element, card is responsive.
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOpticaReginaElena%2Fposts%2Fpfbid02yiUeg3eU6F5ncScfTdEA48ZCUaXbZB3Auc8ieeaAaQQPgoGGG2xUzjSv1dYBfgXTl&show_text=true&width=500"
              height={665}
            />
          </motion.article>

          {/* Instagram Post */}
          <motion.article
            variants={item}
            className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm"
          >
            <h3 className="sr-only">Publicación destacada de Instagram</h3>
            <InstagramEmbed permalink="https://www.instagram.com/p/DFnUmQWs9tf/?utm_source=ig_embed&utm_campaign=loading" />
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
