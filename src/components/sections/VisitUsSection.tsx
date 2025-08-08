import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CheckCircle,
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

const openingHours = {
  lunes: "8:30 a.m. – 6:30 p.m.",
  martes: "8:30 a.m. – 6:30 p.m.",
  miércoles: "8:30 a.m. – 6:30 p.m.",
  jueves: "8:30 a.m. – 6:30 p.m.",
  viernes: "8:30 a.m. – 6:30 p.m.",
  sábado: "9:30 a.m. – 12:30 p.m.",
  domingo: "Cerrado",
};

const getToday = () => {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return days[new Date().getDay()];
};

export function OpeningHours() {
  const [isOpen, setIsOpen] = useState(false);
  const today = getToday();
  const now = new Date();
  // Helper to parse "8:30 a.m." to minutes since midnight
  function parseTime(str: string) {
    if (!str) return null;
    const match = str.match(/(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.)/i);
    if (!match) return null;
    let hour = parseInt(match[1], 10);
    const min = parseInt(match[2], 10);
    const period = match[3].toLowerCase();
    if (period === "p.m." && hour !== 12) hour += 12;
    if (period === "a.m." && hour === 12) hour = 0;
    return hour * 60 + min;
  }

  // Determine if open now
  let isOpenNow = false;
  const todayHours = openingHours[today as keyof typeof openingHours];
  if (todayHours && todayHours !== "Cerrado") {
    const [openStr, closeStr] = todayHours.split("–").map((s) => s.trim());
    const openMins = parseTime(openStr);
    const closeMins = parseTime(closeStr);
    const nowMins = now.getHours() * 60 + now.getMinutes();
    if (openMins !== null && closeMins !== null) {
      isOpenNow = nowMins >= openMins && nowMins < closeMins;
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#FFFFFF] to-gray-50 rounded-xl shadow p-4">
      <p className="text-gray-700 font-medium">
        Hoy ({today.charAt(0).toUpperCase() + today.slice(1)}):{" "}
        <span className="font-semibold text-green-700">{todayHours}</span>
      </p>
      {isOpenNow && (
        <div className="flex items-center gap-2 mt-2 text-green-700 font-semibold">
          <CheckCircle className="w-6 h-6" />
          ¡Estamos abiertos ahora! Vení a visitarnos 😊
        </div>
      )}

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 text-blue-700 hover:underline mt-3 text-sm">
          {isOpen ? "Ocultar horarios" : "Ver todos los días"}
          <ChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-3 space-y-1 text-sm text-gray-600">
          {Object.entries(openingHours).map(([day, hours]) => (
            <div
              key={day}
              className={`flex justify-between ${
                day === today ? "font-semibold text-green-700" : ""
              }`}
            >
              <span className="capitalize">{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

const VisitUsSection = () => {
  return (
    <section id="donde-estamos" className="p-8 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">¿Dónde Estamos?</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-2 text-left space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-6 h-6 text-brand" />
              Contactanos
            </h3>

            <div className="rounded-xl shadow p-4 bg-gradient-to-br from-[#FFFFFF] to-gray-50">
              <p className="text-gray-700 font-semibold">Teléfono: </p>
              <a
                href="tel:+543513570864"
                className="text-brand hover:underline"
              >
                +54 351 357-0864
              </a>

              <p className="text-gray-700 font-semibold mt-4">Seguinos en:</p>
              <div className="flex gap-10 mt-2">
                <a
                  href="https://www.instagram.com/opticareginaelena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:underline text-brand"
                >
                  <Instagram className="w-20 h-20" /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/OpticaReginaElena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:underline text-brand"
                >
                  <Facebook className="w-20 h-20" /> Facebook
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5493513570864&text=Tenemos%20esos%20lentes%20que%20busc%C3%A1s!%20%F0%9F%98%8E%20%C2%BFen%20qu%C3%A9%20podemos%20ayudarte%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:underline text-brand"
                >
                  <MessageCircle className="w-20 h-20" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Clock className="w-6 h-6 text-brand" /> Horarios de Atención
          </h3>
          <OpeningHours />
        </div>

        {/* Right Column - Map */}
        <div className="flex flex-col flex-4">
          <p className="text-lg text-black font-semibold mb-2 flex items-center gap-2">
            <MapPin className="inline-block text-brand w-6 h-6" />
            Roma 535, X5004 BAK, Córdoba, Argentina
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.8377894103648!2d-64.1902138!3d-31.4129989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28f9a3771fd%3A0xf50d387e9ad3c4ae!2sRoma%20535%2C%20X5004BAK%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1691091819526!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl overflow-hidden shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
