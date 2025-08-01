import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Welcome", to: "/home" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about" },
    { name: "Industries", to: "/industries" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto  py-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-baseline space-x-2 px-4">
            <img src="/images/brand-name.png" alt="Logo" className="w-50" />
            {/* <span className="text-gray-800 font-bold text-xl">
              WebEscalation
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="relative text-sm font-semibold text-gray-700 hover:text-cyan-500 transition-colors"
              >
                {item.name}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-1.5 rounded-full border border-gray-800 text-gray-800 hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-cyan-500 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
            <Link
              to="/contact"
              className="flex items-center space-x-3 text-gray-600 hover:text-cyan-500 hover:bg-gray-50 px-4 py-3 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span>+91 8273998875</span>
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full border border-gray-500 text-gray-600 px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
