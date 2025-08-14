import React from "react";
import { FaArrowRight, FaCoffee } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Art of Brewing Coffee",
      excerpt:
        "Learn how to brew the perfect cup at home with simple tips and tricks.",
      date: "Aug 14, 2025",
      image:
        "https://i.pinimg.com/736x/42/df/eb/42dfebab83b0685722c0243f8668502d.jpg",
    },
    {
      id: 2,
      title: "Coffee Bean Varieties Explained",
      excerpt:
        "Discover the differences between Arabica, Robusta, and other coffee beans.",
      date: "Aug 12, 2025",
      image:
        "https://i.pinimg.com/736x/c4/92/ba/c492ba241ebe80fbc03250506b73de33.jpg",
    },
    {
      id: 3,
      title: "Pairing Coffee with Pastries",
      excerpt: "Enhance your coffee experience with the best pastry pairings.",
      date: "Aug 10, 2025",
      image:
        "https://i.pinimg.com/736x/f5/2d/91/f52d919ad2825bde9aa61205526098bd.jpg",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-20 text-gray-900">
      <div className="absolute inset-0">
        <img
          src="/assets/coffee-blog-bg.jpg"
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-50/60"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-900 mb-2">OUR BLOG</h2>
        <div className="flex items-center justify-center gap-4 my-8">
          <hr className="flex-1 border-yellow-400" />
          <FaCoffee className="text-yellow-600 text-3xl" />
          <hr className="flex-1 border-yellow-400" />
        </div>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Stay updated with tips, guides, and stories about coffee and our café
          delights.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg shadow flex flex-col cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                <p className="text-gray-500 text-xs mb-4">{post.date}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
