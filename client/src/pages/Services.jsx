import React, { useState, useEffect } from "react";
import {
  Globe,
  Mail,
  Palette,
  Share2,
  Code,
  Smartphone,
  Server,
  Brush,
  FileText,
  Megaphone,
  ArrowRight,
  Play,
} from "lucide-react";
import ContactForm from "../components/Home/ContactForm";
import PageBanner from "../components/Global/PageBanner";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Solutions",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-cyan-500 to-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-500",
      subServices: [
        {
          id: 1.1,
          title: "Website Development",
          icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 1.2,
          title: "Website Design",
          icon: <Brush className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 1.3,
          title: "Software Development",
          icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 1.4,
          title: "Mobile Application Development",
          icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 1.5,
          title: "Domain Registration",
          icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 1.6,
          title: "Web Hosting",
          icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
      ],
    },
    {
      id: 2,
      title: "Branding & Marketing Design",
      description:
        "Create a strong visual identity for your brand across print and digital platforms.",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-cyan-500 to-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-500",
      subServices: [
        {
          id: 2.1,
          title: "Business Card Design",
          description:
            "Elegant, modern designs that leave a lasting first impression.",
          icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 2.2,
          title: "Pamphlet Design",
          description:
            "Informative and creative pamphlets for marketing and promotions.",
          icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 2.3,
          title: "Brochure Design",
          description:
            "Professional brochures to showcase your services and products.",
          icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
        {
          id: 2.4,
          title: "Flyer Design",
          description:
            "Eye-catching flyers perfect for events, sales, and announcements.",
          icon: <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />,
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}

      <PageBanner
        heading="Services"
        subheading="Website & Graphic Design"
        description="Discover custom web, app, and digital solutions tailored to boost
              your brand's growth and online success."
      />

      {/* Web Solutions Section */}
      <section
        id="section-web"
        className="min-h-screen relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <div
              className={`lg:col-span-6 space-y-2 sm:space-y-4 transition-all duration-1000 delay-300 ${
                visibleSections["section-web"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {services[0].subServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeService === index
                      ? "bg-gray-50 border-l-4 border-cyan-500"
                      : "hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center p-3 sm:p-4 space-x-3 sm:space-x-6">
                    <div className="text-sm sm:text-base font-bold text-gray-400 group-hover:text-cyan-500 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="text-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-cyan-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Image */}
            <div
              className={`lg:col-span-6 transition-all duration-1000 delay-500 ${
                visibleSections["section-web"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="w-full">
                <img
                  src="/images/9876473.webp"
                  className="w-full rounded-2xl shadow-lg"
                  alt="Web Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Services Section */}
      <section
        id="section-email"
        className="min-h-screen relative overflow-hidden bg-gray-100"
      >
        <div className="grid lg:grid-cols-12 gap-0 w-full min-h-screen">
          {/* Left Background Image */}
          <div
            className={`lg:col-span-6 min-h-64 lg:min-h-screen transition-all duration-1000 ${
              visibleSections["section-email"]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              background: `linear-gradient(rgb(0 0 0 / 71%), rgb(0 0 0 / 71%)), url(${"/images/123795.webp"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-screen py-12 sm:py-16">
            <div
              className={`max-w-lg w-full px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
                visibleSections["section-email"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Main Service Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 mb-4">
                  Email Services
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Professional email solutions to improve brand credibility and
                  communication.
                </p>
              </div>

              {/* Sub-services */}
              <div className="space-y-4 sm:space-y-6">
                {/* Sub-service 1 */}
                <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                        Professional Email Setup
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Branded email addresses (e.g., info@yourcompany.com)
                        with secure hosting and advanced features.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-service 2 */}
                <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        Email Designing
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Attractive, mobile-responsive email templates for
                        newsletters, promotions, and campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section
        id="section-branding"
        className="min-h-screen relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Side - Service List */}
            <div
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
                visibleSections["section-branding"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                  Brand
                  <span className="text-cyan-500"> Identity</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Create powerful visual identities that resonate with your
                  audience and drive business growth.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {services[1].subServices.map((service, index) => (
                  <div
                    key={service.id}
                    className={`group flex items-start space-x-3 sm:space-x-4 hover:translate-x-4 transition-all duration-300 ${
                      visibleSections["section-branding"]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      transitionDelay: `${(index + 1) * 200}ms`,
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="text-cyan-500">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-cyan-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Large Visual Element */}
            <div
              className={`relative transition-all duration-1000 delay-500 ${
                visibleSections["section-branding"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="w-full">
                <img
                  src="/images/10286.webp"
                  className="w-full rounded-2xl shadow-lg"
                  alt="Brand Identity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section
        id="section-social"
        className="min-h-screen relative overflow-hidden bg-gray-100"
      >
        <div className="grid lg:grid-cols-12 gap-0 w-full min-h-screen">
          {/* Left Background Image */}
          <div
            className={`lg:col-span-6 min-h-64 lg:min-h-screen transition-all duration-1000 ${
              visibleSections["section-social"]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              background: `linear-gradient(rgb(0 0 0 / 71%), rgb(0 0 0 / 71%)), url(${"/images/550233.webp"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-screen py-12 sm:py-16">
            <div
              className={`max-w-lg w-full px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
                visibleSections["section-social"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Main Service Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 mb-4">
                  Social Media Graphics
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Engaging visual content that captures attention and drives
                  engagement across all social platforms.
                </p>
              </div>

              {/* Sub-services */}
              <div className="space-y-4 sm:space-y-6">
                {/* Sub-service 1 */}
                <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                        Social Media Post Design
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Custom visuals that align with your brand and attract
                        audience attention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-service 2 */}
                <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        Social Media Ads Design
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        High-performing ad creatives designed for better
                        click-through rates and conversions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <ContactForm />
    </>
  );
};

export default Services;
