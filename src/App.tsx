import Header from "./components/commons/Header";
import AboutUsSection from "./components/sections/AboutUsSection";
import FollowUsSection from "./components/sections/FollowUsSection";
import FooterSection from "./components/sections/FooterSection";
import HighlightedCategoriesSection from "./components/sections/HighlightedCategoriesSection";
import IntroductionSection from "./components/sections/Introduction";
import TestimonialsSection from "./components/sections/TestimonialsSection";
// import TryIn3DSection from "./components/sections/TryIn3DSection";
import FloatingWhatsApp from "./components/commons/FloatingWhatsApp";
import EcommerceSection from "./components/sections/EcommerceSection";
import VisitUsSection from "./components/sections/VisitUsSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20 max-md:pt-22 max-w-screen" id="inicio" role="main">
        <IntroductionSection />
        <HighlightedCategoriesSection />
        <AboutUsSection />
        <TestimonialsSection />
        <FollowUsSection />
        <WhyChooseUs />
        <EcommerceSection />
        {/* <TryIn3DSection /> */}
        <VisitUsSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}
