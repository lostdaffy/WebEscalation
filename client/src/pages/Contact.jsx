import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isVisible, setIsVisible] = useState({
    header: false,
    contactInfo: false,
    form: false,
    image: false,
  });

  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target === headerRef.current) {
              setIsVisible((prev) => ({ ...prev, header: true }));
            } else if (target === contactInfoRef.current) {
              setIsVisible((prev) => ({ ...prev, contactInfo: true }));
            } else if (target === formRef.current) {
              setIsVisible((prev) => ({ ...prev, form: true }));
            } else if (target === imageRef.current) {
              setIsVisible((prev) => ({ ...prev, image: true }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "48ab3e6c-7cec-47a0-a1ee-baedf022d227", // Replace this with your real access key
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCharCount(0);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form.");
    }

    setIsSubmitting(false);
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

      <div className="min-h-screen py-4 sm:py-6 md:py-8 px-4">
        <div className="max-w-6xl mx-auto bg-gray-50 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div
                ref={headerRef}
                className={`transition-all duration-1000 ${
                  isVisible.header
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                  Start a Conversation
                </h1>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  Whether you're a startup or an established business, let's
                  chat about boosting your digital presence.
                </p>
              </div>

              <div
                ref={contactInfoRef}
                className={`transition-all duration-1000 delay-300 ${
                  isVisible.contactInfo
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Phone className="w-3 h-3 text-cyan-500" />
                    </div>
                    <p className="text-gray-900 text-sm font-semibold">
                      +91 8273998875
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Phone className="w-3 h-3 text-cyan-500" />
                    </div>
                    <p className="text-gray-900 text-sm font-semibold break-all sm:break-normal">
                      webescalation@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={imageRef}
                className={`transition-all duration-1000 delay-500 ${
                  isVisible.image
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src="/images/2148924723.webp"
                  className="w-full rounded-2xl"
                  alt="contact"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:pl-8">
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className={`bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 transition-all duration-1000 delay-700 ${
                  isVisible.form
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
                  Send us a message
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 text-gray-900"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 text-gray-900"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <span className="text-sm text-gray-500">
                        {charCount}/150
                      </span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      maxLength={150}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 resize-none text-gray-900"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-cyan-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
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
