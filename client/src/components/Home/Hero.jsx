import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(rgb(255 255 255 / 45%), rgb(255 255 255 / 0%)), url(${"/images/5599220.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center min-h-screen py-8 sm:py-12 lg:py-16">
          {/* Main Content Section */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-5xl w-full">
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                <span
                  className={`inline-block transition-all duration-1000 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  Complete{" "}
                </span>
                <span
                  className={`text-cyan-500 font-medium inline-block transition-all duration-1000 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    animationDelay: "0.4s",
                    transform: isLoaded
                      ? "translateY(0) scale(1)"
                      : "translateY(2rem) scale(0.95)",
                  }}
                >
                  Digital Solutions
                </span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span
                  className={`inline-block transition-all duration-1000 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "0.6s" }}
                >
                  with Innovative Design
                </span>
              </h1>

              <p
                className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-out px-2 sm:px-0 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ animationDelay: "0.8s" }}
              >
                Grow Your Business Online with <strong>WebEscalation</strong>
              </p>

              {/* Description */}
              <p
                className={`text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-4xl mx-auto transition-all duration-1200 ease-out px-4 sm:px-2 lg:px-0 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ animationDelay: "1s" }}
              >
                From website development to mobile apps, and from UI/UX design
                to professional email solutions, we craft high-performing
                digital experiences that elevate your brand, engage users, and
                drive real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center transition-all duration-1000 ease-out px-4 sm:px-0 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "1.2s" }}
            >
              <button className="w-full sm:w-auto bg-cyan-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base rounded-full font-medium hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-200">
                Learn More About Us
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base rounded-full font-medium hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;