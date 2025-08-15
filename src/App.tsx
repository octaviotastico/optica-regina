import Header from "./components/commons/Header";
import AboutUsSection from "./components/sections/AboutUsSection";
import HighlightedCategoriesSection from "./components/sections/HighlightedCategoriesSection";
import IntroductionSection from "./components/sections/Introduction";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import TryIn3DSection from "./components/sections/TryIn3DSection";
import VisitUsSection from "./components/sections/VisitUsSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import ScrollToTopButton from "./components/commons/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-24" id="inicio">
        <IntroductionSection />
        <HighlightedCategoriesSection />
        <AboutUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <TryIn3DSection />
        <VisitUsSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
    </>
  );
}
