import React from "react";
import { Users, Code, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center py-12 sm:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-medium">
                ABOUT OUR COMPANY
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                We Build Digital Solutions That{" "}
                <span className="text-cyan-500">Make a Difference</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between innovative
                technology and business success, we are a passionate team of
                developers, designers, and strategists committed to transforming
                your ideas into powerful digital solutions.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 sm:p-8 rounded-2xl border border-cyan-100">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  To empower businesses through innovative technology solutions
                  that drive growth, enhance efficiency, and create exceptional
                  user experiences.
                </p>
              </div>
            </div>

            {/* Right Content - Image with Modern Design */}
            <div className="relative order-1 lg:order-2">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img
                  src="/images/2150169847.webp"
                  alt="User Experience Interface Design - Software Development"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                {/* Fallback Visual (hidden by default) */}
                <div
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] bg-gradient-to-br from-slate-800 via-gray-900 to-black flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center text-white p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                      <div className="bg-cyan-500 bg-opacity-20 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 backdrop-blur-sm">
                        <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-cyan-400 mx-auto mb-1 sm:mb-2" />
                        <div className="w-full h-1.5 sm:h-2 bg-cyan-400 rounded opacity-60"></div>
                      </div>
                      <div className="bg-blue-500 bg-opacity-20 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 backdrop-blur-sm">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-400 mx-auto mb-1 sm:mb-2" />
                        <div className="w-full h-1.5 sm:h-2 bg-blue-400 rounded opacity-60"></div>
                      </div>
                      <div className="bg-purple-500 bg-opacity-20 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 backdrop-blur-sm">
                        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-400 mx-auto mb-1 sm:mb-2" />
                        <div className="w-full h-1.5 sm:h-2 bg-purple-400 rounded opacity-60"></div>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">
                      Digital Innovation
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90">
                      Creating seamless user experiences
                    </p>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-30"></div>

                {/* Floating Info Card */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-800 mb-0.5 sm:mb-1">
                        UI/UX Excellence
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Crafting intuitive digital experiences
                      </p>
                    </div>
                    <div className="bg-cyan-500 rounded-full p-2 sm:p-2.5 lg:p-3 flex-shrink-0">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
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

export default About;
