import React from "react";

const Approach = () => {
  return (
    <>
      {/* Section 3: Our Approach */}
      <section className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center py-12 sm:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-6 order-2 lg:order-1">
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-medium">
                OUR APPROACH
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Your Technology Partner for{" "}
                <span className="text-cyan-500">Growth</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We understand that every business is unique, which is why we
                take a personalized approach to every project. Our team combines
                technical expertise with creative problem-solving to deliver
                solutions that not only meet your current needs but also scale
                with your future growth.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From startups looking to establish their digital presence to
                established enterprises seeking to modernize their systems,
                we've successfully partnered with businesses across various
                industries to achieve their technology goals.
              </p>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative order-1 lg:order-2">
              <div className="">
                <div className="text-center">
                  <img
                    src="/images/2149311904.webp"
                    className="w-full rounded-2xl sm:rounded-2xl lg:rounded-2xl"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;
