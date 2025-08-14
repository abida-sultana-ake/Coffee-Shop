import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Welcome to Bean & Dream",
    description:
      "Serving the finest coffee and pastries to make your day delightful.",
    image: "/public/assets/b1.jpg",
  },
  {
    title: "Freshly Brewed Every Morning",
    description:
      "Start your day with the aroma of freshly roasted coffee beans.",
    image: "/public/assets/b2.jpg",
  },
  {
    title: "Relax & Enjoy",
    description: "A cozy place to enjoy coffee, desserts, and good company.",
    image: "/public/assets/b3.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-yellow-900/30 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-50 drop-shadow-lg mb-4 animate-fadeIn">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-100 mb-6 max-w-2xl drop-shadow-md animate-fadeIn delay-200">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/menu"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300"
              >
                Explore Menu
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-full bg-transparent border-2 border-yellow-100 text-yellow-100 font-semibold shadow-lg hover:bg-yellow-100 hover:text-yellow-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-500 scale-125"
                : "bg-yellow-200"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;
