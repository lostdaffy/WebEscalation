import React, { useState, useEffect } from "react";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";
import ContactForm from "../components/Home/ContactForm";
import PageBanner from "../components/Global/PageBanner";

const About = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation",
      description:
        "We thrive on pushing boundaries. Our team is dedicated to delivering innovative, future-ready solutions that keep your business ahead in a rapidly evolving digital landscape.",
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quality",
      description:
        "Excellence is non-negotiable. From each line of code to every pixel in design, we ensure unmatched quality, precision, and performance in everything we create.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Collaboration",
      description:
        "Your vision is our mission. We believe in strong collaboration, working hand-in-hand with clients to bring ideas to life and build products that truly resonate.",
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Growth",
      description:
        "Our solutions are built to scale with your business. We focus on sustainable growth by creating adaptable, efficient systems that support long-term success.",
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
      {/* AboutHero */}

      <PageBanner
        heading="About Us"
        subheading=" Innovative Digital Solutions"
        description="We build scalable digital products and software solutions that
              empower businesses to grow online."
      />

      {/* AboutStory Section */}
      <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 transform ${
              visibleElements.has("story-content")
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            data-animate
            id="story-content"
          >
            <div className="text-sm sm:text-base uppercase tracking-wider text-cyan-500 font-bold">
              OUR JOURNEY
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight">
              Building Success Through{" "}
              <span className="text-cyan-500">Innovation</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                What started as a vision to bridge the gap between technology
                and business success has evolved into a trusted partnership with
                companies worldwide. Our journey began with a simple belief:
                great software should drive real business results.
              </p>
              <p>
                Today, we combine cutting-edge technology with deep industry
                expertise to deliver solutions that don't just meet expectations
                – they exceed them. Every project we undertake is an opportunity
                to create something remarkable.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 transform ${
              visibleElements.has("story-image")
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            data-animate
            id="story-image"
          >
            <div className="">
              <img
                src="/images/2149151168.webp"
                className="w-full rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="bg-gray-100">
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative py-12 lg:py-0">
          <div className="w-full">
            <div
              className={`text-center pb-8 lg:pb-16 transition-all duration-1000 transform ${
                visibleElements.has("values-header")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              data-animate
              id="values-header"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-500 leading-tight mb-4 tracking-wide">
                What Drives Us
              </h2>
              <p className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto px-4">
                Core Values —That Power Digital Excellence
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-cyan-200 transform hover:-translate-y-2 ${
                    visibleElements.has(`value-${index}`)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  data-animate
                  id={`value-${index}`}
                >
                  {/* Icon Container */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-cyan-50 rounded-2xl group-hover:bg-cyan-500 transition-colors duration-300">
                      <div className="text-cyan-500 group-hover:text-white transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-cyan-500 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-4 right-4 sm:left-8 sm:right-8 h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 delay-200 transform ${
              visibleElements.has("tech-image")
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            data-animate
            id="tech-image"
          >
            <div className="">
              <img
                src="/images/987365.webp"
                className="w-full rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div
            className={`space-y-4 py-6 sm:py-10 px-4 bg-white text-center order-1 lg:order-2 transition-all duration-1000 transform ${
              visibleElements.has("tech-content")
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            data-animate
            id="tech-content"
          >
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-500">
              Web Development Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              Modern Websites Built with{" "}
              <span className="text-cyan-500">Reliable Technologies</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              We build lightning-fast, mobile-responsive, and SEO-ready websites
              for businesses in North India using modern technologies like
              React.js, Next.js, Tailwind CSS, and Node.js — helping brands
              boost their online visibility and grow faster.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm text-slate-700">
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                React.js
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                Next.js
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                HTML
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                CSS
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                JavaScript
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                Express.js
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                Firebase
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                MySQL
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                PHP
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                Laravel
              </span>
              <span className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default About;
