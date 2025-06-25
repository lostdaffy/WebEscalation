import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
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
      <div className="absolute top-20 right-20 text-cyan-600 opacity-20">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-cyan-600 rotate-45"></div>
          <div className="w-4 h-4 bg-cyan-600 rotate-45"></div>
          <div className="w-4 h-4 bg-cyan-600 rotate-45"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-cyan-400">WebEscalation</span>
              </h3>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                Building Software, Building Success
              </p>
              <p className="text-gray-300 leading-relaxed">
                We transform your ideas into innovative software solutions that
                propel business growth through technology and creativity.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/profile.php?id=61577009926764">
                <div className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
              </Link>
              <Link to="https://www.linkedin.com/posts/webescalation_webescalation-websitedevelopment-webdesign-activity-7340737624262791169-v_ju">
                <div className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </Link>
              <Link to="https://www.instagram.com/webescalation">
                <div className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition-colors duration-200 cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Code className="w-4 h-4 text-cyan-400" />
                <Link to="#">
                  <span className="hover:underline">Software Development</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <Link to="#">
                  <span className="hover:underline">Mobile Applications</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Globe className="w-4 h-4 text-cyan-400" />
                <Link to="#">
                  <span className="hover:underline">Web Development</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <Link to="#">
                  <span className="hover:underline">Digital Marketing</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Code className="w-4 h-4 text-cyan-400" />
                <Link to="#">
                  <span className="hover:underline">AI Solutions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/home"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">
              Get In Touch
            </h4>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Saharanpur</p>
                  <p>Uttar Pradesh, 247001</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a
                  to="tel:+918273998875"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 8273998875
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a
                  to="mailto:webescalation@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  webescalation@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-cyan-400 mb-2">Stay Updated</h5>
              <p className="text-sm text-gray-400 mb-3">
                Get latest updates and industry insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg transition-colors duration-200">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; 2025 WebEscalation. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
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
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-800 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
