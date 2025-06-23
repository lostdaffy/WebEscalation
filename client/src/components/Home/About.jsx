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

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
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
      {/* Section 1: Company Introduction */}
      <section className="h-screen bg-gradient-to-br from-slate-100 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                ABOUT OUR COMPANY
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                We Build Digital Solutions That{" "}
                <span className="text-cyan-600">Make a Difference</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between innovative
                technology and business success, we are a passionate team of
                developers, designers, and strategists committed to transforming
                your ideas into powerful digital solutions.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg">
                  To empower businesses through innovative technology solutions
                  that drive growth, enhance efficiency, and create exceptional
                  user experiences.
                </p>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-cyan-600 mb-4">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
