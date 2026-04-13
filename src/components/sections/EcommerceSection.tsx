import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CreditCard, Shield, ShoppingCart, Truck } from "lucide-react";

const benefits = [
  {
    icon: ShoppingCart,
    title: "Amplio Catálogo",
    description: "Explorá toda nuestra colección disponible las 24 horas.",
  },
  {
    icon: Truck,
    title: "Envío a Domicilio",
    description: "Recibí tus lentes en la comodidad de tu hogar.",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Misma calidad y garantía que en nuestro local físico.",
  },
  {
    icon: CreditCard,
    title: "Múltiples Pagos",
    description: "Pagá en cuotas sin interés con tarjetas de crédito.",
  },
];

const EcommerceSection = () => {
  return (
    <section id="ecommerce" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            ¡Comprá Online Desde Casa!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Visitá nuestra tienda online oficial y descubrí la comodidad de elegir tus lentes
            desde cualquier lugar. La misma calidad de siempre, ahora a un click de distancia.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="text-lg !p-6 bg-brand hover:!bg-[#dd3a45] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="https://farmaciashospitalitaliano.com.ar/optica-regina-elena/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" />
                Visitar tienda online
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50/40 hover:bg-gray-50/60 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-brand/10 text-brand">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            ¿Tenés dudas? También podés{" "}
            <a
              href="#visit-us"
              className="text-brand hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              visitarnos en nuestro local
            </a>
            {" "}o contactarnos por WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceSection;
