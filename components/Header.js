import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/Naiyo24.png'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div className='absolute z-30 w-full items-center flex px-1 pt-3 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} // Start smaller and transparent
          animate={{ scale: 1, opacity: 1 }} // Scale to normal size and become visible
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            duration: 0.8, // Adjust duration for smoother effect
            delay: 2.8,
          }}>

        <Link href={'/'}>
          <Image src={logo} className='w-16 h-16'/>
        </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Header