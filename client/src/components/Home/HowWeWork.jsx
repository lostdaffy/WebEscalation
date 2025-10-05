import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01.",
      title: "Planning",
      description:
        "We plan your website with market research, competitor analysis, and goal setting to align with your business needs.",
    },
    {
      number: "02.",
      title: "UI/UX Design",
      description:
        "We design clean, responsive, and conversion-focused interfaces for a seamless user experience across all devices.",
    },
    {
      number: "03.",
      title: "Development",
      description:
        "Using modern tech, we develop fast, secure websites tested for performance, mobile-friendliness, and SEO.",
    },
    {
      number: "04.",
      title: "Launch & Support",
      description:
        "We launch your site with ongoing updates, SEO support, and performance monitoring for long-term growth.",
    },
  ];

  return (
    <section className="bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0092b8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0092b8] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#0092b8]"></div>
            <span className="text-[#0092b8] font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <div className="w-12 h-0.5 bg-[#0092b8]"></div>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How {" "}
            <span className="text-[#0092b8] relative">
              WebEscalation
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#0092b8] opacity-20 rounded-full"></div>
            </span>
            {" "}Works
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step methodology ensures your digital success from
            concept to launch
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0092b8]/20 hover:-translate-y-2"
            >
              {/* Card Number Badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-[#0092b8] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#0092b8] font-bold text-sm opacity-70">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#0092b8]/30 to-transparent"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0092b8] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Hover Effect Decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0092b8] to-[#0092b8]/50 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Process Flow Connector */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8">
          <div className="flex items-center gap-8 text-[#0092b8]/30">
            <div className="w-8 h-px bg-current"></div>
            <div className="w-2 h-2 bg-current rounded-full"></div>
            <div className="w-16 h-px bg-current"></div>
            <div className="w-2 h-2 bg-current rounded-full"></div>
            <div className="w-16 h-px bg-current"></div>
            <div className="w-2 h-2 bg-current rounded-full"></div>
            <div className="w-8 h-px bg-current"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
