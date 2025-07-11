import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="min-h-screen pt-20 sm:pt-24 lg:pt-28"
      style={{
        background: `url(${"/images/5599220.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      id="#hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center min-h-screen py-8 sm:py-12 lg:py-16">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-5xl w-full">
            {/* Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 leading-tight">
                <span className="inline-block transition-all duration-1000 ease-out">
                  Complete{" "}
                </span>
                <span className="text-cyan-500 font-medium inline-block transition-all duration-1000 ease-out">
                  Digital Solutions
                </span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="inline-block transition-all duration-1000 ease-out">
                  with Innovative Design
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-out px-2 sm:px-0">
                Grow Your Business Online with <strong>WebEscalation</strong>
              </p>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out px-4 sm:px-2 lg:px-0">
                From website development to mobile apps, and from UI/UX design
                to professional email solutions, we craft high-performing
                digital experiences that elevate your brand, engage users, and
                drive real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center transition-all duration-1000 ease-out px-4 sm:px-0">
              <Link
                to="/about"
                className="w-full sm:w-auto bg-cyan-500 text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-200"
              >
                Learn More About Us
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
