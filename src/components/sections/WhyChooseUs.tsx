import { motion, useReducedMotion } from "framer-motion";
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

const WhyChooseUs = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="features"
      className="bg-white"
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center tracking-tight mb-6 sm:mb-8"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué Elegirnos?
        </motion.h2>

        <div
          className="
            grid gap-4 sm:gap-6 lg:gap-8
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          "
          role="list"
          aria-label="Características destacadas"
        >
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              role="listitem"
              className="
                h-full
                rounded-2xl border border-gray-100
                bg-white/70 backdrop-blur
                shadow-sm
                p-4 sm:p-6
                text-center
                flex flex-col items-center
                transition
                md:hover:shadow-md md:hover:scale-[1.02]
                focus-within:ring-2 focus-within:ring-brand/40
              "
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.35 }}
              tabIndex={0}
            >
              <Icon className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 text-brand" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-prose">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
