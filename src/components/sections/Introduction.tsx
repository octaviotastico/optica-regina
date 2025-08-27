import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { handleScrollClick } from "@/utils/scroll";

const IntroductionSection = () => (
  <section
    className="grid md:grid-cols-2 gap-6 p-8 items-center max-sm:p-0"
    id="introduction"
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="max-sm:bg-[url('./banner-2-mobile.png')] max-sm:bg-no-repeat max-sm:bg-cover max-sm:bg-center max-sm:p-6 max-sm:py-10"
    >
      <h1 className="text-5xl font-bold mb-4">
        Descubrí tus Próximos Lentes Favoritos
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-sm:text-black max-sm:font-semibold">
        Probá nuestros modelos en línea con tecnología de preview 3D.
      </p>
      <Button
        className="text-lg px-6 py-3 shadow cursor-pointer bg-brand hover:!bg-[#dd3a45]"
        onClick={(e) => handleScrollClick(e, "try-in-3d")}
      >
        Probar Ahora
      </Button>
    </motion.div>

    <motion.div
      className="w-full h-full flex justify-end max-sm:hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <img
        src="./banner-2.png"
        alt="Modelos de gafas"
        className="w-full max-w-xl"
      />
    </motion.div>
  </section>
);

export default IntroductionSection;
