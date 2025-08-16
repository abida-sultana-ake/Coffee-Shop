import React from "react";
import { FaIceCream, FaShoppingCart } from "react-icons/fa";

const coldBeverages = [
  { name: "Iced Latte", price: 3.25, img: "/assets/iced-latte.jpg" },
  { name: "Cold Brew", price: 2.95, img: "/assets/cold-brew.jpg" },
  { name: "Frappuccino", price: 4.5, img: "/assets/frappuccino.jpg" },
  { name: "Iced Mocha", price: 4.0, img: "/assets/iced-mocha.jpg" },
  { name: "Iced Americano", price: 2.0, img: "/assets/iced-americano.jpg" },
  {
    name: "Vanilla Iced Coffee",
    price: 3.75,
    img: "/assets/vanilla-iced-coffee.jpg",
  },
];

const ColdBeverages = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgMotion"
        style={{ backgroundImage: "url('/assets/cold-beverage-bg.jpg')" }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Glassy Overlay */}
        <div className="bg-opacity-50 backdrop-blur-md p-12 rounded-2xl">
          {/* Title */}
          <div className="text-center mb-10 text-white">
            <h2 className="text-4xl font-serif tracking-wide">
              COLD BEVERAGES
            </h2>
            <div className="flex justify-center items-center mt-2">
              <span className="w-10 h-[2px] bg-yellow-400"></span>
              <FaIceCream className="mx-2 text-yellow-300" />
              <span className="w-10 h-[2px] bg-yellow-400"></span>
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-yellow-200">
              Chill out with our refreshing cold coffee drinks. Smooth, crisp,
              and perfect for a hot day.
            </p>
          </div>

          {/* Menu Rows */}
          <div className="grid md:grid-cols-2 gap-8 text-white">
            {coldBeverages.map((item, index) => (
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
                      Refreshing iced coffee with the perfect balance of
                      flavors.
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

export default ColdBeverages;
