import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Contacto
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
      >
        ¿Listo para ver mejor? Envíanos tu consulta y te responderemos.
      </motion.p>
      <motion.form
        className="bg-white/30 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 rounded-lg bg-white/70 border border-white/20 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white/70 border border-white/20 focus:outline-none"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="p-3 rounded-lg bg-white/70 border border-white/20 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="mt-2 bg-brand text-white py-3 rounded-lg hover:bg-brand-light transition-colors"
          >
            Enviar
          </button>
        </div>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
