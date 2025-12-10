// components/MainPage/BeyondFiber.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BeyondFiber = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 px-4 text-[#587583]">
      {/* Matches Hero Section Width */}
      <div className="container mx-auto max-w-6xl md:max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2B3A3F] mb-3">
            Beyond the fiber
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#A0A6A5] max-w-2xl mx-auto">
            How we transform raw non-woven rolls into high-performance products
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-center space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug text-[#2B3A3F]">
              Engineered for <br /> performance
            </h3>
            <Button
              variant="outline"
              className="rounded-full border-[#587583] text-[#587583] hover:bg-[#587583] hover:text-white transition-colors px-6 py-3 text-sm sm:text-base"
            >
              Explore Products →
            </Button>
          </div>

          {/* Right Section */}
          <p className="text-[#587583] text-base sm:text-lg leading-relaxed max-w-xl">
            Quality starts with the roll. We utilize premium-grade Non-Woven
            Rolls that offer superior tensile strength and consistent texture.
            Whether it’s the breathability required for a Pillow Cover or the
            leak-resistance needed for a Dustbin Bag, our manufacturing process
            adapts the material density (GSM) to the specific demand of the
            product.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-8 border border-[#D9E0E1] bg-[#F7F7F5] hover:shadow-lg transition-all rounded-2xl flex flex-col justify-between h-full">
            <h4 className="text-2xl sm:text-3xl font-medium mb-24 text-[#587583]">
              Tear Resistant
            </h4>
            <p className="text-base sm:text-lg text-[#587583] leading-relaxed">
              Multi-directional fiber bonding ensures our Loop Bags don’t fail
              under pressure.
            </p>
          </Card>

          <Card className="p-8 border border-[#D9E0E1] bg-[#F7F7F5] hover:shadow-lg transition-all rounded-2xl flex flex-col justify-between h-full">
            <h4 className="text-2xl sm:text-3xl font-medium mb-24 text-[#587583]">
              Fluid Barriers
            </h4>
            <p className="text-base sm:text-lg text-[#587583] leading-relaxed">
              Hydrophobic properties make our Table Cloths and Headrests
              spill-resistant.
            </p>
          </Card>

          <Card className="p-8 border border-[#D9E0E1] bg-[#F7F7F5] hover:shadow-lg transition-all rounded-2xl flex flex-col justify-between h-full">
            <h4 className="text-2xl sm:text-3xl font-medium mb-24 text-[#587583]">
              Custom Formats
            </h4>
            <p className="text-base sm:text-lg text-[#587583] leading-relaxed">
              From huge rolls to precision D-Cuts, we control the entire
              production cycle.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeyondFiber;
