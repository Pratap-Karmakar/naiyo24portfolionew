

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen flex flex-col xl:flex-row items-center">
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center xl:justify-start">
        <div className="text-center xl:text-left">
          <h1 className="text-neutral-300 text-3xl md:text-4xl font-bold">
            Transforming Concepts into Seamless <span className="text-purple-400">User Experiences</span>
          </h1>
          <p className="text-neutral-400 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mt-6 mb-10 xl:mb-16">
            Building the Future, One Line of Code at a Time.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        {/* You can add your image here */}
        <img 
          src="path_to_image.jpg" 
          alt="User Experience" 
          className="w-full max-w-md xl:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Home;





// const Home = () => {
//   return <div className="bg-primary/60 h-full">
//     {/* text */}
//     <div className="w-full h-full">
//       <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
//         <h1 className="h-1 text-neutral-300">
//           Transforming Concepts into Seamless <span className="text-purple-400">User Experiences</span>
//         </h1>
//         <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
//         Building the Future, One Line of Code at a Time.
//         </p>
//       </div>
//     </div>

//     {/* image */}
//     <div></div>
//   </div>;
// };

// export default Home;
