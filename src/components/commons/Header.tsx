import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { handleScrollClick } from "@/utils/scroll";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  // Detecta scroll para cambiar estilo del header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detecta tamaño de pantalla para ajustar variantes
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // Cierra el menú y hace scroll suave
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    handleScrollClick(e, id);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.header
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: {
            width: "100%",
            borderRadius: "0px",
            top: 0,
            left: 0,
            right: 0,
            position: "fixed",
            padding: isMobile ? "1rem 1rem" : "1.25rem 2rem",
            background: "#fff",
            boxShadow: "none",
          },
          scrolled: {
            width: isMobile ? "100%" : "92%",
            top: isMobile ? "0.5rem" : "1rem",
            left: isMobile ? 0 : "50%",
            right: isMobile ? 0 : undefined,
            x: isMobile ? 0 : "-50%",
            borderRadius: isMobile ? "0.75rem" : "1.25rem",
            position: "fixed",
            padding: isMobile ? "0.6rem 1rem" : "0.75rem 1.5rem",
            background: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            backdropFilter: "blur(12px)",
          },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="z-50 flex justify-between items-center text-gray-800"
        role="navigation"
        aria-label="Principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => onNavClick(e, "inicio")}
          className="text-xl md:text-2xl font-bold text-brand tracking-tight cursor-pointer select-none"
        >
          Óptica Regina
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-gray-200 bg-white/70 backdrop-blur transition shadow-sm active:scale-[0.98]"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links (desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          <a
            href="#inicio"
            onClick={(e) => onNavClick(e, "inicio")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#categories"
            onClick={(e) => onNavClick(e, "categories")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Categorías
          </a>
          <a
            href="#about-us"
            onClick={(e) => onNavClick(e, "about-us")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Nosotros
          </a>
          <a
            href="#testimonials"
            onClick={(e) => onNavClick(e, "testimonials")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Testimonios
          </a>
          <a
            href="#try-in-3d"
            onClick={(e) => onNavClick(e, "try-in-3d")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Probar en 3D
          </a>
          <a
            href="#visit-us"
            onClick={(e) => onNavClick(e, "visit-us")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Dónde Estamos
          </a>
        </nav>
      </motion.header>

      {/* Overlay + Menú móvil */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fondo oscurecido */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Panel deslizante */}
            <motion.nav
              key="mobile-menu"
              id="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden"
            >
              <div className="mx-3 mt-2 rounded-2xl bg-white/90 backdrop-blur shadow-xl ring-1 ring-black/5">
                <ul className="flex flex-col p-3">
                  {[
                    { id: "inicio", label: "Inicio" },
                    { id: "categories", label: "Categorías" },
                    { id: "about-us", label: "Nosotros" },
                    { id: "testimonials", label: "Testimonios" },
                    { id: "try-in-3d", label: "Probar en 3D" },
                    { id: "visit-us", label: "Dónde Estamos" },
                  ].map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => onNavClick(e, item.id)}
                        className="block w-full px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default Header;
