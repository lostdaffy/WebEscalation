import React from "react";
import {
  Building2,
  Zap,
  Rocket,
  Heart,
  Globe,
  Code,
  Smartphone,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Database,
  Cloud,
  Briefcase,
  Stethoscope,
  Factory,
  Store,
} from "lucide-react";
// import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      id: 1,
      title: "On Demand",
      subtitle: "Instant Service Solutions",
      description:
        "Build platforms that connect service providers with customers instantly, creating seamless on-demand experiences.",
      icon: <Zap className="w-10 h-10" />,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-600",
      features: [
        "Real-time booking systems",
        "GPS tracking & location services",
        "Payment gateway integration",
        "Rating & review systems",
        "Push notifications",
        "Multi-vendor platforms",
      ],
      solutions: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Mobile Apps",
          desc: "iOS & Android apps for service providers and customers",
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Web Platforms",
          desc: "Admin dashboards and customer portals",
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Backend Systems",
          desc: "Scalable infrastructure for high-volume transactions",
        },
      ],
      stats: {
        projects: "50+",
        industries: "Food, Transport, Beauty, Home Services",
        timeToMarket: "3-6 months",
      },
    },
    {
      id: 2,
      title: "Enterprises",
      subtitle: "Corporate Digital Transformation",
      description:
        "Empower large organizations with robust digital solutions that enhance productivity, streamline operations, and drive growth.",
      icon: <Building2 className="w-10 h-10" />,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-600",
      features: [
        "Enterprise resource planning (ERP)",
        "Customer relationship management (CRM)",
        "Business intelligence dashboards",
        "Document management systems",
        "Workflow automation",
        "Integration with existing systems",
      ],
      solutions: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security Solutions",
          desc: "Enterprise-grade security and compliance",
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Cloud Migration",
          desc: "Seamless transition to cloud infrastructure",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Analytics Platform",
          desc: "Data-driven insights and reporting tools",
        },
      ],
      stats: {
        projects: "30+",
        industries: "Manufacturing, Finance, Retail, Logistics",
        timeToMarket: "6-12 months",
      },
    },
    {
      id: 3,
      title: "Startups",
      subtitle: "Launch & Scale Fast",
      description:
        "Help startups build their MVP, validate ideas, and scale rapidly with cost-effective, agile development solutions.",
      icon: <Rocket className="w-10 h-10" />,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-600",
      features: [
        "MVP development",
        "Rapid prototyping",
        "Scalable architecture",
        "Cost-effective solutions",
        "Agile development process",
        "Growth-focused features",
      ],
      solutions: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "MVP Solutions",
          desc: "Quick market validation with minimal features",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Full-Stack Development",
          desc: "Complete web and mobile application development",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "User Analytics",
          desc: "Track user behavior and optimize conversion",
        },
      ],
      stats: {
        projects: "100+",
        industries: "Fintech, EdTech, E-commerce, SaaS",
        timeToMarket: "1-3 months",
      },
    },
    {
      id: 4,
      title: "Healthcare",
      subtitle: "Digital Health Solutions",
      description:
        "Transform healthcare delivery with secure, compliant, and user-friendly digital solutions that improve patient outcomes.",
      icon: <Heart className="w-10 h-10" />,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-600",
      features: [
        "HIPAA compliance",
        "Electronic health records (EHR)",
        "Telemedicine platforms",
        "Patient management systems",
        "Medical billing software",
        "Health monitoring apps",
      ],
      solutions: [
        {
          icon: <Stethoscope className="w-6 h-6" />,
          title: "Telemedicine",
          desc: "Remote consultation and diagnosis platforms",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Secure Systems",
          desc: "HIPAA-compliant data management",
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Appointment Systems",
          desc: "Online booking and scheduling solutions",
        },
      ],
      stats: {
        projects: "25+",
        industries: "Hospitals, Clinics, Medical Practices",
        timeToMarket: "4-8 months",
      },
    },
  ];

  const allServices = [
    "Custom Software Development",
    "Mobile App Development",
    "Web Application Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Database Management",
    "API Development",
    "System Integration",
    "Quality Assurance",
    "Maintenance & Support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
              INDUSTRY EXPERTISE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Industries We <span className="text-cyan-500">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized digital solutions tailored to meet the unique challenges 
              and opportunities of your industry sector
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-100 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-100 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-50 rounded-full animate-pulse delay-500" />
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`group relative ${
                index % 2 === 0 ? "" : "flex flex-col lg:flex-row-reverse"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Industry Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${industry.color} text-white shadow-lg`}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        {industry.title}
                      </h2>
                      <p className={`text-lg font-medium ${industry.textColor}`}>
                        {industry.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">
                      Key Features & Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className={`w-5 h-5 ${industry.textColor}`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800">
                        {industry.stats.projects}
                      </div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800">
                        {industry.stats.timeToMarket}
                      </div>
                      <div className="text-sm text-gray-600">Time to Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-600 leading-tight">
                        {industry.stats.industries}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Cards */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-slate-800">
                    Our Solutions
                  </h4>
                  <div className="space-y-4">
                    {industry.solutions.map((solution, idx) => (
                      <div
                        key={idx}
                        className={`p-6 ${industry.bgColor} border-2 ${industry.borderColor} rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105`}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-r ${industry.color} text-white`}
                          >
                            {solution.icon}
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-slate-800 mb-2">
                              {solution.title}
                            </h5>
                            <p className="text-gray-600">{solution.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${industry.color} text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Services Section */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Complete Digital Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services across all industries to meet your digital transformation needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-slate-700 font-medium text-sm">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific expertise can help you achieve 
              your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-500 rounded-full font-semibold hover:bg-cyan-50 transition-colors transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-500 transition-all transform hover:scale-105">
                View All Services
              </button>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Industries;