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
  <motion.section
    id="features"
    className="p-8 md:px-20 bg-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2
      className="text-3xl font-bold text-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      ¿Por qué Elegirnos?
    </motion.h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, description }, index) => (
        <motion.div
          key={title}
          className="p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:scale-[103%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Icon className="w-10 h-10 text-brand mb-4" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default WhyChooseUs;

