import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Benefits of Drinking Smoothies",
    excerpt:
      "Discover the numerous health benefits of incorporating smoothies into your daily diet...",
    link: "#",
  },
  {
    title: "Top 10 Smoothie Recipes for Summer",
    excerpt:
      "Beat the heat with these refreshing and delicious smoothie recipes perfect for summer...",
    link: "#",
  },
  {
    title: "How to Make the Perfect Smoothie",
    excerpt:
      "Learn the secrets to making the perfect smoothie every time with our expert tips and tricks...",
    link: "#",
  },
];

function Blog() {
  return (
    <section id="blog" className="pt-24 py-16 px-4 max-w-7xl mx-auto bg-white">
      <motion.h2
        className="text-4xl font-bold text-deep-blue text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Blog
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-deep-blue mb-2 group-hover:text-vivid-orange transition-colors duration-300">
              {post.title}
            </h3>
            <p className="text-deep-blue text-base mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              className="text-vivid-orange text-lg font-semibold hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
