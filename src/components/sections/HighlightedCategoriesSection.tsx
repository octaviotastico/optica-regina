import ProductCard from "../commons/ProductCard";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const HighlightedCategoriesSection = () => {
  const products = [
    {
      name: "Gafas Urbanas",
      desc: "Estilo moderno y versátil para el día a día.",
      img: "./urbanas.png",
    },
    {
      name: "Diseño Minimal",
      desc: "Líneas limpias y elegantes para un look sofisticado.",
      img: "./minimalistas.png",
    },
    {
      name: "Vintage Moderno",
      desc: "Un toque retro con tecnología actual.",
      img: "./vintages.png",
    },
  ];

  return (
    <section className="p-8 bg-gray-100 min-h-[606px]" id="categories">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Categorias Destacadas
      </motion.h2>
      <motion.p
        className="text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
      >
        Elige una categoría para explorar nuestros productos destacados.
      </motion.p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((p, i) => (
          <ProductCard key={p.name} index={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedCategoriesSection;
