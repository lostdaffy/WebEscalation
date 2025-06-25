import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Mail,
  Phone,
  Globe,
  Layout,
  Palette,
  ImageIcon,
  Server,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const navItems = [
    { name: "Home", to: "/home" },
    { name: "About", to: "/about" },
    {
      name: "Services",
      to: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Website Development", to: "/services", icon: Globe },
        { name: "Software Development", to: "/services", icon: Code },
        { name: "Domain Registration", to: "/services", icon: Link },
        { name: "Website Design", to: "/services", icon: Layout },
        { name: "UI/UX Design", to: "/services", icon: Palette },
        { name: "Graphic Design", to: "/services", icon: ImageIcon },
        { name: "Web Hosting", to: "/services", icon: Server },
        { name: "Professional Emails", to: "/services", icon: Mail },
      ],
    },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20"
            : "bg-white/90 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/home">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-cyan-600">
                    WebEscalation
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.to}
                      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors duration-200 relative"
                      onMouseEnter={() =>
                        item.hasDropdown && setIsServicesOpen(true)
                      }
                      onMouseLeave={() =>
                        item.hasDropdown && setIsServicesOpen(false)
                      }
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></div>
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 transition-all duration-300 ${
                          isServicesOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-2"
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.to}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors duration-200"
                          >
                            <dropItem.icon className="h-4 w-4" />
                            <span>{dropItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link to={`tel:+918273998875`}>
                  <button className="bg-cyan-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/20 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.to}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => !item.hasDropdown && setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleServices();
                        }}
                      />
                    )}
                  </div>
                </Link>

                {/* Mobile Dropdown */}
                {item.hasDropdown && (
                  <div
                    className={`pl-4 space-y-1 transition-all duration-300 ${
                      isServicesOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {item.dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.to}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <dropItem.icon className="h-4 w-4" />
                        <span>{dropItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200/20 space-y-3">
              <Link
                to="tel:+1234567890"
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </Link>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
