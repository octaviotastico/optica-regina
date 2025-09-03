import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { handleScrollClick } from "@/utils/scroll";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const [moreButtonWidth, setMoreButtonWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const headerRef = useRef<HTMLHeadElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);

  const allNavItems = [
    { href: "#inicio", label: "Inicio", id: "inicio" },
    { href: "#categories", label: "Categorías", id: "categories" },
    { href: "#about-us", label: "Nosotros", id: "about-us" },
    { href: "#reviews", label: "Testimonios", id: "reviews" },
    { href: "#follow-us", label: "Síguenos", id: "follow-us" },
    { href: "#why-choose-us", label: "Por qué elegirnos", id: "why-choose-us" },
    { href: "#try-in-3d", label: "Probar en 3D", id: "try-in-3d" },
    { href: "#visit-us", label: "Dónde Estamos", id: "visit-us" }
  ];

  const visibleItems = allNavItems.slice(0, visibleCount);
  const dropdownItems = allNavItems.slice(visibleCount);
  const hasDropdownItems = dropdownItems.length > 0;

  // Measure item widths
  useEffect(() => {
    if (measurementRef.current) {
      const children = Array.from(measurementRef.current.children);
      const widths = children.slice(0, allNavItems.length).map((child) => (child as HTMLElement).offsetWidth);
      const moreWidth = children[allNavItems.length] ? (children[allNavItems.length] as HTMLElement).offsetWidth : 0;
      setItemWidths(widths);
      setMoreButtonWidth(moreWidth);
    }
  }, [allNavItems.length]);

  // Calculate visible count
  useEffect(() => {
    const calculateVisible = () => {
      if (!headerRef.current || !logoRef.current || !itemWidths.length) return;

      const headerW = headerRef.current.offsetWidth;
      const styles = getComputedStyle(headerRef.current);
      const padLeft = parseFloat(styles.paddingLeft);
      const padRight = parseFloat(styles.paddingRight);
      const totalPad = padLeft + padRight;
      const logoW = logoRef.current.offsetWidth;
      const gapPx = 16; // gap-4 = 1rem = 16px
      const threshold = 64; // Minimum gap threshold in px
      const totalItems = allNavItems.length;

      let maxK = 0;
      for (let k = 1; k <= totalItems; k++) {
        let navW = itemWidths.slice(0, k).reduce((a, b) => a + b, 0);
        const hasDrop = k < totalItems;
        const numElements = k + (hasDrop ? 1 : 0);
        const numGaps = numElements - 1;
        navW += numGaps * gapPx;
        if (hasDrop) {
          navW += moreButtonWidth;
        }
        const calcGap = headerW - totalPad - logoW - navW;
        if (calcGap >= threshold) {
          maxK = k;
        } else {
          break;
        }
      }
      // Check for k=0 if all items hidden
      if (maxK === 0 && totalItems > 0) {
        const navW = moreButtonWidth;
        const calcGap = headerW - totalPad - logoW - navW;
        if (calcGap >= threshold) {
          maxK = 0;
        }
      }
      setVisibleCount(maxK);
    };

    calculateVisible();
    window.addEventListener("resize", calculateVisible);
    return () => window.removeEventListener("resize", calculateVisible);
  }, [allNavItems.length, itemWidths, moreButtonWidth, scrolled]);

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



  return (
    <>
      <AnimatePresence>
        <motion.header
          ref={headerRef}
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
            ref={logoRef}
            href="#inicio"
            onClick={(e) => onLink(e, "inicio")}
            className="text-2xl font-bold text-brand tracking-tight cursor-pointer flex-shrink-0"
          >
            Óptica Regina
          </a>

          {/* Dynamic Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
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
                        className="absolute -right-6 top-full mt-6 w-48 rounded-xl shadow-xl border z-[80]"
                        style={{
                          // make it match the scrolled header
                          background: scrolled ? "rgba(255, 255, 255, 0.80)" : "#ffffffAA",
                          backdropFilter: scrolled ? "blur(24px)" : undefined,
                          WebkitBackdropFilter: scrolled ? "blur(24px)" : undefined,
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          borderColor: "rgba(0,0,0,0.06)",
                        }}
                      >
                        <AnimatePresence mode="popLayout">
                          {dropdownItems.map((item, index) => (
                            <motion.a
                              key={item.id}
                              href={item.href}
                              onClick={(e) => onLink(e, item.id)}
                              className="block px-4 py-2 text-sm hover:bg-red-200 rounded-lg m-1 hover:text-brand transition-colors cursor-pointer"
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
              className="fixed inset-0 z-[60]"
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

      {/* Measurement container for widths */}
      <div
        ref={measurementRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          overflow: "hidden",
          visibility: "hidden",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        {allNavItems.map((item, i) => (
          <a
            key={i}
            className="text-sm font-medium hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
        <button className="flex items-center gap-1 text-sm font-medium hover:text-brand transition-colors cursor-pointer whitespace-nowrap">
          Más
          <ChevronDown size={14} />
        </button>
      </div>
    </>
  );
};

export default Header;