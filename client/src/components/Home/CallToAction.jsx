import React from "react";
import { CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <div>
      {/* Section 5: Call to Action */}
      <section className="min-h-screen sm:min-h-[75vh] lg:min-h-[60vh] flex items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-medium mb-4 sm:mb-6">
              LET'S WORK TOGETHER
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 sm:mb-8">
              Ready to Start Your
              <span className="text-cyan-600"> Project?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-2">
              Let's discuss how we can help transform your ideas into innovative
              digital solutions that drive your business forward and create
              lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 lg:mb-12">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 sm:px-10 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30">
                Start Your Project
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 sm:px-10 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-200">
                Schedule Consultation
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;