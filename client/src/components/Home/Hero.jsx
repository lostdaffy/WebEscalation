import React from "react";
import { ArrowRight, Star, Users, Code, BarChart3, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Brand tagline */}
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-medium">
              BUILDING SOFTWARE, BUILDING SUCCESS
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Transform Ideas Into{" "}
              <span className="text-cyan-600">Innovative Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We transform your idea into innovative software solutions that
              propel business growth. Our knowledgeable staff blends technology
              and creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors duration-200 text-center">
                Get Started
              </Link>
              <Link to="/about" className="flex items-center justify-center gap-2 text-cyan-600 hover:text-cyan-700 px-6 sm:px-8 py-3 sm:py-4 font-medium transition-colors duration-200">
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Customer Reviews */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 lg:pt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 border-2 border-white"></div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-800 text-sm sm:text-base">
                  Happy Customer
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    4.8 (15K Review)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="max-w-full relative">
            {/* Top row - WEB */}
            <div className="pb-3 sm:pb-5 flex gap-3 sm:gap-5 items-center">
              <img 
                src="/images/5078803.jpg" 
                className="w-full sm:w-2/3 md:w-3/4 rounded-2xl sm:rounded-4xl border-slate-500 border-2" 
                alt="Web development" 
              />
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center flex-1 hidden sm:block">
                <h2 className="text-cyan-600 leading-none">W</h2>
                <h2 className="text-slate-800 leading-none">E</h2>
                <h2 className="text-cyan-600 leading-none">B</h2>
              </div>
            </div>
            
            {/* Bottom row - DESIGN */}
            <div className="flex gap-3 sm:gap-5 items-center">
              <img 
                src="/images/2814227.jpg" 
                className="w-full sm:w-2/3 md:w-3/4 rounded-2xl sm:rounded-4xl border-slate-500 border-2" 
                alt="Web design" 
              />
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center flex-1 hidden sm:block">
                <h2 className="text-cyan-600 leading-none">D</h2>
                <h2 className="text-slate-800 leading-none">E</h2>
                <h2 className="text-cyan-600 leading-none">S</h2>
                <h2 className="text-slate-800 leading-none">I</h2>
                <h2 className="text-cyan-600 leading-none">G</h2>
                <h2 className="text-slate-800 leading-none">N</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;