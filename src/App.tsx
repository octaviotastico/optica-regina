import AboutUsSection from "./components/sections/AboutUsSection";
import HighlightedCategoriesSection from "./components/sections/HighlightedCategoriesSection";
import IntroductionSection from "./components/sections/Introduction";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import TryIn3DSection from "./components/sections/TryIn3DSection";
import VisitUsSection from "./components/sections/VisitUsSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <IntroductionSection />
      <HighlightedCategoriesSection />
      <AboutUsSection />
      <TestimonialsSection />
      <TryIn3DSection />
      <VisitUsSection />
    </main>
  );
}
