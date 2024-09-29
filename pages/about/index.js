"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'


export default function About() {

  return (
    <div className="min-h-screen mt-11 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          NAIYO24 PRIVATE LIMITED
        </span>
      </motion.h2>

      <motion.h3
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Innovating Your Digital Presence
      </motion.h3>

      <motion.p
        className="text-lg text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        At NAIYO24 PRIVATE LIMITED, we&apos;re committed to transforming your digital dreams into reality. As a leading
        provider of online application and website development services, our mission is to deliver cutting-edge
        solutions that propel your business forward in the digital world.
      </motion.p>

      
    </div>
  )
}