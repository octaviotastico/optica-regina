import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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

function NetworkCard({ title, handle, icon, cta, profileUrl }: any) {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-gray-200 p-2">{icon}</div>
        <div className="text-left">
          <p className="font-semibold leading-none text-lg">{title}</p>
          <p className="text-sm text-gray-500 leading-none mt-1">{handle}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 text-sm text-brand group-hover:underline">
          {cta} <ArrowUpRight className="size-4" />
        </span>
      </div>
    </a>
  );
}

// Carrusel con flechas
function GalleryCarousel({ posts, ariaLabel }: { posts: any[]; ariaLabel: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 260; // cuanto scrollear por click
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Botón izq */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-50"
        aria-label="Anterior"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Contenedor scrollable */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-8">
        {posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative shrink-0"
            style={{ width: 240, height: 190 }} // más grandes
            aria-label={`${ariaLabel} ${i + 1}`}
          >
            <img
              src={p.thumb}
              alt={p.alt ?? ariaLabel}
              className="h-full w-full object-cover rounded-xl border border-gray-200"
              loading="lazy"
            />
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-brand/40 transition" />
          </a>
        ))}
      </div>

      {/* Botón der */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-50"
        aria-label="Siguiente"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

export default function FollowUsSection_Mixed_Big() {
  const [open, setOpen] = useState(false);

  return (
    <section id="follow-us" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Seguinos en Redes</h2>
          <p className="text-gray-600 mt-2">
            Novedades, estilos y tips de cuidado visual. Minimal y sin iframes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <NetworkCard
            title="Instagram"
            handle="@opticareginaelena"
            icon={<Instagram className="size-5" />}
            cta="Ver perfil"
            profileUrl="https://www.instagram.com/opticareginaelena"
          />
          <NetworkCard
            title="Facebook"
            handle="Óptica Regina Elena"
            icon={<Facebook className="size-5" />}
            cta="Ver página"
            profileUrl="https://www.facebook.com/OpticaReginaElena/"
          />
        </div>

        {/* Toggle */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
          >
            <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
            {open ? "Ocultar publicaciones" : "Ver publicaciones"}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="galleries"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <Instagram className="size-5" />
                    <p className="font-medium text-lg">Últimas en Instagram</p>
                  </div>
                  <GalleryCarousel posts={IG_POSTS} ariaLabel="Publicación de Instagram" />
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <Facebook className="size-5" />
                    <p className="font-medium text-lg">Últimas en Facebook</p>
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

