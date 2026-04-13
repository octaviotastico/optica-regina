import ProductCard from "../commons/ProductCard";

const HighlightedCategoriesSection = () => {
  const products = [
    {
      name: "Diseño Urbano",
      desc: "Estilo moderno y versátil para el día a día.",
      img: "./glasses/urban.avif",
    },
    {
      name: "Diseño Minimalista",
      desc: "Líneas limpias y elegantes para un look sofisticado.",
      img: "./glasses/minimalist.avif",
    },
    {
      name: "Diseño Vintage",
      desc: "Un toque retro con tecnología actual y calidad premium.",
      img: "./glasses/vintage.avif",
    },
  ];

  return (
    <section className="p-8 bg-gray-100 min-h-[606px]" id="categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="text-3xl font-bold mb-6 text-center">
        Explorá Nuestro Catálogo
      </h2>
      <p className="text-center">
        Tenemos lentes para todos los estilos, ¡encontrá los tuyos! <br />
        Descubrí diseños únicos que se adaptan a tu personalidad y necesidades visuales.
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
