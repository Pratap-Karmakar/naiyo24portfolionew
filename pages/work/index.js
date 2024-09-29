import React from "react";
import { motion } from "framer-motion";
import WorkSlider from "../../components/WorkSlider";

// Fade-in animation function
const fadeIn = (direction = "up", delay = 0.3) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : -30, // Distance for the motion
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Adjust the duration for smoothness
        delay: delay,
      },
    },
  };
};

const Work = () => {
  return (
    <div className="h-full py-12 md:py-16 lg:py-36 flex items-center px-4 sm:px-8 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 items-center">

          {/* Service Slider Section */}
          <motion.div
            variants={fadeIn("up", 0.7)} // Apply fade-in to the ServiceSlider
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] md:mt-12 lg:mt-16"
          >
            <WorkSlider />
          </motion.div>

          {/* Text Section */}
          <div className="flex flex-col text-center xl:w-[30vw] lg:text-left mb-12 md:mb-16">
            <motion.h2
              variants={fadeIn("down", 0.3)} // Use fadeIn with slight delay
              initial="hidden" // Initial state: hidden
              animate="show" // Trigger animation on mount
              exit="hidden" // Hidden on exit
              className="text-3xl md:text-4xl font-bold xl:mt-8 capitalize"
            >
              Why Choose <span className="text-purple-500">US</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.5)} // Adding fade-in to paragraph with more delay
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm md:text-base mb-4 max-w-[400px] mx-auto mt-6 lg:mt-10 lg:mx-0"
            >
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and mobile solutions tailored to your business. We’re committed to turning your digital ideas into reality with cutting-edge technology and expert services.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
