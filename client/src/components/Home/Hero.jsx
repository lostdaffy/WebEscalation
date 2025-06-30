import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Website Development",
      subtitle: "& Design",
    },
    {
      id: 2,
      title: "Software Development",
      subtitle: "& Mobile Apps",
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "& Social Media",
    },
    {
      id: 4,
      title: "Business Branding",
      subtitle: "& Design Services",
    },
  ];

  const handleCardClick = (service) => {
    console.log(`Clicked on: ${service.title} ${service.subtitle}`);
    // Navigate to service page in real application
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-25 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light text-gray-700 leading-tight">
                Complete{" "}
                <span className="underline decoration-cyan-500 decoration-2 underline-offset-4">
                  digital solutions
                </span>{" "}
                +<br />
                innovative design
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                WebEscalation delivers comprehensive digital services from
                website development to mobile applications, helping businesses
                establish a strong online presence with cutting-edge technology
                and creative design solutions.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`
                    group border border-gray-200 rounded-lg p-6 cursor-pointer
                    transition-all duration-300 ease-in-out
                    bg-gradient-to-br from-white to-gray-50
                    hover:shadow-xl hover:-translate-y-1
                    ${
                      hoveredCard === service.id
                        ? "shadow-xl -translate-y-1"
                        : "shadow-sm"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-cyan-500 mb-1">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-gray-600 text-sm">
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="text-cyan-500 group-hover:translate-x-1 transition-transform duration-200">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="= overflow-hidden">
              {/* Hero Image Area */}
              <div className="">
                <img
                  src="/images/9876473.webp"
                  alt="WebEscalation Digital Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
