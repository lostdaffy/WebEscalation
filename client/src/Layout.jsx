import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
