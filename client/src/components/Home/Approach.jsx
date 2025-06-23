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

const Approach = () => {
  return (
    <>
      {/* Section 3: Our Approach */}
      <section className="h-screen bg-gradient-to-br from-slate-100 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                OUR APPROACH
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Your Technology Partner for{" "}
                <span className="text-cyan-600">Growth</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that every business is unique, which is why we
                take a personalized approach to every project. Our team combines
                technical expertise with creative problem-solving to deliver
                solutions that not only meet your current needs but also scale
                with your future growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups looking to establish their digital presence to
                established enterprises seeking to modernize their systems,
                we've successfully partnered with businesses across various
                industries to achieve their technology goals.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 flex items-center gap-2">
                View Our Process <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              <div className="">
                <div className="text-center">
                  <img src="/images/2149311904.jpg" className="w-full rounded-4xl border-2 border-slate-500" alt="" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <Code className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;
