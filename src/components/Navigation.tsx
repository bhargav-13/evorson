import { useNavigate } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/assets/Logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      {/* 🔹 FULL WIDTH BLUR BACKGROUND */}
      <div className="w-full backdrop-blur-md bg-white/70">
        {/* HEADER CONTENT */}
        <div
          className="container mx-auto py-3 px-8 text-black"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className="flex items-center justify-between h-20">
            <button onClick={() => handleNavigate("/")}>
              <img src={Logo} alt="Logo" className="w-48 object-contain" />
            </button>

            {/* Desktop */}
            <div className="hidden md:flex space-x-10 text-[#394D57]">
              <button onClick={() => handleNavigate("/")}>Home</button>
              <button onClick={() => handleNavigate("/about")}>About</button>
              <button onClick={() => handleNavigate("/products")}>Products</button>
              <button onClick={() => handleNavigate("/contact")}>Contact</button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-[60]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-[#577583]
          transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* 🔹 TOP BAR (BACK OPTION) */}
        <div className="absolute top-6 left-6">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white/90 text-sm tracking-wide"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>

        {/* MENU CONTENT */}
        <div className="flex flex-col items-center justify-center h-full text-white">
          {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map((item, index) => (
            <button
              key={item}
              onClick={() =>
                handleNavigate(
                  item === "HOME" ? "/" : `/${item.toLowerCase()}`
                )
              }
              className={`
                text-3xl font-semibold tracking-wide
                transition-all duration-700 ease-out
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${index * 120 + 200}ms` }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
