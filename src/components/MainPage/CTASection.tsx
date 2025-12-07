import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Vector from "@/assets/Vector.png";
import CTA1 from "@/assets/CTA1.png";
import CTA2 from "@/assets/CTA2.png";

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-background flex justify-center">
      <div
        className="w-full max-w-6xl rounded-3xl shadow-xl p-8 md:p-12 bg-cover bg-center"
        style={{
          backgroundColor: "#B0CDDA",
          backgroundImage: `url(${Vector})`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* --- Left Content --- */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#587583]">
              Start Optimizing Your Financial Operations Today
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-[#587583]">
              Offers two paths, catering to users who are ready to buy and those who need more information.
            </p>
<Button
  className="bg-transparent border-2 border-[#587583] text-[#587583] hover:bg-[#587583]/10 hover:text-[#587583] transition-colors rounded-full"
  asChild
>
  <Link to="/contact">
    Schedule a Demo →
  </Link>
</Button>


          </div>

          {/* --- Right Image Stack --- */}
<div className="relative flex justify-center items-center mt-8 md:-mt-10">
  {/* Back Image (CTA2) */}
  <img
    src={CTA2}
    alt="CTA Visual 1"
    className="w-[250px] md:w-[350px] rounded-xl relative md:top-12 md:left-28 top-8 left-16  "
  />

  {/* Front Image (CTA1) */}
  <img
    src={CTA1}
    alt="CTA Visual 2"
    className="w-[250px] md:w-[350px] rounded-xl absolute top-10 -left-5 md:top-[60px] md:left-16 -rotate-8 transform "
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
