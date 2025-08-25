import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------- DATA ---------- */
const IG_POSTS = [
  { thumb: "/social/ig1.jpg", href: "https://www.instagram.com/p/XXXXXXXX1/", alt: "IG 1" },
  { thumb: "/social/ig2.jpg", href: "https://www.instagram.com/p/XXXXXXXX2/", alt: "IG 2" },
  { thumb: "/social/ig3.jpg", href: "https://www.instagram.com/p/XXXXXXXX3/", alt: "IG 3" },
  { thumb: "/social/ig4.jpg", href: "https://www.instagram.com/p/XXXXXXXX4/", alt: "IG 4" },
];

const FB_POSTS = [
  { thumb: "/social/fb1.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/XXXX1", alt: "FB 1" },
  { thumb: "/social/fb2.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/XXXX2", alt: "FB 2" },
  { thumb: "/social/fb3.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/XXXX3", alt: "FB 3" },
  { thumb: "/social/fb4.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/XXXX4", alt: "FB 4" },
];

/* ---------- UI ---------- */
function NetworkCard({
  title,
  handle,
  icon,
  cta,
  profileUrl,
}: {
  title: string;
  handle: string;
  icon: React.ReactNode;
  cta: string;
  profileUrl: string;
}) {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-gray-200 p-4 sm:p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-gray-200 p-2">{icon}</div>
        <div className="text-left">
          <p className="font-semibold leading-none text-base sm:text-lg">{title}</p>
          <p className="text-xs sm:text-sm text-gray-500 leading-none mt-1">{handle}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 text-xs sm:text-sm text-brand group-hover:underline">
          {cta} <ArrowUpRight className="size-4" />
        </span>
      </div>
    </a>
  );
}

/** Carrusel táctil responsive con snap */
function GalleryCarousel({ posts, ariaLabel }: { posts: any[]; ariaLabel: string }) {
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
              aspect-[4/3]
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

/* ---------- PAGE ---------- */
export default function FollowUsSection_Mixed_Big() {
  const [open, setOpen] = useState(false);

  return (
    <section id="follow-us" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Seguinos en Redes
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Novedades, estilos y tips de cuidado visual. Minimal y sin iframes.
          </p>
        </div>

        {/* Cards redes */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <NetworkCard
            title="Instagram"
            handle="@opticareginaelena"
            icon={<Instagram className="size-5 sm:size-6" />}
            cta="Ver perfil"
            profileUrl="https://www.instagram.com/opticareginaelena"
          />
          <NetworkCard
            title="Facebook"
            handle="Óptica Regina Elena"
            icon={<Facebook className="size-5 sm:size-6" />}
            cta="Ver página"
            profileUrl="https://www.facebook.com/OpticaReginaElena/"
          />
        </div>

        {/* Toggle */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-800"
            type="button"
            aria-expanded={open}
            aria-controls="social-galleries"
          >
            <ChevronDown
              className={`size-4 sm:size-5 transition-transform ${open ? "rotate-180" : ""}`}
            />
            {open ? "Ocultar publicaciones" : "Ver publicaciones"}
          </button>
        </div>

        {/* Galerías */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="social-galleries"
              key="galleries"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Instagram */}
                <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                  <div className="mb-3 sm:mb-4 flex items-center gap-2">
                    <Instagram className="size-5 sm:size-6" />
                    <p className="font-medium text-base sm:text-lg">Últimas en Instagram</p>
                  </div>
                  <GalleryCarousel posts={IG_POSTS} ariaLabel="Publicación de Instagram" />
                </div>

                {/* Facebook */}
                <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
                  <div className="mb-3 sm:mb-4 flex items-center gap-2">
                    <Facebook className="size-5 sm:size-6" />
                    <p className="font-medium text-base sm:text-lg">Últimas en Facebook</p>
                  </div>
                  <GalleryCarousel posts={FB_POSTS} ariaLabel="Publicación de Facebook" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
