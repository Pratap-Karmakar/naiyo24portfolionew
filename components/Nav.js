import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';
import { FaUsers } from 'react-icons/fa';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'Team',
    path: '/testimonials',
    icon: <FaUsers />
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <motion.nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 2,
        delay: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] backdrop-blur-sm text-3xl xl:text-xl xl:h-max py-8 bg-white/10 xl:rounded-full"
        initial={{ scaleY: 1.3 }}
        animate={{ scaleY: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
          duration: 1.5,
          delay: 0.8,
          ease: 'easeInOut',
        }}
      >
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && 'text-[#C7253E]'
            } relative flex items-center group hover:text-[#C7253E] transition-all duration-500`}
            href={link.path}
            key={index}
          >
            <div>
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-[#FFA700] relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize text-black">
                    {link.name}
                  </div>
                </div>
                {/* triangle */}
                <div className="border-solid border-l-8 border-y-transparent border-y-[6px] absolute right-[48.5px] mt-[5px] border-[#FFA700]"></div>
              </div>
              {/* icons */}
              {link.icon}
            </div>
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
