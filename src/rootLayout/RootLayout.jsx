import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/public/assets/bg.jpg"})`,
      }}
    >
      <div className="min-h-screen bg-black/50">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
