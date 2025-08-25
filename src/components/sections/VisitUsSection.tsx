import { CheckCircle, Clock, ClockAlert, MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

// ---- Datos y helpers ----
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
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  return days[new Date().getDay()];
};

export function OpeningHours() {
  const today = getToday();
  const now = new Date();

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
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow p-4 sm:p-5 transition-all duration-300">
      <p className="text-gray-700 text-sm sm:text-base font-medium">
        Hoy {today.charAt(0).toUpperCase() + today.slice(1)}:{" "}
        <span className="font-semibold">{todayHours}</span>
      </p>

      <Separator className="mt-3 mb-4" />

      {isOpenNow ? (
        <div className="flex items-center gap-2 mt-1 text-green-700 font-semibold text-sm sm:text-base">
          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          ¡Estamos abiertos ahora! Vení a visitarnos 😊
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 mt-1 mb-3">
          <p className="flex items-start gap-2 text-red-700 font-semibold text-sm sm:text-base m-0">
            <ClockAlert className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5" />
            Actualmente estamos cerrados.
          </p>
          <p className="text-sm text-gray-600">Pero podés visitarnos en nuestro horario habitual:</p>
        </div>
      )}

      {/* Lista de horarios */}
      <div className="rounded-2xl border border-gray-200 p-4 sm:p-5 flex flex-col gap-2">
        {Object.entries(openingHours).map(([day, hours]) => (
          <div
            key={day}
            className={`flex items-center justify-between gap-3 text-sm sm:text-base ${
              day === today ? "font-semibold text-green-700" : ""
            }`}
          >
            <span className="capitalize">{day}</span>
            <span className="text-right">{hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Página/Sección ----
const VisitUsSection = () => {
  return (
    <section id="visit-us" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-6">
          ¿Dónde Estamos?
        </h2>

        {/* Grid responsive: 1 col → 12 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Columna izquierda: horarios */}
          <div className="lg:col-span-5">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
              Nuestros horarios de atención
            </h3>
            <OpeningHours />
          </div>

          {/* Columna derecha: mapa */}
          <div className="lg:col-span-7">
            <a
              className="inline-flex items-center gap-2 text-sm sm:text-base text-black font-semibold mb-3 hover:underline"
              href="https://maps.app.goo.gl/77pvfKjY66RAJ91H9"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MapPin className="text-brand w-5 h-5 sm:w-6 sm:h-6" />
              Roma 535, X5004 BAK, Córdoba, Argentina
            </a>

            {/* Contenedor con aspect ratio para que no desborde en mobile */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
              <iframe
                title="Mapa de Óptica Regina Elena"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6810.327995415303!2d-64.16753622360633!3d-31.409607374264862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a751027d5b%3A0xf535447dbfd24691!2s%C3%93ptica%20Regina%20Elena!5e0!3m2!1ses-419!2sit!4v1754662721116!5m2!1ses-419!2sit"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
