import React, { useState, useEffect } from "react";
import { Code } from "lucide-react";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const element = document.getElementById("mission-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div>
      <section
        id="mission-section"
        className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-0"
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`w-full lg:basis-3/5 order-2 lg:order-1 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 pb-3 sm:pb-4 md:pb-5 leading-tight">
                Transforming ideas into digital impact
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                At WebEscalation, we're a team of expert developers, designers,
                and strategists transforming ideas into impactful digital
                solutions. We bridge the gap between innovation and business
                growth through smart technology.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 sm:p-6 md:p-6 rounded-xl sm:rounded-2xl mt-4 sm:mt-5 border-b-2 border-t-2 border-cyan-500">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 font-semibold">
                  WebEscalation Mission
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                  Empowering businesses with innovative digital solutions that
                  drive growth, boost efficiency, and deliver exceptional user
                  experiences.
                </p>
              </div>
            </div>

            {/* Right Content - Image with Modern Design */}
            <div
              className={`w-full lg:basis-2/5 order-1 lg:order-2 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-md mx-auto lg:max-w-none">
                <img
                  src="/images/2150169847.webp"
                  alt="User Experience Interface Design - Software Development"
                  className="w-full h-auto rounded-2xl sm:rounded-2xl lg:rounded-2xl shadow-lg object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                {/* Floating Info Card */}
                <div
                  className={`absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-2 sm:left-3 md:left-4 lg:left-6 right-2 sm:right-3 md:right-4 lg:right-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-xl transition-all duration-700 delay-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                        UI/UX Excellence
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                        Crafting intuitive digital experiences
                      </p>
                    </div>
                    <div className="bg-cyan-500 rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 flex-shrink-0 ml-2">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
