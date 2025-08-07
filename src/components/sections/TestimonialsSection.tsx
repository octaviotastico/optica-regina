import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export const TestimonialsSection = () => {
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

export default TestimonialsSection;
