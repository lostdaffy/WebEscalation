import React from "react";
import { ArrowRight } from "lucide-react";

export default function WebsiteDevelopmentServices() {
  return (
    <div className="min-h-screen py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex px-8 gap-8">
          {/* Left Column - Content */}
          <div className="flex-1 max-w-md">
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl font-light leading-tight mb-6">
                WEBSITE
                <br />
                DEVELOPMENT
                <br />
                SERVICES
              </h1>
              <div className="w-32 h-0.5 bg-cyan-500 mb-8"></div>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                Transform your digital presence with our professional website
                development services. We create modern, responsive, and
                user-friendly websites tailored to your business needs.
              </p>
            </div>

            {/* Bottom Card */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-2xl">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Ready to build your dream website? Let's discuss your project
                  requirements!
                </p>
                <div className="w-full h-32 rounded-lg overflow-hidden relative">
                  <img
                    src="/images/167070.webp"
                    alt="Website development"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-xl hover:shadow-2xl transition-shadow">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Main Image */}
          <div className="flex-1 max-w-lg">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="/images/5589103.jpg"
                alt="Modern web development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-80">
            {/* Services Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">
                Our Development Services
              </h3>

              <div className="space-y-3">
                {/* Website Development */}
                <div className="shadow-sm rounded-xl p-4 text-cyan-500 bg-gray-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-medium mb-1">Website Development</h4>
                  </div>
                  <div className="absolute -right-8 -top-4 w-24 h-24 opacity-100">
                    <img
                      src="/images/19428.webp"
                      alt="E-commerce"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Business Websites */}
                <div className="shadow-sm rounded-xl p-4 text-cyan-500 bg-gray-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-medium mb-1">Web Design</h4>
                  </div>
                  <div className="absolute -right-8 -top-4 w-24 h-24 opacity-100">
                    <img
                      src="/images/44658.webp"
                      alt="Business website"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* UI/UX Design */}
                <div className="shadow-sm rounded-xl p-4 text-cyan-500 bg-gray-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-medium mb-1">UI/UX Design</h4>
                  </div>
                  <div className="absolute -right-8 -top-4 w-24 h-24 opacity-100">
                    <img
                      src="/images/119354.webp"
                      alt="Web application"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Web Hosting */}
                <div className="shadow-sm rounded-xl p-4 text-cyan-500 bg-gray-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-medium mb-1">Web Hosting</h4>
                  </div>
                  <div className="absolute -right-8 -top-4 w-24 h-24 opacity-100">
                    <img
                      src="/images/123730.webp"
                      alt="Web application"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Stats */}
            <div className="relative">
              <div className="w-48 h-48 mx-auto relative">
                {/* Circular Progress Background */}
                <div className="w-full h-full rounded-full border-8 border-gray-200"></div>
                {/* Main Image in Center */}
                <div className="absolute inset-6 rounded-full overflow-hidden">
                  <img
                    src="/images/6546515.jpg"
                    alt="Development process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
