import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/MainPage/Herosection";
import AboutSection from "@/components/MainPage/AboutSection";
import ProductShowcase from "@/components/MainPage/ProductShowcase";
import CTASection from "@/components/MainPage/CTASection";
import BlueprintsSection from "@/components/MainPage/BlueprintsSection";
import OurSection from "@/components/MainPage/Our";
import B from "@/assets/B.pdf";
import { FileText } from "lucide-react";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = B;
    link.download = "B.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <OurSection />
      <CTASection />
      <BlueprintsSection />
      <Footer />

      {/* Sticky Download Button */}
      <button
        onClick={handleDownload}
        aria-label="Download Brochure"
        className="fixed bottom-6 right-6 bg-[#587583] hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2"
      >
        <FileText size={20} />
        <span className="font-medium text-sm">Brochure</span>
      </button>
    </div>
  );
};

export default Index;
