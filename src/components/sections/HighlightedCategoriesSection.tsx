import ProductCard from "../commons/ProductCard";
import { motion } from "framer-motion";

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
    <motion.section
      className="p-8 bg-gray-100 min-h-[606px]"
      id="categories"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Categorias Destacadas
      </motion.h2>
      <motion.p
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Elige una categoría para explorar nuestros productos destacados.
      </motion.p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((p, index) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <ProductCard {...p} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HighlightedCategoriesSection;
