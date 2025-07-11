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
    <>
      <section>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
            {/* heading */}
            <div>
              <div className="border-b-2 border-cyan-500">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-cyan-600 pb-3 leading-tight">
                  How WebEscalation Works to <br className="hidden sm:block" />{" "}
                  Boost Your Online Presence
                </h2>
              </div>
            </div>

            {/* cards */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl w-full py-8 sm:py-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] shadow-lg flex flex-col space-y-4 sm:space-y-5 border-1 border-cyan-500 transition-all duration-700"
                  >
                    <h2 className="text-sm font-semibold text-cyan-500">
                      {step.number}
                    </h2>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-700">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* footer text */}
            <div
              data-index="5"
              className="py-4 sm:py-5 bg-cyan-500 rounded-2xl text-white p-4 sm:p-5 flex justify-center sm:justify-between transition-all duration-800"
            >
              <p className="text-sm sm:text-base text-center sm:text-left leading-relaxed">
                Let's take your business to the next level — start your digital
                journey with WebEscalation today!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
