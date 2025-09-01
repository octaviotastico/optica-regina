import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <img
      src="/logo.svg"
      alt="Óptica Regina Elena"
      className="h-8 w-auto hidden sm:block"
      onError={(e) => ((e.currentTarget.style.display = "none"))}
    />
    <span className="text-xl font-extrabold tracking-tight">
      Óptica <span className="text-brand">Regina Elena</span>
    </span>
  </div>
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

// Make LinkItem usable as <a> or as a button trigger
const baseLinkClasses =
  "group inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors";
const underlineSpan =
  "bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-[background-size] duration-300 bg-gradient-to-r from-brand/70 to-brand/70";

const LinkItem = ({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}) => (
  <li className="leading-normal">
    {href ? (
      <a href={href} className={baseLinkClasses}>
        <span className={underlineSpan}>{children}</span>
        <ChevronRight className="size-4 translate-x-0 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 transition" />
      </a>
    ) : (
      <button type="button" onClick={onClick} className={baseLinkClasses}>
        <span className={underlineSpan}>{children}</span>
        <ChevronRight className="size-4 translate-x-0 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 transition" />
      </button>
    )}
  </li>
);

export default function FooterSection() {
  const [openReturns, setOpenReturns] = useState(false);
  const [openVirtual, setOpenVirtual] = useState(false);
  const [openDirections, setOpenDirections] = useState(false);

  return (
    <footer className="relative border-t border-gray-100 max-w-screen">
      {/* Top CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="bg-gradient-to-r from-red-400 to-[#dd3a45] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-bold">
            ¿Listo para ver mejor hoy?
          </h3>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="px-6 py-5 text-base border-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <a href="#visit-us">Visitanos</a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main footer */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-20">
          {/* Brand + blurb */}
          <motion.div variants={item} className="lg:col-span-2">
            <Logo />
            <p className="text-gray-600 mt-4 max-w-md">
              Más de <strong>20 años</strong> cuidando tu salud visual en Córdoba,
              combinando atención profesional y tecnología 3D para que elijas
              con seguridad y estilo.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/opticareginaelena"
                aria-label="Instagram"
                className="p-2 rounded-xl border border-gray-200 hover:border-brand hover:-translate-y-0.5 transition transform"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.facebook.com/OpticaReginaElena/"
                aria-label="Facebook"
                className="p-2 rounded-xl border border-gray-200 hover:border-brand hover:-translate-y-0.5 transition transform"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="mailto:hola@opticareginaelena.com"
                aria-label="Email"
                className="p-2 rounded-xl border border-gray-200 hover:border-brand hover:-translate-y-0.5 transition transform"
              >
                <Mail className="size-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5493513570864&text=Tenemos%20esos%20lentes%20que%20busc%C3%A1s!%20%F0%9F%98%8E%20%C2%BFen%20qu%C3%A9%20podemos%20ayudarte%3F"
                aria-label="WhatsApp"
                className="p-2 rounded-xl border border-gray-200 hover:border-brand hover:-translate-y-0.5 transition transform"
              >
                <img src="/wsp.png" alt="WhatsApp" className="size-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={item} className="max-sm:text-center">
            <h4 className="text-sm font-semibold tracking-wider text-gray-900 uppercase max-sm:-ml-4">
              Explorar
            </h4>
            <ul className="mt-4 text-sm space-y-3">
              <LinkItem href="#inicio">Inicio</LinkItem>
              <LinkItem href="#categories">Categorías</LinkItem>
              <LinkItem href="#about-us">¿Quiénes Somos?</LinkItem>
              <LinkItem href="#reviews">Testimonios</LinkItem>
              <LinkItem href="#follow-us">Síguenos</LinkItem>
              <LinkItem href="#why-choose-us">¿Por qué Elegirnos?</LinkItem>
              <LinkItem href="#try-in-3d">Probar en 3D</LinkItem>
              <LinkItem href="#visit-us">Dónde Estamos</LinkItem>
            </ul>
          </motion.div>

          {/* Ayuda */}
          <motion.div variants={item} className="max-sm:text-center">
            <h4 className="text-sm font-semibold tracking-wider text-gray-900 uppercase max-sm:-ml-4">
              Ayuda
            </h4>
            <ul className="mt-4 text-sm space-y-3">
              <LinkItem onClick={() => setOpenVirtual(true)}>Prueba Virtual</LinkItem>
              <LinkItem onClick={() => setOpenDirections(true)}>Cómo Llegar</LinkItem>
            </ul>
          </motion.div>

          {/* Contacto & Horarios */}
          <motion.div variants={item} className="max-sm:text-center lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-wider text-gray-900 uppercase max-sm:-ml-4">
              Contacto
            </h4>
            <ul className="mt-4 text-sm space-y-3 text-gray-600 max-sm:place-items-center max-sm:-ml-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-brand mt-0.5" />
                <span>Roma 535, Córdoba Capital</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 text-brand mt-0.5" />
                <a href="tel:+543513570864" className="hover:text-gray-900">
                  +54 351 357-0864
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-5 text-brand mt-0.5" />
                <a
                  href="mailto:hola@opticareginaelena.com"
                  className="hover:text-gray-900"
                >
                  hola@opticareginaelena.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          variants={item}
          className="mt-10 rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
              Novedades
            </p>
            <p className="text-gray-600">
              Recibí promos y nuevos modelos (poquitos emails, lo prometemos).
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const input = form.elements.namedItem("email") as HTMLInputElement;
              if (!/^\S+@\S+\.\S+$/.test(input.value)) {
                input.setCustomValidity("Ingresá un email válido");
                input.reportValidity();
                return;
              }
              input.setCustomValidity("");
              alert("¡Gracias por suscribirte!");
              form.reset();
            }}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full sm:w-80 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-brand/20"
            />
            <Button type="submit" className="px-5 py-6 bg-brand hover:!bg-[#dd3a45]">
              Suscribirme
            </Button>
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500">
          <p className="flex flex-wrap items-center gap-1">
            <span>
              © {new Date().getFullYear()} Óptica Regina Elena — Hecho con{" "}
              <Heart className="size-4 text-brand -mt-0.5 inline-block" aria-label="corazón" />{" "}
              en Córdoba
            </span>
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <a
                href="#devoluciones"
                onClick={(e) => { e.preventDefault(); setOpenReturns(true); }}
                className="hover:text-gray-800 cursor-pointer"
              >
                Cambios y Devoluciones
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal: Cambios y Devoluciones (ya lo tenías) */}
      <Dialog open={openReturns} onOpenChange={setOpenReturns}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
          <div className="flex max-h-[90svh] sm:max-h-[80vh] flex-col">
            {/* Header */}
            <div className="px-6 pb-4 pt-6 sticky top-0 bg-white z-10 border-b">
              <DialogHeader>
                <DialogTitle>Política de Cambios y Devoluciones</DialogTitle>
                <DialogDescription>
                  Texto genérico — reemplazalo por tus condiciones reales.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Scrollable body */}
            <div className="px-6 py-4 overflow-y-auto">
              <div className="prose prose-sm max-w-none text-gray-700 space-y-3">
                <p>
                  Aceptamos cambios dentro de los <strong>30 días</strong> corridos desde la
                  fecha de compra. Los productos deben estar en perfecto estado, con su
                  estuche y accesorios originales, y presentar comprobante de compra.
                </p>
                <ul className="list-disc pl-5">
                  <li>Cambios por talle/modelo sujetos a disponibilidad.</li>
                  <li>No se aceptan productos rayados, dañados o con signos de uso.</li>
                  <li>
                    Productos en promo: se respeta el precio abonado al momento de la compra.
                  </li>
                  <li>
                    Devoluciones: reintegro según medio de pago, dentro de 5 a 10 días hábiles.
                  </li>
                </ul>
                <p>
                  Para iniciar un cambio o devolución, escribinos a{" "}
                  <a href="mailto:hola@opticareginaelena.com" className="text-brand underline">
                    hola@opticareginaelena.com
                  </a>{" "}
                  o por WhatsApp al{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=5493513570864"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand underline"
                  >
                    +54 9 351 357-0864
                  </a>.
                </p>
                <p className="text-xs text-gray-500">
                  Vigente a partir del 01/01/2025. Sujeto a modificaciones sin previo aviso.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t sticky bottom-0 bg-white z-10">
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenReturns(false)}>
                  Cerrar
                </Button>
                <Button
                  className="bg-brand hover:!bg-[#dd3a45]"
                  onClick={() => setOpenReturns(false)}
                >
                  Aceptar
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal: Prueba Virtual */}
      <Dialog open={openVirtual} onOpenChange={setOpenVirtual}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
          <div className="flex max-h-[90svh] sm:max-h-[80vh] flex-col">
            {/* Header */}
            <div className="px-6 pb-4 pt-6 sticky top-0 bg-white z-10 border-b">
              <DialogHeader>
                <DialogTitle>¿Cómo aprovechar la Prueba Virtual 3D?</DialogTitle>
                <DialogDescription>
                  Consejos rápidos para que el modelo te quede perfecto 👓
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Body */}
            <div className="px-6 py-4 overflow-y-auto">
              <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
                <p>
                  Nuestra vista 3D te permite girar, acercar y chequear <em>materiales, forma y volumen real</em> de cada armazón.
                  Próximamente vas a poder alternar entre varios modelos.
                </p>

                <h4 className="text-base font-semibold mt-4">Guía exprés</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Abrí la sección <strong>“Explorá en 3D”</strong>.</li>
                  <li>Usá el mouse o el dedo para <em>rotar</em>; con scroll hacé <em>zoom</em>.</li>
                  <li>Chequeá puente, varillas y altura del lente.</li>
                  <li>¿Dudas? Escribinos y te asesoramos.</li>
                </ol>

                <div className="rounded-xl border border-gray-200 p-3 text-xs text-gray-600 bg-gray-50">
                  <strong>Compatibilidad:</strong> funciona en celu y compu modernos.
                  Si el 3D se ve lento, cerrá pestañas o probá en otro navegador.
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t sticky bottom-0 bg-white z-10">
              <DialogFooter className="w-full">
                <Button variant="outline" onClick={() => setOpenVirtual(false)}>
                  Cerrar
                </Button>
                <Button
                  className="bg-brand hover:!bg-[#dd3a45]"
                  asChild
                  onClick={() => setOpenVirtual(false)}
                >
                  <a href="#try-in-3d">Abrir Prueba Virtual</a>
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal: Cómo Llegar */}
      <Dialog open={openDirections} onOpenChange={setOpenDirections}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
          <div className="flex max-h-[90svh] sm:max-h-[80vh] flex-col">
            {/* Header */}
            <div className="px-6 pb-4 pt-6 sticky top-0 bg-white z-10 border-b">
              <DialogHeader>
                <DialogTitle>Cómo llegar a nuestra óptica</DialogTitle>
                <DialogDescription>
                  Tips de traslado, estacionamiento y mejores horarios.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Body */}
            <div className="px-6 py-4 overflow-y-auto">
              <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
                <p className="m-0">
                  Estamos en <strong>Roma 535, Córdoba Capital</strong>. A un par de cuadras de arterias principales y puntos de referencia.
                </p>

                <h4 className="text-base font-semibold">Opciones para llegar</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Auto:</strong> hay cocheras privadas a pocas cuadras y espacios de estacionamiento con parquímetro.
                  </li>
                  <li>
                    <strong>Colectivo:</strong> varias líneas te dejan a 3–6 min a pie (según tu punto de partida).
                  </li>
                  <li>
                    <strong>Bici/Mono:</strong> contamos con lugar para enganchar la bici dentro del local.
                  </li>
                  <li>
                    <strong>Accesibilidad:</strong> ingreso a nivel de calle, sin escalones. Si necesitás asistencia, avisanos y salimos a ayudarte.
                  </li>
                </ul>

                <h4 className="text-base font-semibold">Cuándo venir</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Menos fila:</strong> mañanas entre 9:30 y 11:30.</li>
                  <li><strong>Asesoramiento tranquilo:</strong> medias tardes de 15:30 a 17:30.</li>
                  <li><strong>Sábado:</strong> abrimos hasta 12:30 — ideal si venís a retirar.</li>
                </ul>

                <div className="rounded-xl border border-gray-200 p-3 text-xs text-gray-600 bg-gray-50">
                  <p className="m-0">
                    Si venís por <em>armazones recetados</em>, traé tu orden o tu receta anterior. Para <em>sol</em>, te ayudamos a elegir color y filtro según uso.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t sticky bottom-0 bg-white z-10">
              <DialogFooter className="w-full">
                <Button variant="outline" onClick={() => setOpenDirections(false)}>
                  Cerrar
                </Button>
                <Button className="bg-brand hover:!bg-[#dd3a45]" asChild onClick={() => setOpenDirections(false)}>
                  <a
                    href="https://maps.app.goo.gl/77pvfKjY66RAJ91H9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir en Google Maps
                  </a>
                </Button>
                <Button variant="outline" asChild onClick={() => setOpenDirections(false)}>
                  <a href="#visit-us">Ver horarios y mapa</a>
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
