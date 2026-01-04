import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import teamMeeting from "@/assets/About_people.png";
import productCollage from "@/assets/About_bag.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className=" text-[#394D57] text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                About us
              </p>
             <h1 className="text-[#394D57] md:max-w-[500px] text-4xl md:text-5xl font-bold mb-8 leading-tight">

                Empower Your Business with Unmatched Quality
              </h1>
              <Button
                variant="outline"
                className="group rounded-full border-[#394D57]"
                asChild
              >
                <Link to="/contact">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rounded-full" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <p className="leading-relaxed text-[#587583] text-xl">
                Elevate your retail and promotional strategies with our
                reliable, custom-printed non-woven bags. Empower your marketing
                with cost-effective, reusable solutions designed for everyday
                use. Focus on what matters most—building a memorable and
                responsible brand.
              </p>
              <p className="leading-relaxed text-[#587583] text-xl">
                Get the reliable, customizable non-woven bags your business
                needs without the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story, Mission & Vision Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Our Story Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[446px]">
              <img
                src={teamMeeting}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  {/* <h2 className="text-3xl font-bold mb-3">Our Story</h2>
                  <p className="text-sm leading-relaxed opacity-90">
                    It began with a vision to replace plastic with purpose. We
                    saw a bag not just as a utility, but as a durable, walking
                    billboard for your brand's values. Today, we partner with
                    you to create high-quality, custom non-woven bags that carry
                    your name and our shared commitment to a greener planet.
                    Let's build a sustainable future, together.
                  </p> */}
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-8">
              <Card className="p-8 bg-[#B0CDDA] border-none">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Our Mission
                </h2>
                <p className="text-white leading-relaxed">
                  It begins with a quest to produce fabrics with purpose. We are
                  a big and not just a strategy but an identity we are proud to
                  present to you. Innovation fuels every day and we let you be a
                  part of it. To continue delivering high-quality, custom
                  non-woven bags that carry your name and brand consciousness
                  further. Let's build a sustainable future, together.
                </p>
              </Card>

              <Card className="p-8 bg-[#8FAEB8] border-none">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Our Vision
                </h2>
                <p className="text-white leading-relaxed">
                  Our vision is to become a global leader in sustainable
                  non-woven manufacturing, inspiring industries to adopt greener
                  alternatives. We strive to have every product embody
                  responsibility, innovation, and quality—creating a legacy of
                  purpose, durability, and sustainability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose in Every Product */}
<section className="py-16 px-4 bg-background text-[#394D57]">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Product Collage */}
      <div className="order-2 lg:order-1 flex justify-center">
        <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-[500px] lg:max-w-[550px]">
<img
  src={productCollage}
  alt="Product Collage"
  className="w-full h-[400px] sm:h-[460px] md:h-[520px] object-cover rounded-lg"
/>

        </div>
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-snug">
          Purpose in Every Product
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-[#5B6C72]">
          At Everson, we specialize in manufacturing a wide range of non-woven
          fabric products designed for both everyday and specialized
          applications. From eco-friendly carry bags and garbage bags to
          tablecloths, pillow covers, shoe bags, and airline headrest covers —
          every product is crafted with sustainability in mind.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-[#5B6C72]">
          We combine advanced manufacturing technology with custom design
          solutions to meet the unique needs of our clients across industries
          like retail, hospitality, healthcare, aviation, and packaging. Our
          goal is simple — to deliver smart, reliable, and sustainable
          alternatives that make life easier while protecting the planet.
        </p>

<Button
  variant="outline"
  className="group rounded-full border-[#394D57] text-[#394D57] hover:bg-[#394D57] hover:text-white px-6 py-3 text-base sm:text-lg transition-all"
  asChild
>
  <Link
    to="/products"
    onClick={() => window.scrollTo(0, 0)} // ✅ scrolls to top on click
  >
    Explore more
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</Button>

      </div>
    </div>
  </div>
</section>


      {/* The Spirit of Everson */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-8xl">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-[#394D57] mb-12">
            The Spirit of Everson
          </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Sustainability */}
  <Card className="p-5 border-[1px] border-[#394D57] bg-background flex flex-col justify-between hover:bg-[#587583] hover:text-white transition-colors duration-300">
    <h3 className="text-3xl font-bold mb-36">Sustainability</h3>
    <p className="leading-relaxed opacity-90 mt-auto">
      We are committed to reducing environmental impact by creating
      products that are recyclable and responsibly manufactured. Every
      non-woven solution we design helps replace single-use plastics
      and enables a cleaner, greener planet. Sustainability isn't just
      our promise, it's our commitment for future generations.
    </p>
  </Card>

  {/* Quality */}
  <Card className="p-5 border-[1px] border-[#394D57] bg-background flex flex-col justify-between hover:bg-[#587583] hover:text-white transition-colors duration-300">
    <h3 className="text-3xl font-bold mb-36">
      Quality
    </h3>
    <p className="leading-relaxed mt-auto">
      Every product we make reflects our promise of durability,
      precision, and long lasting performance. Through advanced
      manufacturing and strict quality checks, we ensure excellence in
      every stitch, seam, and surface.
    </p>
  </Card>

  {/* Innovation */}
  <Card className="p-5 border-[1px] border-[#394D57] bg-background flex flex-col justify-between hover:bg-[#587583] hover:text-white transition-colors duration-300">
    <h3 className="text-3xl font-bold mb-36">
      Innovation
    </h3>
    <p className="leading-relaxed mt-auto">
      We continuously evolve, combining modern design, technology, and
      creativity to deliver smarter non-woven solutions. Our focus on
      research and development keeps us ahead, transforming simple
      materials into purposeful, sustainable creations.
    </p>
  </Card>

  {/* Integrity */}
  <Card className="p-5 border-[1px] border-[#394D57] bg-background flex flex-col justify-between hover:bg-[#587583] hover:text-white transition-colors duration-300">
    <h3 className="text-3xl font-bold mb-36">
      Integrity
    </h3>
    <p className="leading-relaxed mt-auto">
      Trust and transparency form the foundation of every relationship
      we build, from our clients to our team. We believe in honest
      communication, ethical practices, and delivering exactly what we
      promise, every single time.
    </p>
  </Card>

  {/* Responsibility */}
  <Card className="p-5 border-[1px] border-[#394D57] bg-background flex flex-col justify-between hover:bg-[#587583] hover:text-white transition-colors duration-300">
    <h3 className="text-3xl font-bold mb-36">
      Responsibility
    </h3>
    <p className="leading-relaxed mt-auto">
      We believe in progress with purpose, growing our business while
      caring for the planet and the people around us. Every decision
      we make is guided by a commitment to accountability and shared
      success, sustainability, and responsibility for a better society
      and shared success.
    </p>
  </Card>

  {/* Customer Commitment */}
  <Card className="p-5 border-[1px] border-[#394D57] bg-background flex flex-col justify-between hover:bg-[#587583] hover:text-white transition-colors duration-300">
    <h3 className="text-3xl font-bold mb-36">
      Customer Commitment
    </h3>
    <p className="leading-relaxed mt-auto">
      Our customers are at the heart of everything we do. We listen,
      adapt, and deliver solutions that align with their goals,
      building long-term partnerships based on trust, reliability, and
      satisfaction.
    </p>
  </Card>

</div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
