import React from "react";
import { Users, Target, Award, Lightbulb, Code, Rocket, Heart, Globe, Star, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Team Members", icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that keep you ahead of the competition."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality",
      description: "Every line of code, every design element is crafted with precision and attention to detail."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring your vision becomes reality."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth",
      description: "Our solutions are designed to scale with your business and drive sustainable growth."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "bg-gradient-to-br from-slate-500 to-slate-600"
    },
    {
      name: "Mike Rodriguez",
      role: "Design Director",
      image: "bg-gradient-to-br from-cyan-400 to-slate-500"
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      image: "bg-gradient-to-br from-slate-400 to-cyan-500"
    }
  ];

  const achievements = [
    "Award-winning design solutions",
    "ISO certified development process",
    "24/7 customer support",
    "Agile development methodology"
  ];

  return (

    <>
    <Navbar/>

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-6">
            ABOUT OUR COMPANY
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
            We Build Digital Solutions{" "}
            <span className="text-cyan-600">That Make a Difference</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Founded with a vision to bridge the gap between innovative technology and business success, 
            we are a passionate team of developers, designers, and strategists committed to transforming 
            your ideas into powerful digital solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="text-cyan-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">
              OUR JOURNEY
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Building Success Through{" "}
              <span className="text-cyan-600">Innovation</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                What started as a vision to bridge the gap between technology and business success 
                has evolved into a trusted partnership with companies worldwide. Our journey began 
                with a simple belief: great software should drive real business results.
              </p>
              <p>
                Today, we combine cutting-edge technology with deep industry expertise to deliver 
                solutions that don't just meet expectations – they exceed them. Every project we 
                undertake is an opportunity to create something remarkable.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200">
                Learn More
              </button>
              <button className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 px-8 py-4 font-medium transition-colors duration-200">
                Our Portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-8xl font-bold mb-6">
                  <span className="text-cyan-600">2019</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-4">Founded</div>
                <div className="text-gray-600">Where our story began</div>
                
                {/* Customer Reviews matching Hero style */}
                <div className="flex items-center justify-center gap-4 pt-8 mt-8 border-t border-gray-100">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Happy Clients
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        4.9 (250+ Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
              WHAT DRIVES US
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4">
              Our Core <span className="text-cyan-600">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These principles guide every decision we make and every solution we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="text-cyan-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
              MEET THE TEAM
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4">
              The People Behind <span className="text-cyan-600">Your Success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our diverse team of experts brings together years of experience and passion for innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className={`w-24 h-24 ${member.image} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-600 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-slate-700 rounded-3xl p-12 text-center text-white mb-20">
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <div className="text-sm uppercase tracking-wider text-cyan-100 font-medium mb-4">
            OUR MISSION
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Empowering Business Through Innovation
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-cyan-50">
            To empower businesses through innovative technology solutions that drive growth, 
            enhance efficiency, and create exceptional user experiences.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
            READY TO GET STARTED?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
            Let's Build Something <span className="text-cyan-600">Amazing Together</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into innovative solutions? Let's discuss how we can help 
            your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 px-8 py-4 font-medium transition-colors duration-200 justify-center">
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default About;