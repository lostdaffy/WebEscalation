import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
