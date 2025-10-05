import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Welcome", to: "/home" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about" },
    { name: "Industries", to: "/industries" },
    { name: "Contact", to: "/contact" },
  ];

  // Check if current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Add Remix Icons CDN to your HTML head */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/home" 
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/images/brand-name.png" 
                alt="Company Logo" 
                className="w-32 sm:w-40 h-auto" 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative text-sm lg:text-base font-semibold transition-all duration-300 group ${
                    isActive(item.to)
                      ? 'text-[#0092b8]'
                      : 'text-gray-900 hover:text-[#0092b8]'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute left-1/2 -bottom-1 h-0.5 bg-[#0092b8] transition-all duration-300 transform -translate-x-1/2 ${
                      isActive(item.to) 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-6 lg:px-8 py-2.5 lg:py-3 bg-[#0092b8] hover:bg-[#5cc4e8] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#0092b8]/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <i className="ri-customer-service-2-line text-base"></i>
                <span className="hidden lg:inline">Contact Us</span>
                <span className="lg:hidden">Contact</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-[#0092b8] hover:bg-gray-50 rounded-lg transition-all duration-200"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <i className="ri-close-line text-xl"></i>
                ) : (
                  <i className="ri-menu-line text-xl"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-6 space-y-1 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                  isActive(item.to)
                    ? 'text-[#0092b8] bg-[#0092b8]/10'
                    : 'text-gray-700 hover:text-[#0092b8] hover:bg-gray-50'
                }`}
              >
                {/* Add relevant icons for each menu item */}
                {item.name === "Welcome" && <i className="ri-home-line"></i>}
                {item.name === "Services" && <i className="ri-service-line"></i>}
                {item.name === "About" && <i className="ri-information-line"></i>}
                {item.name === "Industries" && <i className="ri-building-line"></i>}
                {item.name === "Contact" && <i className="ri-contacts-line"></i>}
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Mobile CTA Section */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+918273998875"
                className="flex items-center space-x-3 text-gray-600 hover:text-[#0092b8] hover:bg-gray-50 px-4 py-3 rounded-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <i className="ri-phone-line text-lg"></i>
                <span className="font-medium">+91 8273998875</span>
              </a>

              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <button className="w-full bg-[#0092b8] hover:bg-[#5cc4e8] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#0092b8]/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <i className="ri-customer-service-2-line text-base"></i>
                  <span>Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to body content to account for fixed navbar */}
      <div className="pt-16 sm:pt-20">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
