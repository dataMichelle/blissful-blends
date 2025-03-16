Navbar.jsx;
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-dark-teal flex items-center justify-between p-4 sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Blissful Blends" className="w-20 h-20" />
        <h1
          className="text-soft-peach text-3xl font-bold"
          style={{
            fontFamily: "Fontdiner Swanky, cursive",
            letterSpacing: "0.2em",
          }}
        >
          Blissful Blends
        </h1>
      </div>
      <div className="flex gap-10">
        {["Home", "Menu", "Locations"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-soft-peach text-lg font-semibold uppercase tracking-wide hover:text-lime-green transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex gap-8">
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-soft-peach text-xl hover:text-vivid-orange transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="http://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-soft-peach text-xl hover:text-vivid-orange transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-soft-peach text-xl hover:text-vivid-orange transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
