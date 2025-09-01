import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { handleScrollClick } from "@/utils/scroll";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Header scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Esc + lock body scroll when menu is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [dropdownOpen]);

  const onLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleScrollClick(e, id);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const primaryNavItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#categories", label: "Categorías" },
    { href: "#about-us", label: "Nosotros" },
    { href: "#reviews", label: "Testimonios" },
    { href: "#follow-us", label: "Síguenos" },
  ];

  const secondaryNavItems = [
    { href: "#why-choose-us", label: "Por qué elegirnos" },
    { href: "#try-in-3d", label: "Probar en 3D" },
    { href: "#visit-us", label: "Dónde Estamos" }
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

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
            className="text-2xl font-bold text-brand tracking-tight cursor-pointer flex-shrink-0"
          >
            Óptica Regina
          </a>

          {/* Full Desktop Navigation (xl+) */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-medium">
            {allNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => onLink(e, item.href.slice(1))}
                className="hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hybrid Navigation (md to xl) - Primary items + More dropdown */}
          <nav className="hidden md:flex xl:hidden items-center gap-4 text-sm font-medium">
            {primaryNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => onLink(e, item.href.slice(1))}
                className="hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}

            {/* More dropdown */}
            <div className="relative" data-dropdown>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
                aria-expanded={dropdownOpen}
                aria-haspopup="menu"
              >
                Más
                <ChevronDown
                  size={14}
                  className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 py-2 z-[80]"
                  >
                    {secondaryNavItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => onLink(e, item.href.slice(1))}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-brand transition-colors cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Burger */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-haspopup="menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 active:scale-95 transition cursor-pointer"
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
                {allNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => onLink(e, item.href.slice(1))}
                    className="py-2 hover:text-brand"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;