import React from "react";
import { ArrowRight, Star, Users, Code, BarChart3, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand tagline */}
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">
              BUILDING SOFTWARE, BUILDING SUCCESS
            </div>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Transform Ideas Into{" "}
              <span className="text-cyan-600">Innovative Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We transform your idea into innovative software solutions that
              propel business growth. Our knowledgeable staff blends technology
              and creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200">
                Get Started
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 px-8 py-4 font-medium transition-colors duration-200">
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  Happy Customer
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.8 (15K Review)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-full relative">
            <div className="pb-5 flex gap-5">
              <img src="/images/5078803.jpg" className="w-3/4 rounded-4xl border-slate-500 border-2" alt="" />
              <div className="text-7xl font-extrabold text-center">
                <h2 className="text-cyan-600">W</h2>
                <h2 className="text-slate-800">E</h2>
                <h2 className="text-cyan-600">B</h2>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="/images/2814227.jpg" className="w-3/4 rounded-4xl border-slate-500 border-2" alt="" />
              <div className="text-5xl font-extrabold text-center">
                <h2 className="text-cyan-600">D</h2>
                <h2 className="text-slate-800">E</h2>
                <h2 className="text-cyan-600">S</h2>
                <h2 className="text-slate-800">I</h2>
                <h2 className="text-cyan-600">G</h2>
                <h2 className="text-slate-800">N</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
