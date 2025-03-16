import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-dark-teal py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-10 mb-6">
          {["About Us", "Locations"].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sunny-yellow text-lg font-bold uppercase hover:text-vivid-orange transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
        <p className="text-slate-white text-sm">
          © 2025 Blissful Blends. Made with React & Love.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
