import React, { useState } from "react";
import { Phone, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

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
      access_key: "48ab3e6c-7cec-47a0-a1ee-baedf022d227",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Start a Conversation
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                Whether you're a startup or an established business, let's chat
                about boosting your digital presence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-[#0092b8]" />
                </div>
                <p className="text-gray-900 text-sm font-semibold">
                  +91 8273998875
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-[#0092b8]" />
                </div>
                <p className="text-gray-900 text-sm font-semibold break-all sm:break-normal">
                  webescalation@gmail.com
                </p>
              </div>
            </div>

            <img
              src="/images/2148924723.webp"
              className="w-full rounded-2xl"
              alt="contact"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
                Send us a message
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
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
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0092b8] focus:border-[#0092b8] text-gray-900"
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
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0092b8] focus:border-[#0092b8] text-gray-900"
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
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0092b8] focus:border-[#0092b8] text-gray-900"
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
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0092b8] focus:border-[#0092b8] text-gray-900 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#0092b8] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#0092b8] transition-all duration-300 flex items-center justify-center space-x-2 ${
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
  );
};

export default ContactForm;
