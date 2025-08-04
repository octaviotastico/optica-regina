import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="grid md:grid-cols-2 gap-6 p-8 items-center">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-5xl font-bold mb-4">Descubrí tus Próximos Lentes Favoritos</h1>
      <p className="text-lg text-gray-600 mb-6">
        Probá nuestros modelos en línea con tecnología de prueba virtual 3D.
      </p>
      <Button className="text-lg px-6 py-3 rounded-2xl shadow">Probar Ahora</Button>
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

const ProductCard = ({ name, img }: { name: string, img: string }) => (
  <Card className="hover:scale-105 transition-transform cursor-pointer group h-fit">
    <CardContent className="p-3">
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-xl mb-4 group-hover:h-64 transition-all duration-300"
      />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </CardContent>
  </Card>
);

const FeaturedProducts = () => {
  const products = [
    { name: "Gafas Urbanas", img: "./urbanas.png" },
    { name: "Diseño Minimal", img: "./minimalistas.png" },
    { name: "Vintage Moderno", img: "./vintages.png" },
  ];

  return (
    <section className="p-8 bg-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Modelos Destacados</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
}
