import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/assets/Logo.png"; // adjust path if needed

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Scroll to top + navigate
  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0); // scroll to top
    navigate(path);
    setIsOpen(false); // close mobile menu if open
  };

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
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center focus:outline-none"
          >
            <img src={Logo} alt="Logo" className="w-48 object-contain" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-md text-[#394D57]">
            <button
              onClick={() => handleNavigate("/")}
              className="hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/about")}
              className="hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate("/products")}
              className="hover:text-accent transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => handleNavigate("/contact")}
              className="hover:text-accent transition-colors"
            >
              Contact
            </button>
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
              <button
                onClick={() => handleNavigate("/")}
                className="hover:text-accent transition-colors text-left"
              >
                HOME
              </button>
              <button
                onClick={() => handleNavigate("/about")}
                className="hover:text-accent transition-colors text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleNavigate("/products")}
                className="hover:text-accent transition-colors text-left"
              >
                PRODUCTS
              </button>
              <button
                onClick={() => handleNavigate("/contact")}
                className="hover:text-accent transition-colors text-left"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
