import React from "react";
import Hero from "../components/Home/Hero";
import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/Navbar";
import OurMission from "../components/Home/OurMission";
import WhatWeDo from "../components/Home/WhatWeDo";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ContactForm from "../components/Home/ContactForm";
import HowWeWork from "../components/Home/HowWeWork";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar /> 
      <Hero />
      <WhatWeDo />
      <HowWeWork/>
      <WhyChooseUs />
      <OurMission />
      <ContactForm /> 
      <Footer />
    </div>
  );
};

export default Home;
