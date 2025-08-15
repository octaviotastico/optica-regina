import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => (
  <motion.section
    id="cta"
    className="relative p-12 text-center overflow-hidden bg-gradient-to-br from-brand to-[#dd3a45] text-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="absolute inset-0 bg-white/20 backdrop-blur-md"/>
    <motion.div
      className="relative z-10 max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-3xl font-bold">¿Listo para ver con claridad?</h2>
      <p className="text-lg">
        Reservá tu turno online y viví la experiencia Regina Elena.
      </p>
      <Button size="lg" className="bg-white text-brand hover:bg-gray-100 cursor-pointer">
        Agendar Visita
      </Button>
    </motion.div>
  </motion.section>
);

export default CTASection;

