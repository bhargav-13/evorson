// components/MainPage/Products.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import carryBag1 from "@/assets/pro1.png";
import carryBag2 from "@/assets/pro2.png";
import carryBag3 from "@/assets/pro3.png";

const productList = [
  {
    title: "Carry Bag (W, U Cut)",
    regularSizes: ["9×12", "11×14", "13×16", "16×20", "17×23"],
    jumboSizes: ["20×20", "20×26", "22×22", "24×24", "24×30", "27×30", "28×32"],
    regularGSM: "20 to 80",
    jumboGSM: "30 to 80",
    notes: ["Customized Size Available"],
  },
  {
    title: "Shopping Bag",
    regularSizes: ["9×12", "10×14", "12×16", "12×18", "14×19", "16×24"],
    regularGSM: "40 to 80",
    notes: ["Customized Size Available"],
  },
  {
    title: "Loop Handle Bag",
    regularSizes: ["10×13", "12×14", "14×17", "16×19", "18×20"],
    regularGSM: "60 to 100",
    notes: [
      "Customized Size Available",
      "Laminated and Printed Bags Also Available",
    ],
  },
  {
    title: "Shoes Bag / Apron Bag",
    regularSizes: ["10×14", "12×14", "14×14", "15×14", "16×14", "17×14", "18×14"],
    regularGSM: "50 to 80",
    notes: ["Customized Size Available"],
  },
  {
    title: "Airline/Cinema Headrest",
    regularSizes: ["11×13"],
    regularGSM: "60 to 80",
    notes: ["Customized Size Available"],
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
  },
  {
    title: "Box Bag",
    regularSizes: ["10×10×10", "10×14×14", "12×10×12", "12×14×14", "15×17×14"],
    regularGSM: "60 to 100",
    notes: [
      "Customized Size Also Available",
      "Laminated Fabric Also Available",
    ],
  },
  {
    title: "Garbage Bag",
    regularSizes: ["17×19", "21×24", "24×32", "30×37", "30×50"],
    regularGSM: "60 to 80",
    notes: [
      "Customized Size Also Available",
      "Flat Garbage Bags Also Available",
    ],
  },
  {
    title: "Pillow Cover",
    regularSizes: ["17×19", "15×24", "18×24", "18×27"],
    regularGSM: "60 to 80",
    notes: ["Customized Size Also Available"],
  },
  {
    title: "Table Cloth",
    regularSizes: ["24×24", "30×30", "36×36", "37×40", "42×42"],
    regularGSM: "60 to 80",
    notes: ["Customized Size Also Available"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFA]">
      <Navigation />

      {/* Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-[#3A4A4F] mb-3">Everson</h1>
        <h2 className="text-3xl font-semibold text-[#3A4A4F] mb-6">
          Products
        </h2>
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
              <div className="flex flex-col gap-3 col-span-1">
                <img
                  src={carryBag1}
                  alt={`${product.title} Small 1`}
                  className="w-full h-24 object-cover border border-gray-300"
                />
                <img
                  src={carryBag2}
                  alt={`${product.title} Small 2`}
                  className="w-full h-24 object-cover border border-gray-300"
                />
                <img
                  src={carryBag3}
                  alt={`${product.title} Small 3`}
                  className="w-full h-24 object-cover border border-gray-300"
                />
              </div>

              <div className="col-span-4 flex flex-col items-center">
                <img
                  src={carryBag2}
                  alt={product.title}
                  className="object-cover w-full max-h-[400px] border border-gray-300"
                />
                <p className="w-full text-center text-[#3A4A4F] font-medium text-lg mt-3">
                  {product.title}
                </p>
              </div>
            </div>

            {/* Right Side - Specifications */}
            <div className="text-[#3A4A4F] flex flex-col gap-6">
              {/* Regular Size Table */}
              <div>
                <h4 className="text-lg font-semibold text-[#3A4A4F] mb-3">
                  Regular Size
                </h4>
                <div className="grid grid-cols-[120px_1fr] border border-[#D9E0E1]">
                  <div className="bg-[#F7F7F5] border-r border-[#D9E0E1] flex items-center justify-center text-[#587583] font-medium text-sm sm:text-base">
                    Bag Size
                  </div>
                  {/* FIX: always 7 columns so sizes are side-by-side in boxes */}
                  <div className="grid grid-cols-7">
                    {product.regularSizes.map((size, i) => (
                      <div
                        key={i}
                        className="border-l border-[#D9E0E1] flex items-center justify-center py-3 text-sm"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                {/* GSM Row */}
                {product.regularGSM && (
                  <div className="grid grid-cols-[120px_1fr] border border-t-0 border-[#D9E0E1]">
                    <div className="bg-[#F7F7F5] border-r border-[#D9E0E1] flex items-center justify-center text-[#587583] font-medium text-sm sm:text-base">
                      GSM
                    </div>
                    <div className="flex items-center justify-center py-3 text-sm">
                      {product.regularGSM}
                    </div>
                  </div>
                )}
              </div>

              {/* Jumbo Size Table (if exists) */}
              {product.jumboSizes && (
                <div>
                  <h4 className="text-lg font-semibold text-[#3A4A4F] mb-3">
                    Jumbo Size
                  </h4>
                  <div className="grid grid-cols-[120px_1fr] border border-[#D9E0E1]">
                    <div className="bg-[#F7F7F5] border-r border-[#D9E0E1] flex items-center justify-center text-[#587583] font-medium text-sm sm:text-base">
                      Bag Size
                    </div>
                    <div className="grid grid-cols-7">
                      {product.jumboSizes.map((size, i) => (
                        <div
                          key={i}
                          className="border-l border-[#D9E0E1] flex items-center justify-center py-3 text-sm"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] border border-t-0 border-[#D9E0E1]">
                    <div className="bg-[#F7F7F5] border-r border-[#D9E0E1] flex items-center justify-center text-[#587583] font-medium text-sm sm:text-base">
                      GSM
                    </div>
                    <div className="flex items-center justify-center py-3 text-sm">
                      {product.jumboGSM}
                    </div>
                  </div>
                </div>
              )}

              {/* Notes Section */}
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
