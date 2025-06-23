import React from "react";
import { CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <div>
      {/* Section 5: Call to Action */}
      <section className="h-3/6  flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-10 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-6">
              LET'S WORK TOGETHER
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8">
              Ready to Start Your
              <span className="text-cyan-600"> Project?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's discuss how we can help transform your ideas into innovative
              digital solutions that drive your business forward and create
              lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-3 rounded-full font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30">
                Start Your Project
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-10 py-3 rounded-full font-medium text-lg transition-all duration-200">
                Schedule Consultation
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600" />
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
