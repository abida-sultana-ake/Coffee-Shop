import React from "react";

const MenuBanner = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/menu-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
          Our Delicious Menu
        </h1>
        <p className="mt-3 text-lg text-yellow-200 drop-shadow-md">
          Freshly brewed coffee, warm pastries, and more
        </p>
      </div>
    </section>
  );
};

export default MenuBanner;
