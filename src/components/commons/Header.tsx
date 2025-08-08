import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle click events for navigation links
  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(targetId);
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
        className="z-50 flex justify-between items-center shadow-sm text-gray-800"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "inicio")}
          className="text-2xl font-bold text-brand tracking-tight cursor-pointer"
        >
          Óptica Regina
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "inicio")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#categories"
            onClick={(e) => handleNavClick(e, "categories")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Categorías
          </a>
          <a
            href="#about-us"
            onClick={(e) => handleNavClick(e, "about-us")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Nosotros
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "testimonials")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Testimonios
          </a>
          <a
            href="#try-in-3d"
            onClick={(e) => handleNavClick(e, "try-in-3d")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Probar en 3D
          </a>
          <a
            href="#visit-us"
            onClick={(e) => handleNavClick(e, "visit-us")}
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Dónde Estamos
          </a>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
