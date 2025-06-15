import React from "react";
import Hero from "../components/Home/Hero";
import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/Navbar";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
