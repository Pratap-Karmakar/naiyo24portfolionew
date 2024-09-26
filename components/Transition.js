import { animate,easeInOut,motion } from "framer-motion";

const Transition = () => {

  const transitionVariants = {
    initial : {
      x: '100%',
      width : '100%'
    },
    animate : {
      x : '0%',
      width : '0%'
    },
    exit :{ 
      x : ['0%', '100%'],
      width : ['0%', '100%'],
    }
  }
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#821131]" variants={transitionVariants} initial = "initial" animate = "animate" exit = "exit" transition={{delay : 0.2, duration : 0.6, ease : 'easeInOut'}}>
        {/* <p className="text-black text-7xl text-center">Naiyo24</p> */}
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#C7253E]" variants={transitionVariants} initial = "initial" animate = "animate" exit = "exit" transition={{delay : 0.4, duration : 0.6, ease : 'easeInOut'}}>
        {/* <p className="text-black text-7xl text-center">Naiyo24</p> */}
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#E85C0D]" variants={transitionVariants} initial = "initial" animate = "animate" exit = "exit" transition={{delay : 0.6, duration : 0.6, ease : 'easeInOut'}}>
        {/* <p className="text-black text-7xl text-center">Naiyo24</p> */}
      </motion.div>
     
    </>
  );
};

export default Transition;
