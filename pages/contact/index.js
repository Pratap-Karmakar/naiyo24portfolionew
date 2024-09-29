import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* Text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-4xl text-center mb-12'
          >
            Let's <span className='text-purple-400'>Contact</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type="text" placeholder='Name' className='input w-1/2' />
              <input type="text" placeholder='Email' className='input w-1/2' />
            </div>

            <input type="text" placeholder='Subject' className='input w-full' />
            <textarea placeholder='Message' className='textarea w-full'></textarea>

            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-purple-400 group relative'>
              {/* Button text */}
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's Talk
              </span>

              {/* Icon */}
              <BsArrowRight className='absolute text-[22px] translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
