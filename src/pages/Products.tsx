// components/MainPage/Products.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ✅ Import all product images
import p11 from "@/assets/p11.png";
import p12 from "@/assets/p12.png";
import p13 from "@/assets/p13.png";
import p14 from "@/assets/p14.png";

import p21 from "@/assets/p21.png";
import p22 from "@/assets/p22.png";
import p23 from "@/assets/p23.png";
import p24 from "@/assets/p24.png";

import p31 from "@/assets/p31.png";
import p32 from "@/assets/p32.png";
import p33 from "@/assets/p33.png";
import p34 from "@/assets/p34.png";

import p41 from "@/assets/p41.png";
import p42 from "@/assets/p42.png";
import p43 from "@/assets/p43.png";
import p44 from "@/assets/p44.png";

import p51 from "@/assets/p51.png";
import p52 from "@/assets/p52.png";
import p53 from "@/assets/p53.png";
import p54 from "@/assets/p54.png";

import p61 from "@/assets/p61.png";
import p62 from "@/assets/p62.png";
import p63 from "@/assets/p63.png";
import p64 from "@/assets/p64.png";

import p71 from "@/assets/p71.png";
import p72 from "@/assets/p72.png";
import p73 from "@/assets/p73.png";
import p74 from "@/assets/p74.png";

import p81 from "@/assets/p81.png";
import p82 from "@/assets/p82.png";
import p83 from "@/assets/p83.png";
import p84 from "@/assets/p84.png";

import p91 from "@/assets/p91.png";
import p92 from "@/assets/p92.png";
import p93 from "@/assets/p93.png";
import p94 from "@/assets/p94.png";

import p101 from "@/assets/p101.png";
import p102 from "@/assets/p102.png";
import p103 from "@/assets/p103.png";
import p104 from "@/assets/p104.png";

// ✅ Product list
const productList = [
  {
    title: "Carry Bag (W, U Cut)",
    regularSizes: ["9×12", "11×14", "13×16", "16×20", "17×23"],
    jumboSizes: ["20×20", "20×26", "22×22", "24×24", "24×30", "27×30", "28×32"],
    regularGSM: "20 to 80",
    jumboGSM: "30 to 80",
    notes: ["Customized Size Available"],
    images: [p11, p12, p13, p14],
  },
  {
    title: "Shopping Bag",
    regularSizes: ["9×12", "10×14", "12×16", "12×18", "14×19", "16×24"],
    regularGSM: "40 to 80",
    notes: ["Customized Size Available"],
    images: [p21, p22, p23, p24],
  },
  {
    title: "Loop Handle Bag",
    regularSizes: ["10×13", "12×14", "14×17", "16×19", "18×20"],
    regularGSM: "60 to 100",
    notes: [
      "Customized Size Available",
      "Laminated and Printed Bags Also Available",
    ],
    images: [p31, p32, p33, p34],
  },
  {
    title: "Shoes Bag / Apron Bag",
    regularSizes: ["10×14", "12×14", "14×14", "15×14", "16×14", "17×14", "18×14"],
    regularGSM: "50 to 80",
    notes: ["Customized Size Available"],
    images: [p41, p42, p43, p44],
  },
  {
    title: "Airline/Cinema Headrest",
    regularSizes: ["11×13"],
    regularGSM: "60 to 80",
    notes: ["Customized Size Available"],
    images: [p51, p52, p53, p54],
  },
  {
    title: "Non Woven Rolls",
    regularSizes: ['17" to 120"'],
    regularGSM: "20 to 100",
    notes: [
      "Customized Size Also Available",
      "Available in Hydrophilic and Hydrophobic",
      "Polypropylene Material Packaging",
      "Supports Primary/Secondary Packing",
      "Laminated Fabric Also Available",
    ],
    images: [p61, p62, p63, p64],
  },
  {
    title: "Box Bag",
    regularSizes: ["10×10×10", "10×14×14", "12×10×12", "12×14×14", "15×17×14"],
    regularGSM: "60 to 100",
    notes: [
      "Customized Size Also Available",
      "Laminated Fabric Also Available",
    ],
    images: [p71, p72, p73, p74],
  },
  {
    title: "Garbage Bag",
    regularSizes: ["17×19", "21×24", "24×32", "30×37", "30×50"],
    regularGSM: "60 to 80",
    notes: [
      "Customized Size Also Available",
      "Flat Garbage Bags Also Available",
    ],
    images: [p81, p82, p83, p84],
  },
  {
    title: "Pillow Cover",
    regularSizes: ["17×19", "15×24", "18×24", "18×27"],
    regularGSM: "60 to 80",
    notes: ["Customized Size Also Available"],
    images: [p91, p92, p93, p94],
  },
  {
    title: "Table Cloth",
    regularSizes: ["24×24", "30×30", "36×36", "37×40", "42×42"],
    regularGSM: "60 to 80",
    notes: ["Customized Size Also Available"],
    images: [p101, p102, p103, p104],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFA]">
      <Navigation />

      {/* Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-[#3A4A4F] mb-3">Everson</h1>
        <h2 className="text-3xl font-semibold text-[#3A4A4F] mb-6">Products</h2>
        <p className="text-[#587583] text-lg max-w-3xl mx-auto leading-relaxed">
          Carry Your Brand with Unmatched Quality. Discover our premium
          non-woven bags designed for durability, perfected for your branding,
          and crafted to make every carry a statement of excellence.
        </p>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 pb-20 space-y-12">
        {productList.map((product, index) => (
          <div
            key={index}
            className="border border-[#D9E0E1] bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {/* Left Side - Images */}
            <div className="grid grid-cols-5 md:grid-cols-5 gap-4 items-start">
              {/* Left smaller images (match height of main image) */}
              <div className="flex flex-col justify-between col-span-1 h-[400px] space-y-3">
                {product.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${product.title} Small ${i + 1}`}
                    className="w-full h-1/3 object-cover border border-gray-300 rounded-md"
                  />
                ))}
              </div>

              {/* Main image */}
              <div className="col-span-4 flex flex-col items-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="object-cover w-full h-[400px] border border-gray-300 rounded-md"
                />
                <p className="w-full text-center text-[#3A4A4F] font-medium text-lg mt-3">
                  {product.title}
                </p>
              </div>
            </div>

            {/* Right Side - Specifications */}
            <div className="text-[#3A4A4F] flex flex-col gap-6">
              {/* Regular Size */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Regular Size</h4>
                <div className="border border-[#D9E0E1]">
                  {/* Bag Size Row */}
                  <div className="flex border-b border-[#D9E0E1]">
                    <div className="w-[120px] flex items-center justify-center border-r border-[#D9E0E1] text-[#587583] font-medium">
                      Bag Size
                    </div>
                    <div className="flex flex-wrap flex-1">
                      {product.regularSizes.map((size, i) => (
                        <div
                          key={i}
                          className="flex-1 min-w-[80px] text-center border-l border-[#D9E0E1] py-2 text-sm"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GSM Row */}
                  <div className="flex">
                    <div className="w-[120px] flex items-center justify-center border-r border-[#D9E0E1] text-[#587583] font-medium">
                      GSM
                    </div>
                    <div className="flex-1 flex items-center justify-center py-2 text-sm">
                      {product.regularGSM}
                    </div>
                  </div>
                </div>
              </div>

              {/* Jumbo Size */}
              {product.jumboSizes && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Jumbo Size</h4>
                  <div className="border border-[#D9E0E1]">
                    <div className="flex border-b border-[#D9E0E1]">
                      <div className="w-[120px] flex items-center justify-center border-r border-[#D9E0E1] text-[#587583] font-medium">
                        Bag Size
                      </div>
                      <div className="flex flex-wrap flex-1">
                        {product.jumboSizes.map((size, i) => (
                          <div
                            key={i}
                            className="flex-1 min-w-[80px] text-center border-l border-[#D9E0E1] py-2 text-sm"
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* GSM Row */}
                    <div className="flex">
                      <div className="w-[120px] flex items-center justify-center border-r border-[#D9E0E1] text-[#587583] font-medium">
                        GSM
                      </div>
                      <div className="flex-1 flex items-center justify-center py-2 text-sm">
                        {product.jumboGSM}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes */}
              <ul className="list-disc ml-5 text-[#587583] text-sm space-y-1">
                {product.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Products;
