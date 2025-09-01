import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { handleScrollClick } from "@/utils/scroll";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Header scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Esc + lock body scroll when menu is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener("keydown", onKeyDown);
      };
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const onLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleScrollClick(e, id);
    setMenuOpen(false);
  };

  return (
    <>
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
              padding: "1.5rem 2rem",
              background: "#fff",
              boxShadow: "none",
            },
            scrolled: {
              width: "90%",
              top: "1rem",
              left: "50%",
              x: "-50%",
              borderRadius: "1.5rem",
              position: "fixed",
              padding: "0.75rem 1.5rem",
              background: "rgba(255, 255, 255, 0.75)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              backdropFilter: "blur(12px)",
            },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="z-50 flex justify-between items-center shadow-sm text-gray-800 max-w-screen"
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => onLink(e, "inicio")}
            className="text-2xl font-bold text-brand tracking-tight cursor-pointer"
          >
            Óptica Regina
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#inicio"
              onClick={(e) => onLink(e, "inicio")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Inicio
            </a>
            <a
              href="#categories"
              onClick={(e) => onLink(e, "categories")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Categorías
            </a>
            <a
              href="#about-us"
              onClick={(e) => onLink(e, "about-us")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Nosotros
            </a>
            <a
              href="#reviews"
              onClick={(e) => onLink(e, "reviews")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Testimonios
            </a>
            <a
              href="#follow-us"
              onClick={(e) => onLink(e, "follow-us")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Síguenos
            </a>
            <a
              href="#why-choose-us"
              onClick={(e) => onLink(e, "why-choose-us")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Por qué elegirnos
            </a>
            <a
              href="#try-in-3d"
              onClick={(e) => onLink(e, "try-in-3d")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Probar en 3D
            </a>
            <a
              href="#visit-us"
              onClick={(e) => onLink(e, "visit-us")}
              className="hover:text-brand transition-colors cursor-pointer"
            >
              Dónde Estamos
            </a>
          </nav>

          {/* Mobile Burger */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-haspopup="menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 active:scale-95 transition"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu (overlay + drawer) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60] bg-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              id="mobile-menu"
              className="fixed right-[5vw] top-24 z-[70] rounded-xl w-fit min-w-64 max-w-[90vw] bg-white/50 shadow-2xl p-6 flex flex-col md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "120%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xl font-semibold text-brand">
                  Óptica Regina
                </span>
              </div>

              <div className="grid gap-4 text-base font-medium">
                <a
                  href="#inicio"
                  onClick={(e) => onLink(e, "inicio")}
                  className="py-2 hover:text-brand"
                >
                  Inicio
                </a>
                <a
                  href="#categories"
                  onClick={(e) => onLink(e, "categories")}
                  className="py-2 hover:text-brand"
                >
                  Categorías
                </a>
                <a
                  href="#about-us"
                  onClick={(e) => onLink(e, "about-us")}
                  className="py-2 hover:text-brand"
                >
                  Nosotros
                </a>
                <a
                  href="#reviews"
                  onClick={(e) => onLink(e, "reviews")}
                  className="py-2 hover:text-brand"
                >
                  Testimonios
                </a>
                <a
                  href="#follow-us"
                  onClick={(e) => onLink(e, "follow-us")}
                  className="py-2 hover:text-brand"
                >
                  Síguenos
                </a>
                <a
                  href="#why-choose-us"
                  onClick={(e) => onLink(e, "why-choose-us")}
                  className="py-2 hover:text-brand"
                >
                  Por qué elegirnos
                </a>
                <a
                  href="#try-in-3d"
                  onClick={(e) => onLink(e, "try-in-3d")}
                  className="py-2 hover:text-brand"
                >
                  Probar en 3D
                </a>
                <a
                  href="#visit-us"
                  onClick={(e) => onLink(e, "visit-us")}
                  className="py-2 hover:text-brand"
                >
                  Dónde Estamos
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
