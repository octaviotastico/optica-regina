import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Facebook,
  Instagram
} from "lucide-react";
import { useState } from "react";
import GalleryCarousel from "../commons/GalleryCarousel";
import NetworkCard from "../commons/NetworkCard";

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

/* ---------- PAGE ---------- */
export const FollowUsSection = () => {
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
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-800 cursor-pointer"
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

export default FollowUsSection;