import React from "react";
import {
  Heart,
  Scissors,
  Building2,
  Palette,
  Dumbbell,
  Leaf,
  Stethoscope,
  Calendar,
  UserCheck,
  Coffee,
  GraduationCap,
  Camera,
  Pill,
  MapPin,
  Megaphone,
  Cookie,
} from "lucide-react";

import PageBanner from "../components/Global/PageBanner";
import ContactForm from "../components/Home/ContactForm";

const Industries = () => {
  const industries = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "NGO",
      color: "text-red-500",
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Salon",
      color: "text-pink-500",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Construction Company",
      color: "text-orange-500",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Artist",
      color: "text-purple-500",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Gym",
      color: "text-green-500",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Plant Nursery Business",
      color: "text-emerald-500",
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Hospital",
      color: "text-blue-500",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Planner",
      color: "text-indigo-500",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Doctor",
      color: "text-teal-500",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Cafe Restaurant & Banquet Hall",
      color: "text-amber-500",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      color: "text-blue-600",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photographer",
      color: "text-gray-600",
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Medical Store",
      color: "text-red-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Tour & Travels",
      color: "text-sky-500",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Ad Agency",
      color: "text-violet-500",
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Sweets & Bakers",
      color: "text-yellow-500",
    },
  ];

  return (
    <>
      {/* Industries Hero */}
      <PageBanner
        heading="Industries We Serve"
        subheading="Smart Industry Solutions"
        description="We deliver smart, scalable solutions for industries like healthcare, finance, education, and more."
      />

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-screen gap-10">
            {/* Left side - Image */}
            <div className="w-full lg:w-2/5">
              <div className="relative w-full h-72 sm:h-96 lg:h-full">
                <img
                  src="/images/113955.webp"
                  alt="Information Website Development"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                    Professional Websites
                  </h3>
                  <p className="text-sm sm:text-lg opacity-90">
                    Tailored for Every Industry
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-3/5">
              {/* Header */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Information Website
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We specialize in creating comprehensive information websites
                  for diverse industries, helping businesses establish their
                  digital presence and connect with their target audience
                  effectively.
                </p>
              </div>

              {/* Industries List */}
              <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="group flex items-center rounded-xl p-1 hover:bg-gray-50 transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-200"
                    >
                      <div
                        className={`${industry.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {industry.icon}
                      </div>
                      <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {industry.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Industries;
