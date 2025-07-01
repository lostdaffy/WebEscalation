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
      <div className="max-w-6xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center min-h-screen">
          {/* Main Content Section */}
          <div className="space-y-12 max-w-4xl">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
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
                <br />
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
                className={`text-gray-600 text-base leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-out ${
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
                className={`text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto transition-all duration-1200 ease-out ${
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
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "1.2s" }}
            >
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full font-medium hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                Learn More About Us
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 hover:scale-105">
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
