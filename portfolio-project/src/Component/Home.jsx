import React, { useState } from "react";
import TextAnimation from "../Layer/TextAnimation";
import { FaChevronDown } from "react-icons/fa";
import Container from "../Layer/Container";
import { motion } from "framer-motion";
import ParticlesBg from "./ParticleCanvas";
import SpotlightOverlay from "./SpotlightOverlay";
import ParticleCanvas from "./ParticleCanvas";

const Home = () => {
  const [color, setColor] = useState("transparent");
  const [border, setBorder] = useState("#20c997");

  const handleClick = (isButton) => {
    setColor(isButton ? "#0d6efd" : "transparent");
    setBorder(isButton ? "#0d6efd" : "#20c997");
  };

  return (
    <div
      id="home"
      className="relative h-screen flex items-center  bg-cover bg-center overflow-hidden bg-[#f8f9fa] dark:bg-[#343a40]"
      onClick={() => handleClick(false)}
    >
      {/* bg-[url(/public/sajid.jpg)] */}
      {/* 🔹 PARTICLES BACKGROUND */}

      {/* <ParticleCanvas /> */}

      {/* <SpotlightOverlay /> */}

      {/* 🔹 DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/30 dark:bg-black/45 z-[5]  pointer-events-none" /> */}

      {/* 🔹 CONTENT */}
      <Container className="relative z-20 text-center flex flex-col-reverse md:flex-row  items-center justify-between gap-10 md:gap-20 ">
        <div className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px]">
          <p className="text-[22px] sm:text-[28px] md:text-[32px] font-medium text-[#252b33] dark:text-white font-pop mb-4">
          Welcome
        </p>

        <TextAnimation />

        <p className="text-[18px] sm:text-[21px] md:text-[24px] text-[#252b33] dark:text-white font-pop mb-6 mt-4">
          based in Dhaka, Bangladesh.
        </p>

        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(true);
            }}
            style={{
              backgroundColor: color,
              borderColor: border,
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#20c997")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = color)}
            className="py-3 px-8 sm:px-10 border-[1.6px] rounded-full font-pop transition-all duration-500 text-[#20c997] hover:text-white"
          >
            Hire Me
          </motion.button>
        </a>
        </div>
        <div>

         <div className="relative">
           <div  className=" border md:w-[520px] w-[350px] h-[350px] md:h-[520px]  border-[#20c997] rounded-full   animate-spin-slow"> 

            {/* Rotating ring + dots */}
      {/* <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-yellow-400 animate-spin-slow"> */}
        
        {/* Left dot */}
        <span className="absolute top-1/2 -left-[10px] md:-left-[20px] w-[20px]  md:w-[40px] h-[20px] md:h-[40px] bg-[#20c997] rounded-full -translate-y-1/2" />
        
        {/* Right dot */}
        <span className="absolute top-1/2 -right-[10px] md:-right-[20px] w-[20px] md:w-[40px] h-[20px] md:h-[40px] bg-[#20c997] rounded-full -translate-y-1/2" />
      {/* </div> */}

          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#20c997] rounded-full  bg-[url(/public/sajidImage.png)]  bg-cover bg-no-repeat md:w-[450px] md:h-[450px] w-[300px] h-[300px] ">
         

          </div>
         </div>


       
        </div>
      </Container>

      {/* 🔹 DOWN ARROW */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <a href="#about">
          <FaChevronDown className="w-[25px] h-[25px] text-black dark:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Home;
