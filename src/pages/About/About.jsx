import React from "react";
import { FaCoffee, FaLeaf, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-yellow-50 min-h-screen px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-yellow-900 mb-4">
            About Bean & Dream
          </h1>
          <p className="text-yellow-800 text-lg mb-6">
            At Bean & Dream, we are passionate about bringing you the finest
            coffee experience. From freshly roasted beans to cozy ambiance, we
            craft every cup with love.
          </p>
          <p className="text-yellow-800 text-lg">
            Our mission is to make every visit memorable, whether you're here
            for a quick espresso or a relaxing afternoon with friends.
          </p>
        </div>
        <div className="lg:w-1/2">
          <motion.img
            src="/public/assets/coffee-shop.jpg"
            alt="Coffee shop"
            className="w-full h-64 object-cover rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        {[
          {
            icon: (
              <FaCoffee className="text-yellow-600 text-4xl mx-auto mb-4" />
            ),
            title: "Our Coffee",
            desc: "We source the finest beans and roast them to perfection for a rich, smooth taste.",
          },
          {
            icon: <FaLeaf className="text-yellow-600 text-4xl mx-auto mb-4" />,
            title: "Sustainability",
            desc: "We care for the planet and ensure eco-friendly practices in every step of our process.",
          },
          {
            icon: <FaHeart className="text-yellow-600 text-4xl mx-auto mb-4" />,
            title: "Our Passion",
            desc: "Every cup is crafted with love and dedication, making every sip unforgettable.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: idx * 0.2 },
            }}
            viewport={{ once: true }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">
              {item.title}
            </h3>
            <p className="text-yellow-800">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Team / Story Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl font-bold text-yellow-900 mb-6">Our Story</h2>
        <p className="text-yellow-800 text-lg mb-6">
          Bean & Dream started with a simple idea: to create a space where
          coffee lovers can enjoy exceptional coffee in a welcoming environment.
          Over the years, we have grown into a community hub where people
          connect, relax, and share their love for coffee.
        </p>
        <motion.img
          src="/public/assets/team.jpg"
          alt="Our Team"
          className="mx-auto w-full md:w-3/4 shadow-lg rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default About;
