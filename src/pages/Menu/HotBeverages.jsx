import React from "react";
import { FaCoffee, FaShoppingCart } from "react-icons/fa";

const hotBeverages = [
  { name: "Cafe Latte", price: 3.45, img: "/assets/cafe-latte.jpg" },
  { name: "Cappuccino", price: 3.75, img: "/assets/cappuccino.jpg" },
  { name: "Espresso", price: 2.5, img: "/assets/espresso.jpg" },
  { name: "Mocha", price: 4.0, img: "/assets/mocha.jpg" },
  { name: "Flat White", price: 3.25, img: "/assets/flat-white.jpg" },
  { name: "Macchiato", price: 3.0, img: "/assets/macchiato.jpg" },
];

const HotBeverages = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgMotion"
        style={{ backgroundImage: "url('/assets/hot-beverage-bg.jpg')" }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Glassy Overlay */}
        <div className="bg-opacity-50 backdrop-blur-md p-12 rounded-2xl">
          {/* Title */}
          <div className="text-center mb-10 text-white">
            <h2 className="text-4xl font-serif tracking-wide">HOT BEVERAGES</h2>
            <div className="flex justify-center items-center mt-2">
              <span className="w-10 h-[2px] bg-yellow-400"></span>
              <FaCoffee className="mx-2 text-yellow-300" />
              <span className="w-10 h-[2px] bg-yellow-400"></span>
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-yellow-200">
              Warm up with our rich and aromatic hot coffee drinks. Perfect for
              cozy mornings or any time you need a comforting boost.
            </p>
          </div>

          {/* Menu Rows */}
          <div className="grid md:grid-cols-2 gap-8 text-white">
            {hotBeverages.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-dotted border-yellow-300 pb-4 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-300"
                  />
                  <div>
                    <h4 className="uppercase tracking-wider font-medium text-yellow-100">
                      {item.name}
                    </h4>
                    <p className="text-yellow-200 text-sm">
                      Rich, hot, and full of flavor to start your day right.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-yellow-100">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold px-3 py-1 rounded-lg transition-colors">
                    <FaShoppingCart className="size-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style>
        {`
          @keyframes bgMotion {
            0% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.05) translateY(-10px); }
            100% { transform: scale(1) translateY(0); }
          }
          .animate-bgMotion {
            animation: bgMotion 20s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HotBeverages;
