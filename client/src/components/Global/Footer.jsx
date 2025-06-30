import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  BarChart3,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 text-cyan-500 opacity-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rotate-45"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rotate-45"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rotate-45"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <span className="text-cyan-400">WebEscalation</span>
              </h3>
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
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/posts/webescalation_webescalation-websitedevelopment-webdesign-activity-7340737624262791169-v_ju"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-cyan-500 hover:bg-cyan-700 p-2 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/webescalation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-cyan-500 hover:bg-cyan-700 p-2 sm:p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                <Link to="#" className="hover:underline">
                  Software Development
                </Link>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                <Link to="#" className="hover:underline">
                  Mobile Applications
                </Link>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                <Link to="#" className="hover:underline">
                  Web Development
                </Link>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                <Link to="#" className="hover:underline">
                  Digital Marketing
                </Link>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                <Link to="#" className="hover:underline">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/home"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
              Get In Touch
            </h4>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base text-gray-300">
                  <p>Saharanpur</p>
                  <p>Uttar Pradesh, 247001</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="tel:+918273998875"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 8273998875 (Saharanpur)
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="tel:+919060044717"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 9060044717 <br /> (Patna, Bihar Office)
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="mailto:webescalation@gmail.com"
                  className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200 break-all sm:break-normal"
                >
                  webescalation@gmail.com
                </Link>
              </div>
            </div>

           
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
              <span>&copy; 2025 WebEscalation. Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                to="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-slate-800 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
