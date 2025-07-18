import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/Home/ContactForm";
import PageBanner from "../components/Global/PageBanner";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us (Saharanpur Office)",
      info: "+91 8273998875",
      subInfo: "Uttar Pradesh, India, 247001",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us (Patna Office)",
      info: "+91 9060044717",
      subInfo: "Bihar, India, 80020",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "webescalation@gmail.com",
      subInfo: "We'll respond within 24 hours",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon-Fri: 9AM-6PM",
      subInfo: "Weekend: By appointment",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageBanner
        heading="Contact Us"
        subheading="Let's Start a Conversation"
        description="Ready to transform your ideas into reality? We're here to help you
              build something amazing together."
      />

      <section className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards - 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-500 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-500 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-cyan-500 font-semibold text-lg mb-2">
                        {item.info}
                      </p>
                      <p className="text-slate-500">{item.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Connect?
                    </h3>
                    <p className="text-cyan-100 mb-8 leading-relaxed">
                      Let's discuss your project and explore how we can bring
                      your vision to life.
                    </p>
                    <Link
                      to="tel:+918273998875"
                      className="w-full block text-center bg-white text-cyan-500 font-semibold py-4 px-6 rounded-xl hover:bg-slate-50 transition-colors duration-300 hover:shadow-lg"
                    >
                      Schedule a Call
                    </Link>
                    <div className="mt-6 pt-6 border-t border-cyan-400/30">
                      <p className="text-cyan-100 text-sm">
                        Or send us a message and we'll get back to you within 24
                        hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.9293995173007!2d77.54677547533879!3d29.890740975001354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873344c5aecb6c37%3A0x290c36b9f889ffc!2sWebEscalation!5e1!3m2!1sen!2sin!4v1752230964055!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
