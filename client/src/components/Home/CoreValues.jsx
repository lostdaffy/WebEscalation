import React from "react";
import { Award, Target, Lightbulb, CheckCircle } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      title: "Innovation",
      description:
        "Cutting-edge solutions using the latest technologies and industry best practices",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      title: "Quality",
      description:
        "Delivering excellence in every project we undertake with rigorous testing",
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      title: "Creativity",
      description:
        "Thinking outside the box to solve complex challenges with innovative approaches",
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      title: "Reliability",
      description:
        "Consistent delivery on time and within budget, building long-term partnerships",
    },
  ];

  return (
    <div>
      <section className="min-h-screen sm:min-h-[75vh] lg:min-h-[60vh] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full text-white">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-medium mb-3 sm:mb-4">
              WHAT DRIVES US
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Our Core <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
              The principles that guide everything we do and define who we are
              as a team
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base px-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValues;