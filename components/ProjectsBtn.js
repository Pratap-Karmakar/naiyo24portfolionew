import React from 'react';
import { motion } from 'framer-motion';
import { MdConnectWithoutContact } from 'react-icons/md';

const ProjectsBtn = () => {
  return (
    <motion.button
      className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg focus:outline-none overflow-hidden"
      // Slide in from the bottom with opacity animation
      initial={{ y: 100, opacity: 0 }} // Start position from below
      animate={{ y: 0, opacity: 1 }} // End position
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 1, // Duration of the animation
        delay: 3, // Delay before the animation starts
      }}
      // Rotate slightly on hover
      whileHover={{
        scale: 1.1,
        rotate: 3,
        boxShadow: '0px 0px 15px rgba(255, 0, 255, 0.7)',
        transition: { duration: 0.3 },
      }}
      // Reduce scale and spin back when clicked
      whileTap={{
        scale: 0.95,
        rotate: -3,
        transition: { duration: 0.2 },
      }}
    >
      {/* Background overlay animation on hover */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-red-400 opacity-0"
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
      />
      {/* Icon */}
      <MdConnectWithoutContact className="relative z-10 text-2xl" />
      {/* Text */}
      <span className="relative z-10">Let's Connect</span>
    </motion.button>
  );
};

export default ProjectsBtn;
