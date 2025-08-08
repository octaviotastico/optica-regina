import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle,
  ChevronRight,
  Clock,
  Eye,
  Users,
} from "lucide-react";

const AboutUsSection = () => (
  <section
    id="about-us"
    className="p-8 bg-white text-center border-t border-gray-100"
  >
    <motion.h2
      className="text-4xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ¿Quiénes Somos?
    </motion.h2>

    <motion.p
      className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      En <strong>Óptica Regina Elena</strong> llevamos más de{" "}
      <strong>20 años</strong> transformando la salud visual de Córdoba.
      Combinamos experiencia, atención personalizada y tecnología 3D de prueba
      virtual para ayudarte a elegir tus anteojos sin moverte de casa.
    </motion.p>

    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="text-brand" /> ¿Por qué elegirnos?
        </h3>
        <ul className="space-y-3 text-gray-700">
          {[
            "Más de 2 décadas de experiencia.",
            "Atención profesional y cercana.",
            "Modelos exclusivos y actuales.",
            "Prueba virtual en 3D al instante.",
            "Cobertura con múltiples obras sociales.",
            "Entrega rápida y seguimiento postventa.",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <ChevronRight className="text-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Users className="text-brand" /> Nuestros Números
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-3">
            <Eye className="text-brand" />
            <span>
              <strong>+10.000</strong> clientes vieron mejor con nosotros
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Building2 className="text-brand" />
            <span>
              <strong>+15</strong> obras sociales con convenio activo
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Clock className="text-brand" />
            <span>
              <strong>48 hs</strong> promedio de entrega en CBA Capital
            </span>
          </li>
        </ul>
      </motion.div>
    </div>

    <motion.p
      className="text-md text-gray-500 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Tu visión, nuestro compromiso. Visitanos en Roma 535, Córdoba.
    </motion.p>
  </section>
);

export default AboutUsSection;
