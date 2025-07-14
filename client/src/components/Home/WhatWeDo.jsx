import React from "react";
import { ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    { title: "Website Development", image: "/images/19428.webp" },
    { title: "Web Design", image: "/images/44658.webp" },
    { title: "UI/UX Design", image: "/images/119354.webp" },
    { title: "Web Hosting", image: "/images/123730.webp" },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full lg:basis-1/3 order-2 lg:order-1">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4">
                <span className="block">WEBSITE</span>
                <span className="block">DEVELOPMENT</span>
                <span className="block">SERVICES</span>
              </h1>
              <div className="h-1 bg-cyan-500 mb-6" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Transform your digital presence with our professional website
                development services. We create modern, responsive, and
                user-friendly websites tailored to your business needs.
              </p>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <p className="text-sm sm:text-base text-gray-700 mb-4 group-hover:text-gray-900 transition-colors">
                Ready to build your dream website? Let's discuss your project
                requirements!
              </p>
              <div className="w-full h-28 sm:h-36 rounded-lg overflow-hidden relative">
                <img
                  src="/images/167070.webp"
                  alt="Website development"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow hover:shadow-md transition hover:scale-110 hover:bg-cyan-50">
                  <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:text-cyan-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="w-full lg:basis-1/3 order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 lg:h-[600px] rounded-2xl overflow-hidden">
              <img
                src="/images/5589103.jpg"
                alt="Modern web development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:basis-1/3 order-3">
           {/* Services List */}
<div className="mb-8">
  <h3 className="text-lg sm:text-xl font-semibold mb-4">
    Our Development Services
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
    {services.map((service) => (
      <div
        key={service.title}
        className="relative flex items-center gap-4 bg-zinc-100 rounded-xl p-4 shadow hover:shadow-md transition"
      >
        {/* Service Image */}
        <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Service Title */}
        <h4 className="text-sm sm:text-base font-medium text-gray-800">
          {service.title}
        </h4>
      </div>
    ))}
  </div>
</div>


            {/* Circular Image */}
            <div className="w-32 sm:w-40 lg:w-48 mx-auto relative group cursor-pointer">
              <div className="w-full h-full rounded-full border-4 sm:border-6 border-gray-200 group-hover:border-cyan-200 transition-all" />
              <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-20 transition duration-500 animate-spin-slow" />
              <div className="absolute inset-3 sm:inset-4 lg:inset-5 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
                <img
                  src="/images/6546515.jpg"
                  alt="Development process"
                  className="w-full h-full object-cover group-hover:rotate-6"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
