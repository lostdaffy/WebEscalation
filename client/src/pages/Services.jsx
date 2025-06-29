import React from "react";
import {
  Globe,
  Mail,
  Palette,
  Share2,
  Code,
  Smartphone,
  Server,
  Shield,
  Brush,
  FileText,
  Megaphone,
  Users,
} from "lucide-react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Solutions",
      description:
        "Comprehensive digital solutions to build your online presence.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-500",
      subServices: [
        {
          id: 1.1,
          title: "Website Development",
          description:
            "Custom-coded, responsive websites tailored to your business needs.",
          icon: <Code className="w-6 h-6" />,
        },
        {
          id: 1.2,
          title: "Website Design",
          description:
            "Visually appealing and user-friendly designs focused on user experience (UI/UX).",
          icon: <Brush className="w-6 h-6" />,
        },
        {
          id: 1.3,
          title: "Software Development",
          description:
            "Robust software solutions to streamline operations and enhance productivity.",
          icon: <Code className="w-6 h-6" />,
        },
        {
          id: 1.4,
          title: "Mobile Application Development",
          description:
            "Android & iOS apps built for performance and user engagement.",
          icon: <Smartphone className="w-6 h-6" />,
        },
        {
          id: 1.5,
          title: "Domain Registration",
          description:
            "Secure and manage your online identity with the right domain name.",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          id: 1.6,
          title: "Web Hosting",
          description:
            "Reliable and secure hosting services to keep your website live and fast.",
          icon: <Server className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 2,
      title: "Email Services",
      description:
        "Professional email solutions to improve brand credibility and communication.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-slate-500 to-slate-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      textColor: "text-slate-600",
      subServices: [
        {
          id: 2.1,
          title: "Professional Email Setup",
          description:
            "Branded email addresses (e.g., info@yourcompany.com) with secure hosting.",
          icon: <Shield className="w-6 h-6" />,
        },
        {
          id: 2.2,
          title: "Email Designing",
          description:
            "Attractive, mobile-responsive email templates for newsletters, promotions, and campaigns.",
          icon: <Brush className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 3,
      title: "Branding & Marketing Design",
      description:
        "Create a strong visual identity for your brand across print and digital platforms.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-500",
      subServices: [
        {
          id: 3.1,
          title: "Business Card Design",
          description:
            "Elegant, modern designs that leave a lasting first impression.",
          icon: <FileText className="w-6 h-6" />,
        },
        {
          id: 3.2,
          title: "Pamphlet Design",
          description:
            "Informative and creative pamphlets for marketing and promotions.",
          icon: <FileText className="w-6 h-6" />,
        },
        {
          id: 3.3,
          title: "Brochure Design",
          description:
            "Professional brochures to showcase your services and products.",
          icon: <FileText className="w-6 h-6" />,
        },
        {
          id: 3.4,
          title: "Flyer Design",
          description:
            "Eye-catching flyers perfect for events, sales, and announcements.",
          icon: <Megaphone className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 4,
      title: "Social Media Graphics",
      description:
        "Engaging designs to boost your social media presence and conversions.",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-slate-500 to-slate-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      textColor: "text-slate-600",
      subServices: [
        {
          id: 4.1,
          title: "Social Media Post Design",
          description:
            "Custom visuals that align with your brand and attract audience attention.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          id: 4.2,
          title: "Social Media Ads Design",
          description:
            "High-performing ad creatives designed for better click-through rates and conversions.",
          icon: <Megaphone className="w-6 h-6" />,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                COMPREHENSIVE DIGITAL SOLUTIONS
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                Our <span className="text-cyan-500">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive digital solutions
                designed to elevate your online presence and drive meaningful
                growth
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-100 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-100 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-50 rounded-full animate-pulse delay-500" />
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Main Service Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl ${service.bgColor} border-2 ${service.borderColor} transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div
                          className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-lg max-w-2xl">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm font-medium">
                        {service.subServices.length} Services
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-services */}
                <div className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.subServices.map((subService, subIndex) => (
                      <div
                        key={subService.id}
                        className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg group"
                        style={{ animationDelay: `${subIndex * 50}ms` }}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white flex-shrink-0`}
                          >
                            {subService.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-cyan-500 transition-colors">
                              {subService.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {subService.description}
                            </p>
                          </div>
                        </div>

                        {/* Hover effect */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="text-cyan-500 text-sm font-medium hover:text-cyan-700 transition-colors">
                            Learn More →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your goals
                  and stand out in the digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-white text-cyan-500 rounded-full font-semibold hover:bg-cyan-50 transition-colors transform hover:scale-105 shadow-lg"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    to="/about#about"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-500 transition-all transform hover:scale-105"
                  >
                    Know More...
                  </Link>
                </div>
              </div>

              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default Services;
