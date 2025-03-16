import React from "react";
import { motion } from "framer-motion";
import Interior from "../assets/interior.png";

function Hero() {
  return (
    <header
      id="home"
      className="pt-36 relative bg-mid-peach py-24 px-4 text-right overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 109, 119, 0.8), rgba(0, 109, 119, 0.1)), url(${Interior})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle Wavy Line Accent */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-vivid-orange"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl ml-auto pt-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to Blissful Blends
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-sunny-yellow mb-8 drop-shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fresh, Healthy Smoothies for Every Mood
        </motion.p>
        <motion.button
          className="bg-vivid-orange text-white font-bold py-3 px-8 rounded-full hover:bg-dark-teal transition-colors duration-300 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.05, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          onClick={() => {
            window.location.href = "#menu";
          }}
        >
          Explore Our Menu
        </motion.button>
      </div>

      <motion.div
        className="absolute inset-0 bg-dark-teal opacity-0 hover:opacity-10 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      />
    </header>
  );
}

export default Hero;
