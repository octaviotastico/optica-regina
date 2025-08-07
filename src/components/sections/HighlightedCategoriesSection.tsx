import ProductCard from "../commons/ProductCard";

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
    <section className="p-8 bg-gray-100 min-h-[606px]">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Categorias Destacadas
      </h2>
      <p className="text-center">
        Elige una categoría para explorar nuestros productos destacados.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedCategoriesSection;
