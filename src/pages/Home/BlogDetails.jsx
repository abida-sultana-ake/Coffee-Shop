import React from "react";
import { useParams, useNavigate } from "react-router"; 
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "The Art of Brewing Coffee",
    excerpt:
      "Learn how to brew the perfect cup at home with simple tips and tricks.",
    date: "Aug 14, 2025",
    author: "John Doe",
    category: "Brewing",
    image:
      "https://i.pinimg.com/736x/42/df/eb/42dfebab83b0685722c0243f8668502d.jpg",
    content: `
      Brewing coffee is both an art and a science. Start by choosing high-quality beans,
      grinding them freshly, and selecting the right brewing method for your taste.
      Experiment with water temperature, grind size, and brewing time to find your perfect cup.
    `,
    tags: ["Coffee", "Brewing", "Home Tips"],
    comments: [
      { id: 1, user: "Alice", text: "Great tips! I love brewing at home." },
      {
        id: 2,
        user: "Bob",
        text: "I never knew water temperature was so important!",
      },
    ],
  },
  {
    id: 2,
    title: "Coffee Bean Varieties Explained",
    excerpt:
      "Discover the differences between Arabica, Robusta, and other coffee beans.",
    date: "Aug 12, 2025",
    author: "Jane Smith",
    category: "Beans",
    image:
      "https://i.pinimg.com/736x/c4/92/ba/c492ba241ebe80fbc03250506b73de33.jpg",
    content: `
      Arabica beans are known for their smooth, mild flavor, while Robusta beans are stronger and more bitter.
      Each variety has its own profile, growing region, and ideal brewing method.
    `,
    tags: ["Coffee", "Beans", "Varieties"],
    comments: [
      {
        id: 1,
        user: "Charlie",
        text: "Very informative! I prefer Arabica beans.",
      },
    ],
  },
  {
    id: 3,
    title: "Pairing Coffee with Pastries",
    excerpt: "Enhance your coffee experience with the best pastry pairings.",
    date: "Aug 10, 2025",
    author: "Emily Brown",
    category: "Pairings",
    image:
      "https://i.pinimg.com/736x/f5/2d/91/f52d919ad2825bde9aa61205526098bd.jpg",
    content: `
      Pairing coffee with pastries can elevate your experience. Try a buttery croissant with
      light roast coffee or a chocolate muffin with dark roast. Explore flavors to find your favorite combination.
    `,
    tags: ["Coffee", "Pastries", "Pairing"],
    comments: [
      {
        id: 1,
        user: "David",
        text: "I love pairing my espresso with a chocolate croissant!",
      },
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <p className="text-center mt-20 text-red-500 font-semibold">
        Post not found!
      </p>
    );
  }

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const heroTitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-yellow-50/20">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Hero Image with Animated Title */}
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40 flex items-end p-6">
            <motion.h1
              variants={heroTitleVariants}
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
            >
              {post.title}
            </motion.h1>
          </div>
        </div>

        {/* Back Button & Author */}
        <motion.div
          variants={itemVariants}
          className="px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300"
          >
            &larr; Back to Blog
          </button>

          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${post.author}&background=FFD700&color=000`}
              alt={post.author}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-medium">{post.author}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
            <span className="ml-4 px-3 py-1 bg-yellow-100 text-yellow-800 font-medium rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </motion.div>

        {/* Post Content */}
        <motion.div variants={itemVariants} className="px-6 py-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
            {post.content}
          </p>

          {/* Tags */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-yellow-900">
              Tags:
            </h2>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-200 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Comments */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-900">
              Comments:
            </h2>
            <ul className="space-y-4 mb-6">
              {post.comments.map((c) => (
                <motion.li
                  key={c.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <p className="font-semibold text-gray-800">{c.user}:</p>
                  <p className="text-gray-700">{c.text}</p>
                </motion.li>
              ))}
            </ul>

            {/* Comment Input UI */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-300">
                Post
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogDetails;
