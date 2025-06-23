import React from "react";
import {
  Users,
  Code,
  BarChart3,
  Award,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built from scratch to meet your unique business needs and requirements",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Web Applications",
      description:
        "Responsive, scalable web applications that drive business growth and user engagement",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates engaging and intuitive digital experiences",
    },
  ];

  return (
    <>
      {/* Section 2: What We Do */}
      <section className="h-screen bg-gradient-to-br from-white to-slate-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              What We Do <span className="text-cyan-600">Best</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating comprehensive digital solutions that
              transform businesses and deliver exceptional user experiences
              across all platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium group-hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
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
