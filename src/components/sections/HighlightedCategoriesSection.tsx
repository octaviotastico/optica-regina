import ProductCard from "../commons/ProductCard";

const HighlightedCategoriesSection = () => {
  const products = [
    {
      name: "Diseño Urbano",
      desc: "Estilo moderno y versátil para el día a día.",
      img: "./urbanas.png",
    },
    {
      name: "Diseño Minimalista",
      desc: "Líneas limpias y elegantes para un look sofisticado.",
      img: "./minimalistas.png",
    },
    {
      name: "Diseño Vintage",
      desc: "Un toque retro con tecnología actual.",
      img: "./vintages.png",
    },
  ];

  return (
    <section className="p-8 bg-gray-100 min-h-[606px]" id="categories">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Categorias Destacadas
      </h2>
      <p className="text-center">
        Elige una categoría para explorar nuestros productos destacados.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8 xl:px-20">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedCategoriesSection;
