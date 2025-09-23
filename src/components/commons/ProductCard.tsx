import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const ProductCard = ({
  name,
  desc,
  img,
}: {
  name: string;
  desc: string;
  img: string;
}) => (
  <Card className="hover:scale-105 transition-transform cursor-pointer group h-fit pt-0 pb-2 min-w-[300px] min-h-[430px] max-w-[600px] flex-1">
    <CardContent className="flex flex-col p-3 items-center gap-2">
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-xl group-hover:h-64 transition-all duration-300"
      />
      <h3 className="text-xl font-semibold text-center mt-2">{name}</h3>
      <p className="text-gray-500 text-sm text-center">{desc}</p>
      <Button variant="outline" size="lg" className="mt-4 cursor-pointer" asChild>
        <a href="https://farmaciashospitalitaliano.com.ar/optica-regina-elena/" target="_blank" rel="noopener noreferrer">
          Ver Más <ChevronRight />
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
