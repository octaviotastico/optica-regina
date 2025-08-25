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
    <section
      id="categories"
      className="bg-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center tracking-tight">
          Categorías Destacadas
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Elegí una categoría para explorar nuestros productos destacados.
        </p>

        {/* Carrusel mobile */}
        <div
          className="
            sm:hidden
            mt-8
            -mx-4 px-4
            overflow-x-auto
            snap-x snap-mandatory
            flex gap-4
            [scrollbar-width:none]
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              className="
                shrink-0
                snap-center
                w-[85%] xs:w-[80%]
              "
            >
              <ProductCard {...p} />
            </div>
          ))}
        </div>

        {/* Grid tablet/desktop */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mt-8">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedCategoriesSection;
