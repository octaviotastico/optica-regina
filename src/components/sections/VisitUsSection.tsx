import {
  CheckCircle,
  Clock,
  ClockAlert,
  MapPin
} from "lucide-react";
import { Separator } from "../ui/separator";

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
    <div className="bg-gradient-to-br from-[#FFFFFF] to-gray-50 rounded-xl shadow p-4 transition-all duration-300">
      <p className="text-gray-700 font-medium">
        Hoy {today.charAt(0).toUpperCase() + today.slice(1)}:{" "}
        <span className="font-semibold">{todayHours}</span>
      </p>

      <Separator className="mt-3 mb-5" />

      {isOpenNow ? (
        <div className="flex items-center gap-2 mt-2 text-green-700 font-semibold">
          <CheckCircle className="w-6 h-6" />
          ¡Estamos abiertos ahora! Vení a visitarnos 😊
        </div>
      ) : (
        <div className="flex flex-col gap-2 mt-2 mb-4">
          <p className="flex gap-2 text-red-700 font-semibold m-0">
            <ClockAlert className="w-6 h-6" />
            Actualmente estamos cerrados.
          </p>
          <p>
            Pero podes visitarnos en nuestro horario habitual:
          </p>
        </div>
      )}


      <div className="rounded-2xl border border-gray-200 p-5 gap-2 flex flex-col">
        {Object.entries(openingHours).map(([day, hours]) => (
          <div
            key={day}
            className={`flex justify-between text-center gap-2 items-center ${day === today ? "font-semibold text-green-700" : ""}`}
          >
            <span className="capitalize">{day}</span>
            <span>{hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const VisitUsSection = () => {
  return (
    <section id="visit-us" className="p-8 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">¿Dónde Estamos?</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-2 text-left space-y-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Clock className="w-6 h-6 text-brand" /> Nuestros horarios de atención
          </h3>
          <OpeningHours />
        </div>

        {/* Right Column - Map */}
        <div className="flex flex-col flex-4">
          <a
            className="text-lg text-black font-semibold mb-2 flex items-center gap-2 hover:underline"
            href="https://maps.app.goo.gl/77pvfKjY66RAJ91H9"
            rel="noopener noreferrer"
            target="_blank"
          >
            <MapPin className="inline-block text-brand w-6 h-6" />
            Roma 535, X5004 BAK, Córdoba, Argentina
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6810.327995415303!2d-64.16753622360633!3d-31.409607374264862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a751027d5b%3A0xf535447dbfd24691!2s%C3%93ptica%20Regina%20Elena!5e0!3m2!1ses-419!2sit!4v1754662721116!5m2!1ses-419!2sit"
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
