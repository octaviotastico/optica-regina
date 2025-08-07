import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import { Suspense, useState } from "react";

const HeroSection = () => (
  <section className="grid md:grid-cols-2 gap-6 p-8 items-center">
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
      <Button className="text-lg px-6 py-3 rounded-2xl shadow">
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

const ProductCard = ({
  name,
  desc,
  img,
}: {
  name: string;
  desc: string;
  img: string;
}) => (
  <Card className="hover:scale-105 transition-transform cursor-pointer group h-fit">
    <CardContent className="flex flex-col p-3 items-center gap-2">
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-xl group-hover:h-64 transition-all duration-300"
      />
      <h3 className="text-xl font-semibold text-center mt-2">{name}</h3>
      <p className="text-gray-500 text-sm text-center">{desc}</p>
      <Button variant="outline" size="lg" className="mt-4 cursor-pointer">
        Ver Más <ChevronRight />
      </Button>
    </CardContent>
  </Card>
);

const FeaturedProducts = () => {
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
    <section className="p-8 bg-gray-100 min-h-[646px]">
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
      En <strong>Óptica Regina Elena</strong> llevamos más de{" "}
      <strong>20 años</strong> transformando la salud visual de Córdoba.
      Combinamos experiencia, atención personalizada y tecnología 3D de prueba
      virtual para ayudarte a elegir tus anteojos sin moverte de casa.
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
    comment:
      "Me asesoraron excelente y encontré los anteojos perfectos para mí.",
    img: "./people.png",
  },
  {
    name: "Julián D.",
    comment: "Tienen muchísima variedad y muy buena atención. ¡Volveré!",
    img: "./people.png",
  },
  {
    name: "Florencia M.",
    comment:
      "Probé los modelos online y fue tal cual a cómo me quedaron. Muy conforme.",
    img: "./people.png",
  },
  {
    name: "Martín R.",
    comment: "Atención personalizada y profesional. Muy recomendable.",
    img: "./people.png",
  },
  {
    name: "Sofía L.",
    comment:
      "El sistema de prueba virtual me ayudó un montón. ¡Gracias Regina Elena!",
    img: "./people.png",
  },
  {
    name: "Lucas G.",
    comment: "Servicio rápido, amable y con buenos precios.",
    img: "./people.png",
  },
];

export const Testimonials = () => {
  return (
    <section
      className="p-8 px-4 md:px-20 bg-gray-100 text-center"
      id="testimonios"
    >
      <h2 className="text-3xl font-bold mb-6">
        Lo Que Dicen Nuestros Clientes
      </h2>
      <Carousel
        className="w-3/4 mx-auto cursor-grab select-none"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-1">
          {testimonials.map((t, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
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
                      <p className="font-semibold text-sm text-gray-800">
                        — {t.name}
                      </p>
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
      Girá, acercá y descubrí cada detalle de nuestras gafas con esta
      experiencia interactiva.
    </p>
    <div className="max-w-4xl mx-auto">
      <GlassesViewer />
    </div>
  </section>
);

const openingHours = {
  lunes: "8:30 a.m. – 6:30 p.m.",
  martes: "8:30 a.m. – 6:30 p.m.",
  miércoles: "8:30 a.m. – 6:30 p.m.",
  jueves: "8:30 a.m. – 6:30 p.m.",
  viernes: "8:30 a.m. – 6:30 p.m.",
  sábado: "9:30 a.m. – 12:30 p.m.",
  domingo: "Cerrado",
};

const getToday = () => {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return days[new Date().getDay()];
};

export function OpeningHours() {
  const [isOpen, setIsOpen] = useState(false);
  const today = getToday();
  const now = new Date();
  // Helper to parse "8:30 a.m." to minutes since midnight
  function parseTime(str: string) {
    if (!str) return null;
    const match = str.match(/(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.)/i);
    if (!match) return null;
    let hour = parseInt(match[1], 10);
    const min = parseInt(match[2], 10);
    const period = match[3].toLowerCase();
    if (period === "p.m." && hour !== 12) hour += 12;
    if (period === "a.m." && hour === 12) hour = 0;
    return hour * 60 + min;
  }

  // Determine if open now
  let isOpenNow = false;
  const todayHours = openingHours[today as keyof typeof openingHours];
  if (todayHours && todayHours !== "Cerrado") {
    const [openStr, closeStr] = todayHours.split("–").map((s) => s.trim());
    const openMins = parseTime(openStr);
    const closeMins = parseTime(closeStr);
    const nowMins = now.getHours() * 60 + now.getMinutes();
    if (openMins !== null && closeMins !== null) {
      isOpenNow = nowMins >= openMins && nowMins < closeMins;
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-gray-700 font-medium">
        Hoy ({today.charAt(0).toUpperCase() + today.slice(1)}):{" "}
        <span className="font-semibold text-green-700">{todayHours}</span>
      </p>
      {isOpenNow && (
        <div className="flex items-center gap-2 mt-2 text-green-700 font-semibold">
          <CheckCircle className="w-5 h-5" />
          ¡Estamos abiertos ahora! Vení a visitarnos 😊
        </div>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 text-blue-700 hover:underline mt-3 text-sm">
          {isOpen ? "Ocultar horarios" : "Ver todos los días"}
          <ChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-3 space-y-1 text-sm text-gray-600">
          {Object.entries(openingHours).map(([day, hours]) => (
            <div
              key={day}
              className={`flex justify-between ${
                day === today ? "font-semibold text-green-700" : ""
              }`}
            >
              <span className="capitalize">{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

const VisitUs = () => {
  return (
    <section id="donde-estamos" className="p-8 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">¿Dónde Estamos?</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 text-left space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              Contactanos
            </h3>

            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-gray-700">
                Teléfono:{" "}
                <a
                  href="tel:+543513570864"
                  className="text-blue-600 hover:underline"
                >
                  +54 351 357-0864
                </a>
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <a
                  href="https://www.instagram.com/opticareginaelena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-600 hover:underline"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/OpticaReginaElena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:underline"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5493513570864&text=Tenemos%20esos%20lentes%20que%20busc%C3%A1s!%20%F0%9F%98%8E%20%C2%BFen%20qu%C3%A9%20podemos%20ayudarte%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-600" /> Horarios de Atención
          </h3>
          <OpeningHours />
        </div>

        {/* Right Column - Map */}
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-2 flex items-center gap-2">
            <MapPin className="inline-block text-red-500" />
            Roma 535, X5004 BAK, Córdoba, Argentina
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.8377894103648!2d-64.1902138!3d-31.4129989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28f9a3771fd%3A0xf50d387e9ad3c4ae!2sRoma%20535%2C%20X5004BAK%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1691091819526!5m2!1ses!2sar"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl overflow-hidden shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

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
