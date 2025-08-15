import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Eye, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Exámenes Visuales",
    desc: "Controles completos con tecnología de última generación.",
  },
  {
    icon: Headphones,
    title: "Asesoramiento Personalizado",
    desc: "Te guiamos para elegir el marco ideal según tu estilo.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de Calidad",
    desc: "Productos certificados y ajustes posteriores sin costo.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-white/60 backdrop-blur-sm">
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Nuestros Servicios
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
      >
        Soluciones integrales para que disfrutes la mejor experiencia visual.
      </motion.p>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="p-8 rounded-3xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <service.icon className="w-10 h-10 text-brand mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
