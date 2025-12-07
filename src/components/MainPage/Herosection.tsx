// components/MainPage/HeroAndFeatured.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroFabrics from "@/assets/hero1.png";
import toteBags from "@/assets/hero3.png";
import HeroBg from "@/assets/HeroBG.png";
import Logo from "@/assets/Logo.png";

// Animated imports
import { motion, AnimatePresence } from "framer-motion";

// Rotating card images (middle)
import c1 from "@/assets/c1.png";
import c2 from "@/assets/c2.png";
import c3 from "@/assets/c3.png";
import c4 from "@/assets/c4.png";

// Side rotation images
import S1 from "@/assets/S1.jpg";
import S2 from "@/assets/S2.jpg";
import S3 from "@/assets/S3.jpg";
import S4 from "@/assets/S6.jpg";
import S5 from "@/assets/S5.jpg";

const HeroAndFeatured = () => {
  // --- Middle Card Data ---
  const middleCards = [
    {
      title: "W Cut Bag",
      img: c1,
      desc: "Everson’s non-woven W cut bags are designed for durability, hygiene, and convenience. Lightweight yet strong, they keep clothes organized and protected — perfect for daily use.",
    },
    {
      title: "Loop Bag",
      img: c2,
      desc: "Everson’s non-woven Loop Bags are built for strength, comfort, and everyday convenience. Their sturdy loop handles ensure an easy carry, while the lightweight material adds flexibility. Perfect for shopping, gifting, or daily essentials with a clean and eco-friendly design.",
    },
    {
      title: "Box Bag",
      img: c3,
      desc: "Everson’s non-woven Box Bags offer a sturdy, structured design for reliable daily use. Lightweight yet durable, they easily hold groceries, clothes, and essentials with added stability. Perfect for organized, eco-friendly carrying with a premium look and long-lasting performance.",
    },
    {
      title: "D Cut Bag",
      img: c4,
      desc: "Everson’s non-woven D Cut Bags offer a sleek, lightweight design with strong built-in handles. Durable and easy to carry, they are perfect for retail, gifting, and everyday essentials. A hygienic, eco-friendly choice that combines simplicity with dependable performance.",
    },
  ];

  // --- Side Images ---
  const sideImages = [S1, S2, S3, S4, S5];

  const [middleIndex, setMiddleIndex] = useState(0);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1); // Start with a different image

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleIndex((prev) => (prev + 1) % middleCards.length);
      setLeftIndex((prev) => (prev + 1) % sideImages.length);
      setRightIndex((prev) => (prev + 1) % sideImages.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentCard = middleCards[middleIndex];
  const currentLeftImg = sideImages[leftIndex];
  const currentRightImg =
    sideImages[rightIndex === leftIndex ? (rightIndex + 1) % sideImages.length : rightIndex];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-auto md:h-[45vh] mt-6"
        style={{
          backgroundImage:
            typeof window !== "undefined" && window.innerWidth >= 768
              ? `url(${HeroBg})`
              : "none",
          backgroundSize: "80% auto",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hidden md:block absolute inset-0"></div>

        <div className="relative container mx-auto text-center max-w-4xl mt-16 text-[#587583] px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Durability. Design. Sustainability.
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-[#B0B6B5] leading-relaxed">
            Everson blends all three into every non-woven bag and fabric product
            crafted for modern businesses and industries.
          </p>
          <Button className="bg-[#587583] hover:bg-accent/90 text-accent-foreground px-6 py-4 text-sm sm:text-base">
            Explore More
          </Button>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="px-4 bg-background py-6 sm:py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Card (Blinking Images) */}
            <Card className="overflow-hidden group cursor-pointer h-[250px] sm:h-[300px] md:h-[350px] col-span-12 md:col-span-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentLeftImg}
                  src={currentLeftImg}
                  alt="Left Product"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </Card>

            {/* Middle Animated Card */}
            <Card className="overflow-hidden group cursor-pointer bg-[#8FAEB8] flex flex-col md:flex-row gap-4 h-auto md:h-[350px] col-span-12 md:col-span-6 p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-4 items-center"
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 h-[200px] md:h-full">
                    <img
                      src={currentCard.img}
                      alt={currentCard.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between md:w-1/2 h-full p-2 sm:p-4 text-center md:text-left">
                    <div>
                      <span className="inline-block border-white border text-accent-foreground text-xs sm:text-sm px-3 py-1 rounded-full mb-3 sm:mb-4">
                        {currentCard.title}
                      </span>

                      <p className="text-sm sm:text-base text-white mb-6 md:mb-8 leading-relaxed">
                        {currentCard.desc}
                      </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <img
                        src={Logo}
                        alt="Everson Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Right Card (Blinking Images) */}
            <Card className="overflow-hidden group cursor-pointer h-[250px] sm:h-[300px] md:h-[350px] col-span-12 md:col-span-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentRightImg}
                  src={currentRightImg}
                  alt="Right Product"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAndFeatured;
