import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import Image from "next/image";
import avatar from "../public/avatar.png";
import ParticlesContainer from "../components/ParticlesContainer";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col xl:flex-row items-center justify-center md:mx-16 xl:mx-24 mx-auto md:gap-10">
      {/* Particles Background */}
      <ParticlesContainer />

      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center xl:justify-start relative z-10">
        <div className="text-center xl:text-left">
          <motion.h1
            className="text-lg py-3"
            initial={{ x: "+100vw", opacity: 0 }} // Start from off-screen to the right
            animate={{ x: 0, opacity: 1 }} // Animate to the normal position
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.8, // Adjust duration for smoother effect
              delay: 1.3,
            }}
          >
            <span className="text-purple-400">Naiyo24</span>
            <span className="text-neutral-300">, Innovating Tomorrow, Today.</span>
          </motion.h1>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }} // Start from off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Animate to the normal position
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.8, // Adjust duration for smoother effect
              delay: 1.7,
            }}
          >
            <h1 className="text-neutral-300 text-3xl md:text-4xl font-bold">
              Transforming Concepts into Seamless{" "}
              <span className="text-purple-400">User Experiences</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: "+100vw", opacity: 0 }} // Start from off-screen to the right
            animate={{ x: 0, opacity: 1 }} // Animate to the normal position
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.8, // Adjust duration for smoother effect
              delay: 1.7,
            }}
            className="text-neutral-400 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mt-6 mb-10 xl:mb-16"
          >
            Building the Future, One Line of Code at a Time.
          </motion.div>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link href='/contact'><ProjectsBtn /></Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        {/* Using Next.js Image component with Framer Motion */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} // Start smaller and transparent
          animate={{ scale: 1, opacity: 1 }} // Scale to normal size and become visible
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            duration: 0.8, // Adjust duration for smoother effect
            delay: 2.5,
          }}
          className="relative z-10 flex items-center justify-center"
        >
          {/* Shadow Container */}
          <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-b from-black/30 via-black/40 to-[#F7AB0A]/10 rounded-full shadow-2xl"></div>

          {/* Avatar Image */}
          <Image
            src={avatar}
            alt="avatar"
            className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover rounded-full"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
