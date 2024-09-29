import React from 'react';
import TestimonialSlider from '../../components/TestimonialSlider'; // Corrected component name
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Index = () => {
  return (
    <div className='h-full py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* Text */}
        <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit='hidden'
          className='mb-8 xl:mb-0 text-4xl'
        >
          Meet Our <span className='text-purple-400'>Team</span>
        </motion.h2>

        {/* Slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit='hidden'
        >
          <TestimonialSlider /> {/* Corrected component usage */}
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
