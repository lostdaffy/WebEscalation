import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-10 space-y-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Heading */}
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-800 leading-tight tracking-tight">
              Custom Scalable Web
              {/* <br className="hidden sm:block" /> */}
              <span className="text-cyan-600"> Solutions Growth</span>
            </h1>
          </div>

          {/* Description Box */}
          <div className="md:w-1/3 bg-white border border-gray-200 p-5 sm:p-6 rounded-2xl shadow-sm space-y-4">
            <img
              src="/images/35678.jpg" // Replace with your actual image path
              alt="Web Design Illustration"
              className="w-full h-auto rounded-xl object-cover"
            />
            <p className="text-base sm:text-base leading-7 text-gray-700">
              We build modern websites, powerful web apps, and
              conversion-focused digital experiences.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden bg-cyan-50 py-3">
          <div className="flex animate-marquee whitespace-nowrap text-cyan-700 text-sm font-medium">
            <span className="mx-5">
              WebEscalation – Custom Web Development Services | SEO-Optimized
              Websites for Higher Google Rankings | Fast, Secure & Scalable Web
              Applications | UI/UX Focused Web Design that Converts | Digital
              Growth Solutions for Modern Businesses
            </span>
            <span className="mx-5" aria-hidden="true">
              WebEscalation – Custom Web Development Services | SEO-Optimized
              Websites for Higher Google Rankings | Fast, Secure & Scalable Web
              Applications | UI/UX Focused Web Design that Converts | Digital
              Growth Solutions for Modern Businesses
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          {/* Services */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-1/5">
            {[
              { title: "Online Visibility", desc: "Rank higher. Reach more." },
              { title: "Better Engagement", desc: "Captivate. Convert. Grow." },
              {
                title: "Scalable Growth",
                desc: "Built to expand effortlessly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-50 px-4 py-5 rounded-xl shadow-sm"
              >
                <h3 className="text-base font-semibold text-cyan-500 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-4/5">
            <img
              src="/images/43976.jpg"
              alt="WebEscalation Background"
              className="w-full h-auto object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 32s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
