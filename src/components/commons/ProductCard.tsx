import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const ProductCard = ({
  name,
  desc,
  img,
  index = 0,
}: {
  name: string;
  desc: string;
  img: string;
  index?: number;
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card className="cursor-pointer group h-fit pt-0 pb-2">
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
  </motion.div>
);

export default ProductCard;
