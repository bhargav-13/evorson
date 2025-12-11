import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/MainPage/Herosection";
import AboutSection from "@/components/MainPage/AboutSection";
import ProductShowcase from "@/components/MainPage/ProductShowcase";
import CTASection from "@/components/MainPage/CTASection";
import BlueprintsSection from "@/components/MainPage/BlueprintsSection";
import OurSection from "@/components/MainPage/Our";
import B from "@/assets/B.pdf"; // <-- import your PDF

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
        className="fixed bottom-6 right-6 bg-[#587583] hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        Download Brochure
      </button>
    </div>
  );
};

export default Index;
