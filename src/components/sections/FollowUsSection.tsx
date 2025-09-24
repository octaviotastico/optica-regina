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
  { thumb: "/ig_1.png", href: "https://www.instagram.com/p/DFnUmQWs9tf/", alt: "Publicación de Instagram de Óptica Regina Elena - Nuevos diseños y tendencias en anteojos" },
  { thumb: "/ig_2.png", href: "https://www.instagram.com/p/DJj3_Qrt2Zn/", alt: "Post de Instagram mostrando la colección de anteojos de Óptica Regina Elena en Córdoba" },
  { thumb: "/ig_3.png", href: "https://www.instagram.com/p/DM0Q97Js_lp/", alt: "Contenido de Instagram sobre salud visual y consejos de Óptica Regina Elena" },
];

const FB_POSTS = [
  { thumb: "/fb_1.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/pfbid02yTJfjLthzzfdD7NMuvr7x2wrmwHYX49sjjWS7HxHmhfXsF9FkP6VNcPWLqkVaj7Nl", alt: "Publicación de Facebook de Óptica Regina Elena - Promociones y novedades en anteojos" },
  { thumb: "/fb_2.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/pfbid02rdCaJGU8oPTe4h9jnJYQgjgXMDFdcLTo6NBkyqA3sWZGgrqjCVgXzr6kyp4RivuPl", alt: "Post de Facebook sobre servicios de Óptica Regina Elena en Hospital Italiano Córdoba" },
  { thumb: "/fb_3.jpg", href: "https://www.facebook.com/OpticaReginaElena/posts/pfbid0246BVfXx15V5YovTXn7x8U5QgCSxkFqwpjK3FU3w8JJZ3WNqWvLcJz2sTbAaaQy2Yl", alt: "Contenido de Facebook con testimonios de clientes de Óptica Regina Elena" },
];

/* ---------- PAGE ---------- */
export const FollowUsSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="follow-us" className="bg-white" aria-labelledby="social-title">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="social-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Seguinos en Redes Sociales
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Descubrí las últimas tendencias en anteojos, novedades de Óptica Regina Elena y consejos para cuidar tu salud visual en Córdoba.
          </p>
        </div>

        {/* Cards redes */}
        <div className="mt-7 flex flex-wrap justify-center gap-4 sm:gap-6">
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
          <NetworkCard
            title="WhatsApp"
            handle="+54 9 351 357-0864"
            icon={<img src="/wsp.png" alt="Logo de WhatsApp" className="size-5 sm:size-6" loading="lazy" />}
            cta="Enviar mensaje"
            profileUrl="https://wa.me/5493513570864"
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