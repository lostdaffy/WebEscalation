import React, { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  return (
    <>
      <section className="min-h-screen  flex items-center py-20 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            {/* Image Section - Shows first on mobile, second on desktop */}
            <div className="w-full lg:basis-2/5 order-1 lg:order-2">
              <div className="transition-all duration-1000 ">
                <div className="text-center">
                  <img
                    src="/images/2149311904.webp"
                    className="w-full max-w-md mx-auto lg:max-w-none rounded-2xl sm:rounded-2xl lg:rounded-2xl shadow-lg"
                    alt="WebEscalation - Professional Web Development Services"
                  />
                </div>
              </div>
            </div>

            {/* Content Section - Shows second on mobile, first on desktop */}
            <div className="w-full lg:basis-3/5 order-1 lg:order-2">
              <div className="transition-all duration-1000 delay-300">
                <h3 className="text-gray-700 text-2xl sm:text-3xl lg:text-4xl pb-5 text-center lg:text-left">
                  Why Choose{" "}
                  <span className="border-cyan-500 text-gray-700 border-b-2">
                    WebEscalation
                  </span>
                  ?
                </h3>
                <div className="mb-6">
                  <p className="text-sm sm:text-base text-gray-700 text-center lg:text-left leading-relaxed">
                    At WebEscalation, we craft smart, high-performing websites
                    that boost your online visibility and fuel business growth.
                    Using cutting-edge technology and strategic planning, we
                    deliver digital experiences that get real results.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border-l-4 border-cyan-500 transition-all duration-1000 delay-500">
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                    Full-Stack Development
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From responsive front-end designs to robust back-end
                    systems, we deliver complete web solutions.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border-l-4 border-cyan-500 transition-all duration-1000 delay-700">
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                    Performance-Driven Design
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every website we create is optimized for speed, SEO, and
                    user experience.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border-l-4 border-cyan-500 transition-all duration-1000 delay-900">
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                    Industry Expertise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With years of experience across various sectors, we
                    understand what works in your market.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border-l-4 border-cyan-500 transition-all duration-1000 delay-1100">
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our partnership doesn't end at launch—we provide continuous
                    support to keep your site running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
