import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Camila A.", comment: "Me asesoraron excelente y encontré los anteojos perfectos para mí.", img: "./people.png" },
  { name: "Julián D.", comment: "Tienen muchísima variedad y muy buena atención. ¡Volveré!", img: "./people.png" },
  { name: "Florencia M.", comment: "Probé los modelos online y fue tal cual a cómo me quedaron. Muy conforme.", img: "./people.png" },
  { name: "Martín R.", comment: "Atención personalizada y profesional. Muy recomendable.", img: "./people.png" },
  { name: "Sofía L.", comment: "El sistema de prueba virtual me ayudó un montón. ¡Gracias Regina Elena!", img: "./people.png" },
  { name: "Lucas G.", comment: "Servicio rápido, amable y con buenos precios.", img: "./people.png" },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-3">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Experiencias reales de quienes ya mejoraron su visión con nosotros.
        </p>

        <Carousel
          className="w-full max-w-6xl mx-auto select-none"
          opts={{ loop: true, align: "start" }}
        >
          {/* spacing entre ítems en todos los breakpoints */}
          <CarouselContent className="-ml-3 sm:-ml-4">
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="
                  pl-3 sm:pl-4
                  basis-full
                  sm:basis-1/2
                  lg:basis-1/3
                "
              >
                <div className="h-full">
                  <Card className="h-full rounded-2xl border-gray-200 shadow-sm">
                    <CardContent
                      className="
                        h-full
                        p-4 sm:p-6
                        flex items-center sm:items-start gap-4 sm:gap-5
                      "
                    >
                      <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        decoding="async"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0"
                        draggable={false}
                      />
                      <div className="flex flex-col">
                        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed mb-2">
                          “{t.comment}”
                        </p>
                        <p className="font-semibold text-xs sm:text-sm text-gray-800">
                          — {t.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles accesibles y táctiles */}
          <CarouselPrevious
            className="
              !left-2 sm:!left-3
              !bg-white/90 backdrop-blur
              shadow-md !border-gray-300
              hover:!bg-white
              h-9 w-9 sm:h-10 sm:w-10
            "
            aria-label="Ver testimonios anteriores"
          />
          <CarouselNext
            className="
              !right-2 sm:!right-3
              !bg-white/90 backdrop-blur
              shadow-md !border-gray-300
              hover:!bg-white
              h-9 w-9 sm:h-10 sm:w-10
            "
            aria-label="Ver más testimonios"
          />
        </Carousel>

        {/* Dots opcionales — descomentar si usás un plugin de indicadores */}
        {/* <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} aria-label={`Ir al slide ${i + 1}`} className="h-2.5 w-2.5 rounded-full bg-gray-300 data-[active=true]:bg-brand" />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
