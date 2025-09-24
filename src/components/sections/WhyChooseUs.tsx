import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BadgeCheck, Eye, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Diseños Exclusivos",
    description:
      "Colecciones curadas con las últimas tendencias internacionales.",
  },
  {
    icon: Eye,
    title: "Tecnología de Precisión",
    description:
      "Equipos de última generación para un diagnóstico exacto.",
  },
  {
    icon: Shield,
    title: "Garantía Extendida",
    description:
      "Protegemos tu inversión con cobertura ante cualquier inconveniente.",
  },
  {
    icon: BadgeCheck,
    title: "Atención Personalizada",
    description:
      "Nuestro equipo te acompaña en cada paso para que elijas lo mejor.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          ¿Por qué Elegirnos?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
          Tenemos <span className="font-semibold text-brand">atención personalizada</span> que hace la diferencia. 
          Te guiamos paso a paso para elegir tus próximos lentes, considerando tu estilo de vida, 
          tus necesidades visuales y tus preferencias estéticas.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://api.whatsapp.com/send?phone=5493513570864&text=¡Hola!%20Me%20interesa%20recibir%20atención%20personalizada%20para%20elegir%20mis%20lentes.%20¿Pueden%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <img src="/wsp.png" alt="WhatsApp" className="w-6 h-6" />
              Recibir Asesoramiento Personalizado
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {features.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={title}
            className="text-center p-6 rounded-2xl bg-white backdrop-blur-md border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[103%] cursor-pointer select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-brand/10 text-brand">
                <Icon className="w-8 h-8" />
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
          Nuestro equipo de especialistas está aquí para que te sientas completamente seguro de tu elección.
          Consultanos sin compromiso. Estamos aquí para ayudarte a ver mejor y verte mejor.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
