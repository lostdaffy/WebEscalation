import React from "react";
import { Users, Target, Lightbulb, Rocket, Globe } from "lucide-react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that keep you ahead of the competition.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality",
      description:
        "Every line of code, every design element is crafted with precision and attention to detail.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring your vision becomes reality.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth",
      description:
        "Our solutions are designed to scale with your business and drive sustainable growth.",
    },
  ];

  const team = [
    {
      name: "Satyaprakash",
      role: `Full Stack Developer`,
      image: "/images/Satyaa.jpg",
    },
    {
      name: "Sudhir Kumar",
      role: `PHP Developer`,
      image: "/images/",
    },
    {
      name: "Isha",
      role: `Graphic Designer`,
      image: "/images/",
    },
    {
      name: "Sudhir Parle",
      role: `Android Developer`,
      image: "/images/",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 to-white"
        id="about"
      >
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
              Founded with a vision to bridge the gap between innovative
              technology and business success, we are a passionate team of
              developers, designers, and strategists committed to transforming
              your ideas into powerful digital solutions.
            </p>
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
                  What started as a vision to bridge the gap between technology
                  and business success has evolved into a trusted partnership
                  with companies worldwide. Our journey began with a simple
                  belief: great software should drive real business results.
                </p>
                <p>
                  Today, we combine cutting-edge technology with deep industry
                  expertise to deliver solutions that don't just meet
                  expectations – they exceed them. Every project we undertake is
                  an opportunity to create something remarkable.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="">
                <img
                  src="/images/77654.jpg"
                  className="w-full rounded-2xl"
                  alt=""
                />
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
                These principles guide every decision we make and every solution
                we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="text-cyan-600 mb-4">{value.icon}</div>
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
                The People Behind{" "}
                <span className="text-cyan-600">Your Success</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our diverse team of experts brings together years of experience
                and passion for innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div>
                    <img
                      src={member.image}
                      className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center "
                      alt=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-medium">{member.role}</p>
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
              To empower businesses through innovative technology solutions that
              drive growth, enhance efficiency, and create exceptional user
              experiences.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
              READY TO GET STARTED?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Let's Build Something{" "}
              <span className="text-cyan-600">Amazing Together</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into innovative solutions? Let's
              discuss how we can help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 "
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
