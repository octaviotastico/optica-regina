import React from "react";

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=5493513570864&text=Tenemos%20esos%20lentes%20que%20busc%C3%A1s!%20%F0%9F%98%8E%20%C2%BFen%20qu%C3%A9%20podemos%20ayudarte%3F"
        aria-label="WhatsApp"
        className="
          flex items-center justify-center w-14 h-14
          bg-green-500/50 hover:bg-green-500/90 active:bg-green-500/90
          rounded-full shadow-lg hover:shadow-xl active:shadow-xl
          transition-all duration-300 hover:-translate-y-1 active:-translate-y-1
        "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/wsp.avif" alt="WhatsApp" className="size-6" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
