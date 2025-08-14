import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCoffee, FaClock, FaStore, FaMugHot } from "react-icons/fa";

const stats = [
  {
    icon: <FaCoffee size={40} />,
    value: 250,
    label: "VARIETIES OF COFFEE",
    desc: "From rich espresso to smooth latte, explore our diverse selection.",
  },
  {
    icon: <FaClock size={40} />,
    value: 123,
    label: "HOURS OF TESTING",
    desc: "Every blend is perfected through hours of brewing and tasting.",
  },
  {
    icon: <FaStore size={40} />,
    value: 321,
    label: "COFFEE MARKETS",
    desc: "Sourced from markets around the world for authentic flavors.",
  },
  {
    icon: <FaMugHot size={40} />,
    value: 220,
    label: "COFFEE BRANDS",
    desc: "Partnering with top coffee brands to bring you the best.",
  },
];

const CounterItem = ({ icon, value, label, desc, delay }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay },
    });
  }, [value, controls, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-6 bg-white/70 rounded-xl shadow-lg cursor-pointer"
    >
      <motion.div className="text-amber-600 mb-4" whileHover={{ rotate: 15 }}>
        {icon}
      </motion.div>
      <div className="text-4xl font-bold text-yellow-700">{count}</div>
      <div className="text-lg font-semibold mt-2">{label}</div>
      <p className="text-yellow-800 text-sm mt-1">{desc}</p>
    </motion.div>
  );
};

const Counter = () => {
  return (
    <section className="relative py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/counter.jpg"
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-50/70"></div>
      </div>

      {/* Counter Content */}
      <motion.div
        className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {stats.map((item, idx) => (
          <CounterItem key={idx} {...item} delay={idx * 0.2} />
        ))}
      </motion.div>
    </section>
  );
};

export default Counter;
