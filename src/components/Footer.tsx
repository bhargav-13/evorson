import { Link } from "react-router-dom";
import Logo from "@/assets/F_Logo.png";
import Footer_Right from "@/assets/Footer_Right.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#587583] text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-4 relative z-10">
        {/* Footer Columns */}
        <div className="flex flex-wrap md:flex-nowrap text-sm">
          {/* Contact - First on mobile */}
          <div className="w-full md:w-[280px] space-y-4 mb-8 md:mb-0">
            <h3 className="font-bold mb-2">Contact</h3>
            <p>info@everson.in</p>
            <p>+91 94245 56793</p>
          </div>

          {/* Huge gap after Contact - Desktop only */}
          <div className="hidden md:block md:w-[250px]"></div>

          {/* Three Menus Container - Side by side on mobile */}
          <div className="w-full md:contents flex justify-between gap-4 mb-8 md:mb-0">
            {/* Quick Access */}
            <div className="flex-1 md:w-[150px] space-y-2">
              <h3 className="font-bold mb-4">Quick Access</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="hover:underline">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="hover:underline">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Normal gap - Desktop only */}
            <div className="hidden md:block md:w-[40px]"></div>

            {/* Categories */}
            <div className="flex-1 md:w-[150px] space-y-2">
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-1">
                <li>Non woven</li>
                <li>Loop Bag</li>
                <li>Garbage Bag</li>
                <li>Table cloth</li>
                <li>Airline headset</li>
              </ul>
            </div>

            {/* Normal gap - Desktop only */}
            <div className="hidden md:block md:w-[40px]"></div>

            {/* Products */}
            <div className="flex-1 md:w-[150px] space-y-2">
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-1">
                <li>Shoes Bag</li>
                <li>Agri Bag</li>
                <li>Box Bag</li>
                <li>Pillow Cover</li>
                <li>D-Cut Bag</li>
              </ul>
            </div>
          </div>

          {/* Normal gap - Desktop only */}
          <div className="hidden md:block md:w-[40px]"></div>

          {/* Address - Last on mobile */}
          <div className="w-full md:w-[280px] space-y-2">
            <h3 className="font-bold mb-4">Address</h3>
            <p>Samrudhi Industrial park 5 Block - A,</p>
            <p>Plot No. 02 Near Balson Valve Gate,</p>
            <p>Rajkot Gondal Highway Vill - Ribda</p>
            <p>Taluka - Gondal | Dist - Rajkot 360311</p>
          </div>
        </div>

        {/* Description Text - separate */}
        <div className="mt-8">
                    <p className="text-lg max-w-[300px] mb-8 leading-relaxed">
            Everson India Limited
          </p>
          <p className="text-lg max-w-[300px] leading-relaxed">
            Manufacturer of premium non-woven bags, covers, and fabric products
            designed for strength, style, and sustainability.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 flex flex-col items-start">
          {/* Logo */}
          <img src={Logo} alt="Everson Logo" className="h-12 w-auto mb-4" />

          {/* Full-width border */}
          <div className="border-t border-white/20 w-full mb-4"></div>

          {/* Copyright text */}
          <p className="text-sm text-left">
            © 2025 Everson — All Copyright Reserved
          </p>
        </div>
      </div>

      {/* Footer Right Image - bottom on mobile */}
      <img
        src={Footer_Right}
        alt="Footer Right"
        className="absolute md:top-[175px] bottom-0 right-0 h-[200px] md:h-[350px] w-auto pointer-events-none"
      />
    </footer>
  );
};

export default Footer;