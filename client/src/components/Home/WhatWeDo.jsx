import React from "react";
import { Users, Code, BarChart3, ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built from scratch to meet your unique business needs and requirements",
    },
    {
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Web Applications",
      description:
        "Responsive, scalable web applications that drive business growth and user engagement",
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates engaging and intuitive digital experiences",
    },
  ];

  return (
    <>
      {/* Section 2: What We Do */}
      <section className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-medium mb-3 sm:mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6">
              What We Do <span className="text-cyan-500">Best</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              We specialize in creating comprehensive digital solutions that
              transform businesses and deliver exceptional user experiences
              across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="text-cyan-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-700 font-medium group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300 text-sm sm:text-base">
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;