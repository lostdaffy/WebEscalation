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

const CoreValues = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description:
        "Cutting-edge solutions using the latest technologies and industry best practices",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description:
        "Delivering excellence in every project we undertake with rigorous testing",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity",
      description:
        "Thinking outside the box to solve complex challenges with innovative approaches",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Reliability",
      description:
        "Consistent delivery on time and within budget, building long-term partnerships",
    },
  ];

  return (
    <div>
      <section className="h-3/6 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-10 w-full text-white">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-slate-300 font-medium mb-4">
              WHAT DRIVES US
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and define who we are
              as a team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-15 h-15 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">
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
