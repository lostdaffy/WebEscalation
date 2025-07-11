import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    { title: "Website Development", image: "/images/19428.webp", delay: "0s" },
    { title: "Web Design", image: "/images/44658.webp", delay: "0.1s" },
    { title: "UI/UX Design", image: "/images/119354.webp", delay: "0.2s" },
    { title: "Web Hosting", image: "/images/123730.webp", delay: "0.3s" },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Content */}
          <div className="w-full lg:flex-1 lg:max-w-md order-2 lg:order-1">
            {/* Main Title */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4 lg:mb-6 transform transition-all duration-1000">
                <span className="inline-block transition-all duration-700">
                  WEBSITE
                </span>
                <br />
                <span className="inline-block transition-all duration-700">
                  DEVELOPMENT
                </span>
                <br />
                <span className="inline-block transition-all duration-700">
                  SERVICES
                </span>
              </h1>

              <div className="h-0.5 bg-cyan-500  mb-6 lg:mb-8 transform transition-all duration-1000 "></div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 transform transition-all duration-1000">
                Transform your digital presence with our professional website
                development services. We create modern, responsive, and
                user-friendly websites tailored to your business needs.
              </p>
            </div>

            {/* Bottom Card */}
            <div className="relative transform transition-all duration-1000">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Ready to build your dream website? Let's discuss your project
                  requirements!
                </p>
                <div className="w-full h-24 sm:h-32 rounded-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/167070.webp"
                    alt="Website development"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-cyan-50 group-hover:animate-bounce">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Main Image */}
          <div className="w-full lg:flex-1 lg:max-w-lg order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 lg:h-[600px] rounded-2xl overflow-hidden transform transition-all duration-1500 ">
              <img
                src="/images/5589103.jpg"
                alt="Modern web development"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-80 order-3 lg:order-3">
            {/* Services Section */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl font-medium mb-4 transform transition-all duration-1000">
                Our Development Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="shadow-lg rounded-xl p-3 sm:p-4 text-gray-500 bg-gray-50 relative overflow-hidden transform transition-all duration-1000"
                  >
                    <div className="relative z-10">
                      <h4 className="font-medium mb-1 text-sm sm:text-base transition-all duration-300">
                        {service.title}
                      </h4>
                    </div>
                    <div className="absolute -right-6 sm:-right-8 -top-3 sm:-top-4 w-16 h-16 sm:w-24 sm:h-24 transition-all duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:rotate-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular Stats */}
            <div className="relative transform transition-all duration-1500">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto relative group cursor-pointer">
                {/* Circular Progress Background with pulse */}
                <div className="w-full h-full rounded-full border-4 sm:border-6 lg:border-8 border-gray-200 group-hover:border-cyan-200 transition-colors duration-500 group-hover:animate-pulse"></div>

                {/* Animated border */}
                <div className="absolute inset-0 w-full h-full rounded-full border-4 sm:border-6 lg:border-8 border-transparent bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-spin-slow"></div>

                {/* Main Image in Center */}
                <div className="absolute inset-3 sm:inset-4 lg:inset-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <img
                    src="/images/6546515.jpg"
                    alt="Development process"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
