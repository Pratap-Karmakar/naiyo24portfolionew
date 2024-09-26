import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import Image from "next/image";
import avatar from "../public/avatar.png";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col xl:flex-row items-center md:mx-16 xl:mx-24 mx-auto md:gap-10">
      {/* Particles Background */}
      <ParticlesContainer />

      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center xl:justify-start relative z-10">
        <div className="text-center xl:text-left">
          <motion.h1
            className="text-lg py-3"
            initial={{ x: "+100vw", opacity: 0 }} // Start from off-screen to the left
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
            initial={{ x: "+100vw", opacity: 0 }} // Start from off-screen to the left
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
            <ProjectsBtn />
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
          className="relative z-10 mt-[-20px] md:mt-0 w-full max-w-md xl:max-w-lg" // Adjust width for responsiveness
        >
          <Image
            src={avatar}
            alt="User Experience"
            className="w-full h-auto object-contain"
            layout="responsive"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
