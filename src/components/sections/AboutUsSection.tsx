import { motion, useReducedMotion } from "framer-motion";
import { Building2, CheckCircle, ChevronRight, Clock, Eye, Users } from "lucide-react";

const AboutUsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about-us" className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Título + lead */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight text-center"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          ¿Quiénes Somos?
        </motion.h2>

        <motion.p
          className="mt-3 text-sm sm:text-base text-gray-600 mx-auto text-center max-w-prose"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
        >
          En <strong>Óptica Regina Elena</strong> llevamos más de{" "}
          <strong>20 años</strong> transformando la salud visual de Córdoba. Combinamos
          experiencia, atención personalizada y prueba virtual 3D para ayudarte a elegir tus
          anteojos sin moverte de casa.
        </motion.p>

        {/* Contenido */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Por qué elegirnos */}
          <motion.div
            className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4 sm:p-6"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="text-brand h-5 w-5" />
              ¿Por qué elegirnos?
            </h3>
            <ul className="space-y-2.5 text-gray-700">
              {[
                "Más de 2 décadas de experiencia.",
                "Atención profesional y cercana.",
                "Modelos exclusivos y actuales.",
                "Prueba virtual en 3D al instante.",
                "Cobertura con múltiples obras sociales.",
                "Entrega rápida y seguimiento postventa.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ChevronRight className="text-brand h-4 w-4 mt-0.5" />
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nuestros números */}
          <motion.div
            className="rounded-2xl border border-gray-100 p-4 sm:p-6"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.05 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
              <Users className="text-brand h-5 w-5" />
              Nuestros Números
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-gray-50/60 border border-gray-100 p-3 flex items-start gap-3">
                <Eye className="text-brand h-5 w-5 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong className="font-semibold">+10.000</strong> clientes vieron mejor con nosotros
                </p>
              </div>

              <div className="rounded-xl bg-gray-50/60 border border-gray-100 p-3 flex items-start gap-3">
                <Building2 className="text-brand h-5 w-5 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong className="font-semibold">+15</strong> obras sociales con convenio activo
                </p>
              </div>

              <div className="rounded-xl bg-gray-50/60 border border-gray-100 p-3 flex items-start gap-3 sm:col-span-2">
                <Clock className="text-brand h-5 w-5 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong className="font-semibold">48 hs</strong> promedio de entrega en CBA Capital
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mt-8 text-center text-xs sm:text-sm text-gray-500"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
        >
          Tu visión, nuestro compromiso. Visitanos en Roma 535, Córdoba.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUsSection;
