import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-36 py-16 px-4 max-w-7xl mx-auto bg-white">
      <motion.h2
        className="text-4xl font-bold text-deep-blue text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>
      <motion.div
        className="text-lg text-dark-teal leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-6">
          Welcome to Blissful Blends, where we believe in the power of fresh,
          healthy smoothies to transform your day. Our mission is to provide
          delicious, nutritious, and convenient smoothie options that cater to
          all tastes and dietary needs.
        </p>
        <p className="mb-6">
          Founded in 2021, Blissful Blends has quickly become a favorite spot
          for smoothie enthusiasts. Our team is passionate about using the
          highest quality ingredients, sourced locally whenever possible, to
          create a menu that is both diverse and satisfying.
        </p>
        <p className="mb-6">
          At Blissful Blends, we are committed to sustainability and community.
          We strive to minimize our environmental impact by using eco-friendly
          packaging and supporting local farmers. We also believe in giving back
          to the community through various initiatives and partnerships.
        </p>
        <p className="mb-6">
          Whether you're looking for a post-workout boost, a healthy snack, or a
          refreshing treat, Blissful Blends has something for everyone. Thank
          you for choosing us, and we look forward to serving you!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
