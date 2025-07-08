import React, { useState, useEffect } from "react";
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
  Image,
  Server,
  ExternalLink,
  Zap,
  Building2,
  Rocket,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

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
        { name: "Domain Registration", to: "/services", icon: ExternalLink },
        { name: "Website Design", to: "/services", icon: Layout },
        { name: "UI/UX Design", to: "/services", icon: Palette },
        { name: "Graphic Design", to: "/services", icon: Image },
        { name: "Web Hosting", to: "/services", icon: Server },
        { name: "Professional Emails", to: "/services", icon: Mail },
      ],
    },
    // {
    //   name: "Industries",
    //   to: "/industries",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: "On Demand", to: "/industries/on-demand", icon: Zap },
    //     { name: "Enterprises", to: "/industries/enterprises", icon: Building2 },
    //     { name: "Startups", to: "/industries/startups", icon: Rocket },
    //     { name: "Healthcare", to: "/industries/healthcare", icon: Heart },
    //   ],
    // },
    // {
    //   name: "Staff Augmentation",
    //   to: "/staff-augmentation",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: "Node.js", to: "/staff-augmentation/nodejs", icon: Server },
    //     { name: "Angular", to: "/staff-augmentation/angular", icon: Code },
    //     { name: "React", to: "/staff-augmentation/react", icon: Code },
    //     { name: "Javascript", to: "/staff-augmentation/javascript", icon: Code },
    //   ],
    // },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  shadow-2xl ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transprent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-baseline space-x-2">
            <img src="/images/brand-logo.png" className="w-9" alt="Logo" />{" "}
            <span className="text-gray-800 font-bold text-xl ">
              WebEscalation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.to}
                    className="flex items-center space-x-1 px-4 py-2 text-sm text-gray-700 hover:text-cyan-500 transition-colors duration-200 relative rounded-lg hover:bg-gray-50"
                    onMouseEnter={() =>
                      item.hasDropdown && setOpenDropdown(item.name)
                    }
                    onMouseLeave={() =>
                      item.hasDropdown && setOpenDropdown(null)
                    }
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-cyan-500 transition-all duration-300 group-hover:w-3/4"></div>
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-gray-200 py-2 transition-all duration-300 z-50 ${
                        openDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.to}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-cyan-500 transition-colors duration-200 mx-2 rounded-lg"
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
            <a href="tel:+918273998875">
              <button className="border-1 border-gray-500 text-gray-500 px-6 py-1.5 rounded-full  hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-cyan-500 hover:bg-gray-100 transition-colors duration-200"
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
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/20 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.to}
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleDropdown(item.name);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
              </Link>

              {item.hasDropdown && (
                <div
                  className={`ml-4 mt-2 space-y-1 transition-all duration-300 ${
                    openDropdown === item.name
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {item.dropdownItems?.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      to={dropItem.to}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-600 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full text-left"
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
          <div className="pt-4 mt-4 border-t border-gray-200/20 space-y-3">
            <a
              href="tel:+918273998875"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>+91 8273998875</span>
            </a>
            <a href="tel:+918273998875">
              <button className="w-full border-1 border-gray-500 text-gray-500 px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
