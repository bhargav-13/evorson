import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/assets/Logo.png"; // adjust path if needed

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Load Inter font only for header
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div
        className="container mx-auto py-3 px-8 text-black"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-48 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-md text-[#394D57]">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link
              to="/products"
              className="hover:text-accent transition-colors"
            >
              Products
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors text-black"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-black/10 backdrop-blur-md">
            <div className="flex flex-col space-y-4 text-base font-medium text-black">
              <Link
                to="/"
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/products"
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                to="/contact"
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
