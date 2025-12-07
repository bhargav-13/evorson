// components/MainPage/BeyondFiber.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BeyondFiber = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 px-4 text-[#587583]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2B3A3F]">
            Beyond the fiber
          </h2>
          <p className="text-sm sm:text-base text-[#A0A6A5] mt-2">
            How we transform raw non-woven rolls into high-performance products
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-6">
              Engineered for <br /> performance
            </h3>
            <Button
              variant="outline"
              className="rounded-full border-[#587583] text-[#587583] hover:bg-[#587583] hover:text-white transition-colors"
            >
              Explore Products →
            </Button>
          </div>

          {/* Right Section */}
          <p className="text-[#587583] text-sm sm:text-base leading-relaxed">
            Quality starts with the roll. We utilize premium-grade Non-Woven
            Rolls that offer superior tensile strength and consistent texture.
            Whether it is the breathability required for a Pillow Cover or the
            leak-resistance needed for a Dustbin Bag, our manufacturing process
            adapts the material density (GSM) to the specific demand of the
            product.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="p-6 border border-[#D9E0E1] bg-[#F7F7F5] hover:shadow-md transition-shadow rounded-lg">
            <h4 className="text-2xl font-medium mb-16 text-[#587583]">
              Tear Resistant
            </h4>
            <p className="text-sm text-[#587583] leading-relaxed">
              Multi-directional fiber bonding ensures our Loop Bags don't fail
              under pressure.
            </p>
          </Card>

          <Card className="p-6 border border-[#D9E0E1] bg-[#F7F7F5] hover:shadow-md transition-shadow rounded-lg">
            <h4 className="text-2xl font-medium mb-16 text-[#587583]">
              Fluid Barriers
            </h4>
            <p className="text-sm text-[#587583] leading-relaxed">
              Hydrophobic properties make our Table Cloths and Headrests
              spill-resistant.
            </p>
          </Card>

          <Card className="p-6 border border-[#D9E0E1] bg-[#F7F7F5] hover:shadow-md transition-shadow rounded-lg">
            <h4 className="text-2xl font-medium mb-16 text-[#587583]">
              Custom Formats
            </h4>
            <p className="text-sm text-[#587583] leading-relaxed">
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
