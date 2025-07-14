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
    <section className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <div className="mb-10">
          <div className="border-b-2 border-cyan-500 inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-cyan-600 font-semibold pb-2 leading-tight">
              How WebEscalation Works to <br className="hidden sm:block" />
              Boost Your Online Presence
            </h2>
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 min-h-[260px] flex flex-col space-y-4 shadow-md hover:shadow-lg border border-cyan-200 transition-all duration-300"
            >
              <h2 className="text-sm font-semibold text-cyan-500">
                {step.number}
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-cyan-500 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-white">
          <p className="text-sm sm:text-base text-center sm:text-left leading-relaxed">
            Let's take your business to the next level — start your digital
            journey with WebEscalation today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
