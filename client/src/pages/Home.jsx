import React from "react";
import Hero from "../components/Home/Hero";
import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/Navbar";
import About from "../components/Home/About";
import WhatWeDo from "../components/Home/WhatWeDo";
import Approach from "../components/Home/Approach";
import CoreValues from "../components/Home/CoreValues";
import CallToAction from "../components/Home/CallToAction";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Approach />
      <CoreValues />
      <About />
      <CallToAction /> 
      <Footer />
    </div>
  );
};

export default Home;
