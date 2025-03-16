import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Reviews />
      <Menu />

      <Locations />
      <About />

      <Footer />
      {/* Menu can be added later or toggled */}
    </div>
  );
}

export default App;
