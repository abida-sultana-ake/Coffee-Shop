import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/public/assets/bg.jpg"})`,
      }}
    >
      <div className="min-h-screen bg-black/50">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
