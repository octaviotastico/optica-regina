import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { handleScrollClick } from "@/utils/scroll";

const IntroductionSection = () => (
  <section
    className="grid md:grid-cols-2 gap-6 p-8 items-center"
    id="introduction"
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-5xl font-bold mb-4">
        Descubrí tus Próximos Lentes Favoritos
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Probá nuestros modelos en línea con tecnología de prueba virtual 3D.
      </p>
      <Button
        className="text-lg px-6 py-3 shadow cursor-pointer bg-brand hover:!bg-[#dd3a45]"
        onClick={(e) => handleScrollClick(e, "try-in-3d")}
        >
        Probar Ahora
      </Button>
    </motion.div>

    <motion.div
      className="w-full h-full flex justify-end"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <img
        src="./display.png"
        alt="Modelos de gafas"
        className="w-full max-w-xl"
      />
    </motion.div>
  </section>
);

export default IntroductionSection;
