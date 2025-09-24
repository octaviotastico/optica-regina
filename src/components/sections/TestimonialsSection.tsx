import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

const googleReviews = [
  {
    name: "Dario Ruarte",
    comment: "Atienden correctamente, los precios son los normales, y en general respetan los plazos de entrega. Un buen servicio aunque puede resultar dificultoso estacionar, ya que siempre hay vehículos en esa zona (por el Hospital)",
    url: "https://maps.app.goo.gl/hCJ4DsX5Q54EbZq16",
    img: "/review_1.png",
  },
  {
    name: "Dania Maria Luz Ferreyra",
    comment: "La atención un 10! De todas, con mucha paciencia, es un poco más caro pero si usas mucho las pantallas tiene filtros que pocas ópticas tienen",
    url: "https://maps.app.goo.gl/4YbbKnMrDDsUEcFUA",
    img: "/review_2.png",
  },
  {
    name: "Yolanda Medina",
    comment: "Buena atención. Buen trato. Cumplen con los plazos de entrega, te avisan por teléfono cuando esta listo. Muy buena calidad de sus productos y trabajo.",
    url: "https://maps.app.goo.gl/jV1NByHAQzHzWQQG6",
    img: "/review_3.png",
  },
  {
    name: "Francisco Fermin",
    comment: "Excelente atención, fui por unos lentes recetados y me fueron entregados muy rápido dentro del tema entendido con lo de la pandemia. Gracias.",
    url: "https://maps.app.goo.gl/qW67tNTagFLHMJtt9",
    img: "/review_4.png",
  },
  {
    name: "Alejandra Brandolin",
    comment: "Excelente atención!! Tienen hermosas monturas,  de ultima moda, muy buena  calidad y buenos precios.",
    url: "https://maps.app.goo.gl/strgg4zs1p9GMVbq8",
    img: "/review_5.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      className="p-8 px-4 md:px-20 bg-gray-100 text-center"
      id="reviews"
      aria-labelledby="testimonials-title"
    >
      <h2 id="testimonials-title" className="text-3xl font-bold mb-6">
        Lo Que Dicen Nuestros Clientes
      </h2>
      <div className="relative">
        <Carousel
          className="w-full max-w-full md:w-full lg:w-3/4 mx-auto cursor-grab select-none relative"
          opts={{ loop: true }}
        >
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none max-sm:hidden" />
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none max-sm:hidden" />
        <CarouselContent className="-ml-1 max-sm:ml-0">
          {googleReviews.map((t, index) => (
            <CarouselItem
              key={index}
              className="pl-1 max-sm:pl-0 basis-full md:basis-1/2"
            >
              <div className="p-2 h-full max-sm:p-0">
                <Card className="h-full justify-center relative">
                  <CardContent className="p-6 flex items-center gap-4 text-left max-sm:flex-col">
                    <img
                      src={t.img}
                      alt={`Foto de perfil de ${t.name} - Cliente de Óptica Regina Elena en Córdoba`}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex flex-col h-full">
                      <p className="text-gray-700 italic mb-2">"{t.comment}"</p>
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-sm text-gray-800">
                          — {t.name}
                        </p>
                      </div>
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors absolute bottom-3 w-max right-4"
                      >
                        Ver Review
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselPrevious className="!bg-white shadow !border-gray-300 max-sm:left-0 max-sm:scale-75" />
          <CarouselNext className="!bg-white shadow !border-gray-300 max-sm:right-0 max-sm:scale-75" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
