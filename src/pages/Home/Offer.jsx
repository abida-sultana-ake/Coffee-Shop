import React from "react";
import { FaCoffee, FaSeedling } from "react-icons/fa";
import { GiCoffeeBeans, GiCroissant } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { motion } from "framer-motion";

const offers = [
  {
    icon: <FaCoffee className="text-yellow-600 text-4xl" />,
    title: "TYPES OF COFFEE",
    desc: "Enjoy our variety of coffee, from classic espresso to creamy lattes and refreshing cold brews.",
  },
  {
    icon: <FaSeedling className="text-yellow-600 text-4xl" />,
    title: "BEAN VARIETIES",
    desc: "Sourced from the finest coffee regions, our beans are roasted to perfection for rich and aromatic flavors.",
  },
  {
    icon: <GiCroissant className="text-yellow-600 text-4xl" />,
    title: "COFFEE & PASTRY",
    desc: "Pair your coffee with freshly baked pastries, muffins, and croissants for a delightful treat.",
  },
  {
    icon: <BsCupStraw className="text-yellow-600 text-4xl" />,
    title: "COFFEE TO GO",
    desc: "On the move? Grab your favorite coffee with our convenient takeaway options.",
  },
];

const Offer = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-900 mb-2">
          OUR DELICIOUS OFFER
        </h2>
        <div className="flex items-center justify-center gap-4 my-8">
          <hr className="flex-1 border-gray-700" />
          <GiCoffeeBeans className="text-yellow-400 text-3xl" />
          <hr className="flex-1 border-gray-700" />
        </div>
        <p className="text-yellow-800 max-w-2xl mx-auto mb-12">
          Discover our carefully curated coffee selections and delightful treats
          made to brighten your day.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center gap-4 p-6 bg-white/70 rounded-xl shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {offer.icon}
              <h3 className="text-xl font-semibold text-yellow-900">
                {offer.title}
              </h3>
              <p className="text-yellow-800 text-sm">{offer.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
