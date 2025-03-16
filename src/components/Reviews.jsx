import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import avatar1 from "../assets/avatar1.png";
import avatar5 from "../assets/avatar5.png";
import avatar3 from "../assets/avatar3.png";
import avatar2 from "../assets/avatar2.png";
import avatar4 from "../assets/avatar4.png";

const reviews = [
  {
    name: "Alex P.",
    review:
      "The smoothies here are a game-changer—fresh, tasty, and perfect every time!",
    avatar: avatar1,
  },
  {
    name: "Sam K.",
    review: "Love the vibe and the flavors. Best spot for a healthy treat!",
    avatar: avatar5,
  },
  {
    name: "Jordan M.",
    review: "Quick service and amazing variety. I’m hooked!",
    avatar: avatar3,
  },
  {
    name: "Taylor R.",
    review: "A refreshing burst of flavor in every sip—can’t get enough!",
    avatar: avatar2,
  },
  {
    name: "Casey L.",
    review: "The perfect blend of health and happiness. Highly recommend!",
    avatar: avatar4,
  },
];

function Reviews() {
  const controls = useAnimation();
  const totalWidth = reviews.length * 400; // Width of one full set

  useEffect(() => {
    startAnimation(); // Start the animation on mount
  }, []);

  // Function to start animation
  const startAnimation = () => {
    controls.start({
      x: [0, -totalWidth], // Moves from 0 to -totalWidth
      transition: {
        duration: 40, // Slow it down (increase duration)
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const handleHoverStart = () => {
    controls.stop(); // Pause animation
  };

  const handleHoverEnd = () => {
    startAnimation(); // Resume animation
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white relative z-0">
      <motion.h2
        className="text-3xl font-bold text-deep-blue text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        What Our Customers Say
      </motion.h2>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          animate={controls}
          onHoverStart={handleHoverStart} // Pause on hover
          onHoverEnd={handleHoverEnd} // Resume on leave
          style={{ width: `${reviews.length * 400 * 2}px` }} // Double width for seamless looping
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 min-w-[400px] bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-24 h-72 object-cover rounded-lg shadow-md"
              />
              <div className="text-center md:text-left max-w-md">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">
                  {item.name}
                </h3>
                <p className="text-dark-teal text-base italic">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;
