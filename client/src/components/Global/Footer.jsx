import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Code,
  Smartphone,
  Globe,
  BarChart3,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden text-gray-200">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 text-cyan-400 opacity-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rotate-45"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rotate-45"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rotate-45"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="pb-2">
                <Link to="/home" className="flex items-baseline space-x-2">
                  <img
                    src="/images/brand-name.png"
                    alt="Logo"
                    className="w-50"
                  />
                </Link>
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">
                Building Software, Building Success
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We transform your ideas into innovative software solutions that
                propel business growth through technology and creativity.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <Link
                to="https://www.facebook.com/profile.php?id=61577009926764"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-cyan-500 hover:bg-cyan-700 p-2 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/posts/webescalation_webescalation-websitedevelopment-webdesign-activity-7340737624262791169-v_ju"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-cyan-500 hover:bg-cyan-700 p-2 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/webescalation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-cyan-500 hover:bg-cyan-700 p-2 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                ["Software Development", <Code />],
                ["Mobile Applications", <Smartphone />],
                ["Web Development", <Globe />],
                ["Digital Marketing", <BarChart3 />],
                ["AI Solutions", <Code />],
              ].map(([label, Icon]) => (
                <li
                  key={label}
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base hover:text-cyan-400 transition-colors duration-200"
                >
                  {React.cloneElement(Icon, {
                    className:
                      "w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0",
                  })}
                  <Link to="#" className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                ["Home", "/home"],
                ["About Us", "/about"],
                ["Career", "/career"],
                ["Contact Us", "/contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
              Get In Touch
            </h4>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <p>Saharanpur</p>
                  <p>Uttar Pradesh, 247001</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="tel:+918273998875"
                  className="text-sm sm:text-base hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 8273998875
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="mailto:webescalation@gmail.com"
                  className="text-sm sm:text-base hover:text-cyan-400 transition-colors duration-200 break-all sm:break-normal"
                >
                  webescalation@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
              <span>&copy; 2025 WebEscalation.</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (text) => (
                  <Link
                    key={text}
                    to="/"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {text}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
