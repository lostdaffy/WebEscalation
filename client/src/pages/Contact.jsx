import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Star,
  CheckCircle,
  Pin,
  Globe,
} from "lucide-react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      message:
        "Exceptional service and quick response times. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Founder, DesignCo",
      message: "Professional team that delivers exactly what they promise.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Marketing Director",
      message:
        "Great communication and outstanding results. Will work with them again!",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-br from-slate-50 to-white " id="contact">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-24">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                GET IN TOUCH WITH US
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                Let's Start a{" "}
                <span className="text-cyan-500">Conversation</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into reality? We're here to help
                you build something amazing together.
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-100 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-100 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-50 rounded-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Contact */}
      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <button className="w-full bg-white text-cyan-500 font-semibold py-4 px-6 rounded-xl hover:bg-slate-50 transition-colors duration-300 hover:shadow-lg">
                      Schedule a Call
                    </button>
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

          {/* Bottom section with additional info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-cyan-500" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Quick Response
              </h4>
              <p className="text-slate-600 text-sm">
                Average response time under 2 hours
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-cyan-500" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-slate-600 text-sm">
                Emergency support available anytime
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-cyan-500" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Global Reach
              </h4>
              <p className="text-slate-600 text-sm">
                Serving clients worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className="max-h-screen">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <div className="relative">
                        <Pin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="Your City"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-700 text-white py-4 px-8 rounded-full font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8 self-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help bring your vision to life. Whether you have
                  a question about our services, need a quote, or want to
                  discuss your next project, we'd love to hear from you.
                </p>
              </div>

              <div>
                <img
                  src="/images/2148924723.webp"
                  className="w-full rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-20">
        <div className="bg-gradient-to-r from-cyan-500 to-slate-700 rounded-3xl p-12 text-center text-white">
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
      </div>
      <Footer />
    </>
  );
};

export default Contact;
