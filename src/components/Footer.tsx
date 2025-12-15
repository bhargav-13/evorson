// components/MainPage/Footer.tsx
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/F_Logo.png";
import Footer_Right from "@/assets/Footer_Right.png";

const Footer = () => {
  const navigate = useNavigate();

  // ✅ Smooth scroll + navigate function
  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="relative bg-[#587583] text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-4 relative z-10">
        {/* Footer Columns */}
        <div className="flex flex-wrap md:flex-nowrap text-lg">
          {/* Contact - First on mobile */}
          <div className="w-full md:w-[280px] space-y-4 mb-8 md:mb-0">
            <h3 className="font-bold mb-2 text-xl">Contact</h3>
            <p>
              <a
                href="mailto:info@everson.in"
                className="hover:underline"
              >
                info@everson.in
              </a>
            </p>
            {/* ✅ Updated phone number with clickable dial link */}
            <p>
              <a
                href="tel:+917905378953"
                className="hover:underline"
              >
                +91 79053 78953
              </a>
            </p>
          </div>

          {/* Huge gap after Contact - Desktop only */}
          <div className="hidden md:block md:w-[250px]"></div>

          {/* Three Menus Container - Side by side on mobile */}
          <div className="w-full md:contents flex justify-between gap-4 mb-8 md:mb-0">
            {/* Quick Access */}
            <div className="flex-1 md:w-[150px] space-y-2">
              <h3 className="font-bold mb-4 text-xl">Quick Access</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="hover:underline"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/about")}
                    className="hover:underline"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Product
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="hover:underline"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Normal gap - Desktop only */}
            <div className="hidden md:block md:w-[40px]"></div>

            {/* Categories */}
            <div className="flex-1 md:w-[150px] space-y-2">
              <h3 className="font-bold mb-4 text-xl">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Non woven
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Loop Bag
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Garbage Bag
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Table cloth
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Airline headset
                  </button>
                </li>
              </ul>
            </div>

            {/* Normal gap - Desktop only */}
            <div className="hidden md:block md:w-[40px]"></div>

            {/* Products */}
            <div className="flex-1 md:w-[150px] space-y-2">
              <h3 className="font-bold mb-4 text-xl">Products</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Shoes Bag
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Agri Bag
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Box Bag
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    Pillow Cover
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/products")}
                    className="hover:underline"
                  >
                    D-Cut Bag
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Normal gap - Desktop only */}
          <div className="hidden md:block md:w-[40px]"></div>

          {/* Address - Last on mobile */}
          <div className="w-full md:w-[280px] space-y-2">
            <h3 className="font-bold mb-4 text-xl">Address</h3>
            <p>Samrudhi Industrial park 5 Block - A,</p>
            <p>Plot No. 02 Near Balson Valve Gate,</p>
            <p>Rajkot Gondal Highway Vill - Ribda</p>
            <p>Taluka - Gondal | Dist - Rajkot 360311</p>
          </div>
        </div>

        {/* Description Text - separate */}
        <div className="mt-10">
          <p className="text-xl max-w-[400px] mb-8 leading-relaxed font-semibold">
            Everson India Limited
          </p>
          <p className="text-xl max-w-[400px] leading-relaxed">
            Manufacturer of premium non-woven bags, covers, and fabric products
            designed for strength, style, and sustainability.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 flex flex-col items-start">
          {/* Logo */}
          <img src={Logo} alt="Everson Logo" className="h-14 w-auto mb-4" />

          {/* Full-width border */}
          <div className="border-t border-white/20 w-full mb-4"></div>

          {/* Copyright text */}
          <p className="text-base text-left">
            © 2025 Everson — All Copyright Reserved
          </p>
        </div>
      </div>

      {/* Footer Right Image - always bottom right */}
      <img
        src={Footer_Right}
        alt="Footer Right"
        className="absolute bottom-0 right-0 h-[200px] md:h-[350px] w-auto pointer-events-none object-contain"
      />
    </footer>
  );
};

export default Footer;
