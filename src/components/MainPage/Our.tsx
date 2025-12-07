import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import our1 from "@/assets/our1.jpg";
import our2 from "@/assets/our2.png";
import our3 from "@/assets/our3.png";
import our4 from "@/assets/our4.png";
import our5 from "@/assets/our5.png";
import our6 from "@/assets/our6.png";
import our7 from "@/assets/our7.jpg";

const products = [
  { img: our1, name: "Pillow Cover" },
  { img: our2, name: "Non woven Rolls" },
  { img: our3, name: "Loop Bag" },
  { img: our4, name: "Box Bag" },
  { img: our5, name: "Draw string Bag" },
  { img: our6, name: "Garbage Bag" },
  { img: our7, name: "Table Cloth" },
];

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 50, damping: 30 });

  // Infinite loop with duplicated items
  const infiniteProducts = [...products, ...products, ...products, ...products];

  useEffect(() => {
    // Start from middle of the array to fill left side
    const itemWidth = 280;
    const startOffset = -(products.length * itemWidth);
    x.set(startOffset);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      x.set(x.get() - 1);
    }, 20);

    return () => clearInterval(interval);
  }, [x]);

  // Calculate which item is centered
  useEffect(() => {
    const unsubscribe = smoothX.on("change", (latest) => {
      if (containerRef.current) {
        const itemWidth = 280;
        const offset = Math.abs(latest % (products.length * itemWidth));
        const index = Math.floor(offset / itemWidth) % products.length;
        setActiveIndex(index);
      }
    });

    return () => unsubscribe();
  }, [smoothX]);

  return (
    <div className="w-full py-16 text-center bg-gray-50 overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl mb-2 text-[#394D57]">
        Our Nonwoven Product Line
      </h2>
      <p className="text-lg md:text-3xl mb-10 text-[#394D57]">
        Explore Our Versatile Range of Customizable Solutions
      </p>

      {/* Carousel */}
      <div ref={containerRef} className="relative w-full overflow-hidden h-[450px] flex items-center">
        <motion.div
          style={{ x: smoothX }}
          className="flex gap-2 absolute left-1/2"
        >
          {infiniteProducts.map((product, index) => {
            const isCenter = index % products.length === activeIndex;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center min-w-[280px]"
                animate={{
                  scale: isCenter ? 1.25 : 0.9,
                  opacity: isCenter ? 1 : 0.65,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-44 md:w-52 lg:w-60 xl:w-64 object-contain rounded-lg"
                />
                <motion.p
                  className="mt-3 text-sm md:text-lg font-medium text-[#394D57]"
                  animate={{
                    fontSize: isCenter ? "1.15rem" : "1rem",
                    fontWeight: isCenter ? 600 : 500,
                  }}
                >
                  {product.name}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Button */}
      <button className="mt-10 inline-flex items-center border border-[#394D57] px-6 py-2 rounded hover:bg-[#394D57] hover:text-white transition">
        Read More →
      </button>
    </div>
  );
};

export default ProductCarousel;