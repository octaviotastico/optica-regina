import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle,
  ChevronRight,
  Clock,
  Eye, MapPin, Users
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

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
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Modelos Destacados</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

// const AboutUs = () => (
//   <section id="nosotros" className="p-8 bg-white text-center">
//     <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
//     <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//       En <strong>Óptica Regina Elena</strong>, llevamos más de 20 años cuidando la salud visual de nuestra comunidad.
//       Nos especializamos en anteojos de receta, lentes de sol, y tecnología de prueba virtual para que elijas tu próximo par sin moverte de casa.
//     </p>
//   </section>
// );

// const AboutUs = () => (
//   <section id="nosotros" className="p-8 bg-white text-center">
//     <h2 className="text-3xl font-bold mb-6">¿Quiénes Somos?</h2>
//     <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
//       En <strong>Óptica Regina Elena</strong> llevamos más de <strong>20 años</strong> cuidando la salud visual de nuestra comunidad. Nos especializamos en anteojos de receta, lentes de sol y tecnología de prueba virtual 3D para que elijas el modelo ideal desde la comodidad de tu hogar.
//     </p>

//     <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left mb-8">
//       <div>
//         <h3 className="text-xl font-semibold mb-2">¿Por qué elegirnos?</h3>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>Más de 2 décadas de trayectoria en salud visual.</li>
//           <li>Atención personalizada y asesoramiento profesional.</li>
//           <li>Amplio catálogo con modelos exclusivos.</li>
//           <li>Prueba virtual 3D en tiempo real.</li>
//           <li>Convenios con más de 15 obras sociales.</li>
//           <li>Entrega rápida y seguimiento postventa.</li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Nuestros Números</h3>
//         <ul className="text-gray-700 space-y-2">
//           <li>👓 <strong>+10.000</strong> clientes satisfechos</li>
//           <li>🏥 <strong>+15</strong> obras sociales con cobertura directa</li>
//           <li>📍 <strong>1</strong> local céntrico con atención personalizada</li>
//           <li>🚀 <strong>48 hs</strong> promedio de entrega en CBA Capital</li>
//           <li>🖥️ <strong>100%</strong> integración con prueba virtual</li>
//         </ul>
//       </div>
//     </div>

//     <p className="text-md text-gray-500">
//       Nos apasiona ayudarte a ver y verte mejor. Te esperamos en Roma 535, Córdoba.
//     </p>
//   </section>
// );

const AboutUs = () => (
  <section
    id="nosotros"
    className="p-8 bg-white text-center border-t border-gray-100"
  >
    <motion.h2
      className="text-4xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ¿Quiénes Somos?
    </motion.h2>

    <motion.p
      className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      En <strong>Óptica Regina Elena</strong> llevamos más de <strong>20 años</strong> transformando la salud visual de Córdoba.
      Combinamos experiencia, atención personalizada y tecnología 3D de prueba virtual para ayudarte a elegir tus anteojos sin moverte de casa.
    </motion.p>

    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-600" /> ¿Por qué elegirnos?
        </h3>
        <ul className="space-y-3 text-gray-700">
          {[
            "Más de 2 décadas de experiencia.",
            "Atención profesional y cercana.",
            "Modelos exclusivos y actuales.",
            "Prueba virtual en 3D al instante.",
            "Cobertura con múltiples obras sociales.",
            "Entrega rápida y seguimiento postventa.",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="text-blue-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Users className="text-indigo-600" /> Nuestros Números
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-3">
            <Eye className="text-purple-500" />
            <span>
              <strong>+10.000</strong> clientes vieron mejor con nosotros
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Building2 className="text-rose-500" />
            <span>
              <strong>+15</strong> obras sociales con convenio activo
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Clock className="text-teal-600" />
            <span>
              <strong>48 hs</strong> promedio de entrega en CBA Capital
            </span>
          </li>
        </ul>
      </motion.div>
    </div>

    <motion.p
      className="text-md text-gray-500 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Tu visión, nuestro compromiso. Visitanos en Roma 535, Córdoba.
    </motion.p>
  </section>
);

const testimonials = [
  {
    name: "Camila A.",
    comment: "Me asesoraron excelente y encontré los anteojos perfectos para mí.",
    // img: "/reviews/camila.jpg",
    img: "./people.png",
  },
  {
    name: "Julián D.",
    comment: "Tienen muchísima variedad y muy buena atención. ¡Volveré!",
    // img: "/reviews/julian.jpg",
    img: "./people.png",
  },
  {
    name: "Florencia M.",
    comment: "Probé los modelos online y fue tal cual a cómo me quedaron. Muy conforme.",
    // img: "/reviews/florencia.jpg",
    img: "./people.png",
  },
  {
    name: "Martín R.",
    comment: "Atención personalizada y profesional. Muy recomendable.",
    // img: "/reviews/martin.jpg",
    img: "./people.png",
  },
  {
    name: "Sofía L.",
    comment: "El sistema de prueba virtual me ayudó un montón. ¡Gracias Regina Elena!",
    // img: "/reviews/sofia.jpg",
    img: "./people.png",
  },
  {
    name: "Lucas G.",
    comment: "Servicio rápido, amable y con buenos precios.",
    // img: "/reviews/lucas.jpg",
    img: "./people.png",
  },
];

export const Testimonials = () => {
  return (
    <section className="p-8 px-4 md:px-20 bg-gray-100 text-center" id="testimonios">
      <h2 className="text-3xl font-bold mb-6">Lo Que Dicen Nuestros Clientes</h2>
      <Carousel className="w-3/4 mx-auto cursor-grab select-none" opts={{ loop: true }}>
        <CarouselContent className="-ml-1">
          {testimonials.map((t, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <Card className="h-full">
                  <CardContent className="p-6 flex items-center gap-4 text-left">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-gray-700 italic mb-2">"{t.comment}"</p>
                      <p className="font-semibold text-sm text-gray-800">— {t.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!bg-white shadow !border-gray-300" />
        <CarouselNext className="!bg-white shadow !border-gray-300" />
      </Carousel>
    </section>
  );
};



function GlassesModel() {
  const { scene } = useGLTF("/models/glasses-custom.glb");
  return <primitive object={scene} scale={1} />;
}

export const GlassesViewer = () => (
  <div className="w-full h-[500px] bg-gray-100 rounded-2xl shadow-inner cursor-grab">
    <Canvas camera={{ position: [-7, 3, 12], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <GlassesModel />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  </div>
);

const TryIn3D = () => (
  <section className="p-8 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Explorá el Modelo en 3D</h2>
    <p className="text-gray-600 mb-6">
      Girá, acercá y descubrí cada detalle de nuestras gafas con esta experiencia interactiva.
    </p>
    <div className="max-w-4xl mx-auto">
      <GlassesViewer />
    </div>
  </section>
);


const VisitUs = () => (
  <section id="donde-estamos" className="p-8 text-center bg-gray-100">
    <h2 className="text-3xl font-bold mb-4">¿Dónde Estamos?</h2>
    <p className="text-lg text-gray-600 mb-2 flex justify-center items-center gap-2">
      <MapPin className="inline-block" />
      Roma 535, X5004 BAK, Córdoba, Argentina
    </p>
    <div className="w-full max-w-3xl mx-auto h-[350px] rounded-2xl overflow-hidden shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.8377894103648!2d-64.1902138!3d-31.4129989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28f9a3771fd%3A0xf50d387e9ad3c4ae!2sRoma%20535%2C%20X5004BAK%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1691091819526!5m2!1ses!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);


export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
      <TryIn3D />
      <VisitUs />
    </main>
  );
}
