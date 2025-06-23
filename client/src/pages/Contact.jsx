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
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "webescalation@gmail.com",
      subInfo: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+91 8273998875",
      subInfo: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "Malhipur Road, Saharanpur",
      subInfo: "Uttar Pradesh, India, 247001",
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                GET IN TOUCH WITH US
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                Let's Start a{" "}
                <span className="text-cyan-600">Conversation</span>
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                <div className="space-y-6">
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
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="Your full name"
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
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">
                          Mobile App Development
                        </option>
                        <option value="design">Design Services</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-4 px-8 rounded-full font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
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

              {/* Contact Info Cards */}
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-cyan-600 font-medium mb-1">
                          {item.info}
                        </p>
                        <p className="text-gray-500 text-sm">{item.subInfo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                  Schedule a free consultation today and let's discuss how we
                  can help transform your ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors transform hover:scale-105 shadow-lg">
                    Schedule Consultation
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all transform hover:scale-105">
                    View Our Work
                  </button>
                </div>
              </div>

              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
