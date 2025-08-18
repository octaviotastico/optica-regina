import Header from "./components/commons/Header";
import AboutUsSection from "./components/sections/AboutUsSection";
// import FollowUsSection from "./components/sections/FollowUsSection";
import FooterSection from "./components/sections/FooterSection";
import HighlightedCategoriesSection from "./components/sections/HighlightedCategoriesSection";
import IntroductionSection from "./components/sections/Introduction";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import TryIn3DSection from "./components/sections/TryIn3DSection";
import VisitUsSection from "./components/sections/VisitUsSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-24" id="inicio">
        <IntroductionSection />
        <HighlightedCategoriesSection />
        <AboutUsSection />
        <TestimonialsSection />
        <WhyChooseUs />
        {/* <FollowUsSection /> */}
        <TryIn3DSection />
        <VisitUsSection />
      </main>
      <FooterSection />
    </>
  );
}
