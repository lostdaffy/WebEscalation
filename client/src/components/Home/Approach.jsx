import React from "react";

const Approach = () => {
  return (
    <>
      {/* Section 3: Our Approach */}
      <section className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center py-12 sm:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-medium">
                OUR APPROACH
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Your Technology Partner for{" "}
                <span className="text-cyan-600">Growth</span>
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
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base">
                View Our Process 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative order-1 lg:order-2">
              <div className="">
                <div className="text-center">
                  <img 
                    src="/images/2149311904.jpg" 
                    className="w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 border-slate-500" 
                    alt="" 
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="16,18 22,12 16,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></polyline>
                  <polyline points="8,6 2,12 8,18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></polyline>
                </svg>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -left-2 sm:-left-3 lg:-left-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;