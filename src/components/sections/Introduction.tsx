import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const IntroductionSection = () => (
  <section
    className="grid sm:grid-cols-2 gap-8 p-8 items-center max-sm:p-0 relative"
    id="introduction"
    aria-labelledby="hero-title"
  >
    <motion.div
      className="absolute inset-0 max-sm:block hidden overflow-hidden"
      style={{
        backgroundImage: "url('/banner-2.avif')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-0 max-sm:block hidden"
      animate={{
        background: [
          "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.75) 100%)",
          "linear-gradient(270deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.75) 100%)"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative max-sm:p-6 max-sm:py-10"
    >
      <h1 id="hero-title" className="text-5xl font-bold mb-4">
        Descubrí tus Próximos Lentes Favoritos en Córdoba
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-sm:text-black max-sm:font-semibold">
        Explorá nuestra amplia colección online y encontrá el estilo perfecto para vos.
        Comprá desde casa con la garantía de calidad de siempre.
      </p>
      <Button
        className="text-lg px-6 py-3 shadow cursor-pointer bg-brand hover:!bg-[#dd3a45]"
        asChild
      >
        <a
          href="https://farmaciashospitalitaliano.com.ar/optica-regina-elena/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShoppingCart className="w-5 h-5" />
          Comprar Ahora
        </a>
      </Button>
    </motion.div>

    <motion.div
      className="w-full h-full flex justify-end max-sm:hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <img
        src="/banner-2.avif"
        alt="Colección de anteojos y lentes de Óptica Regina Elena en Córdoba - Estilos modernos y clásicos disponibles"
        className="w-full max-h-[500px] object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </motion.div>
  </section>
);

export default IntroductionSection;
