import React from "react";
import { motion } from "framer-motion";
import smoothies from "../data/menu";

function Menu() {
  return (
    <section id="menu" className="pt-36 py-16 px-4 max-w-7xl mx-auto bg-white">
      <motion.h2
        className="text-4xl font-bold text-deep-blue text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Smoothie Menu
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {smoothies.map((smoothie, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-deep-blue mb-2 group-hover:text-vivid-orange transition-colors duration-300">
              {smoothie.name}
            </h3>
            <p className="text-deep-blue text-base">{smoothie.description}</p>
            <p className="text-vivid-orange text-xl font-semibold mt-4 relative">
              {smoothie.price}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-vivid-orange transition-all duration-300 group-hover:w-full"></span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
