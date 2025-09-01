import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { handleScrollClick } from "@/utils/scroll";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('xl');

  // Screen size detection
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('sm');
      else if (width < 1024) setScreenSize('md');
      else if (width < 1280) setScreenSize('lg');
      else setScreenSize('xl');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

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

  // Define nav items by breakpoint
  const mdNavItems = [
    { href: "#inicio", label: "Inicio", id: "inicio" },
    { href: "#categories", label: "Categorías", id: "categories" },
    { href: "#about-us", label: "Nosotros", id: "about-us" },
    { href: "#reviews", label: "Testimonios", id: "reviews" },
  ];

  const lgNavItems = [
    { href: "#follow-us", label: "Síguenos", id: "follow-us" },
    { href: "#why-choose-us", label: "Por qué elegirnos", id: "why-choose-us" },
  ];

  const xlNavItems = [
    { href: "#try-in-3d", label: "Probar en 3D", id: "try-in-3d" },
    { href: "#visit-us", label: "Dónde Estamos", id: "visit-us" }
  ];

  const allNavItems = [...mdNavItems, ...lgNavItems, ...xlNavItems];

  // Get visible items based on screen size
  const getVisibleItems = () => {
    switch (screenSize) {
      case 'md':
        return mdNavItems;
      case 'lg':
        return [...mdNavItems, ...lgNavItems];
      case 'xl':
        return allNavItems;
      default:
        return [];
    }
  };

  // Get dropdown items (items not visible in main nav)
  const getDropdownItems = () => {
    const visibleItems = getVisibleItems();
    const visibleIds = visibleItems.map(item => item.id);
    return allNavItems.filter(item => !visibleIds.includes(item.id));
  };

  const visibleNavItems = getVisibleItems();
  const dropdownItems = getDropdownItems();
  const hasDropdownItems = dropdownItems.length > 0;

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

          {/* Dynamic Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <AnimatePresence mode="popLayout">
              {visibleNavItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => onLink(e, item.id)}
                  className="hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  layout
                >
                  {item.label}
                </motion.a>
              ))}
            </AnimatePresence>

            {/* Dynamic More dropdown - only show if there are hidden items */}
            <AnimatePresence>
              {hasDropdownItems && (
                <motion.div
                  className="relative"
                  data-dropdown
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  layout
                >
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
                        <AnimatePresence mode="popLayout">
                          {dropdownItems.map((item, index) => (
                            <motion.a
                              key={item.id}
                              href={item.href}
                              onClick={(e) => onLink(e, item.id)}
                              className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-brand transition-colors cursor-pointer"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                                ease: [0.4, 0, 0.2, 1]
                              }}
                              layout
                            >
                              {item.label}
                            </motion.a>
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
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
                <AnimatePresence mode="popLayout">
                  {allNavItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => onLink(e, item.id)}
                      className="py-2 hover:text-brand"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.05,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </AnimatePresence>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;