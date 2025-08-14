import React from "react";
import { FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";

const Gallary = () => {
  const galleryImages = [
    "/assets/gallery-0.jpg",
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.jpg",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg",
    "/assets/gallery-5.jpg",
    "/assets/gallery-6.jpg",
    "/assets/gallery-7.jpg",
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-12">
      {/* Background image + tint */}
      <div className="absolute inset-0">
        <img
          src="/assets/coffee-gallary.jpg"
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-50/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="flex items-center justify-center gap-2 text-4xl font-bold text-yellow-900 mb-3">
          <FaCoffee className="text-yellow-600" /> Our Sweet Gallery
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Take a peek at our cozy coffee moments, from latte art to our café’s
          warm atmosphere.
        </p>

        {/* Gallery Grid with animation */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Big first image */}
          <motion.img
            src={galleryImages[0]}
            alt="Coffee"
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-lg min-h-96 md:col-start-3 md:row-start-1 object-cover"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Middle images */}
          {galleryImages.slice(1).map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-full rounded-xl shadow-md min-h-48 object-cover"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}

          {/* Last big image */}
          <motion.img
            src="/assets/gallery-8.jpg"
            alt="Coffee"
            className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-lg min-h-96 md:col-start-1 md:row-start-3 object-cover"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallary;
