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
      className="relative h-screen flex items-center bg-[url(/public/sajid.jpg)] bg-cover bg-center overflow-hidden"
      onClick={() => handleClick(false)}
    >
      {/* 🔹 PARTICLES BACKGROUND */}

      <ParticleCanvas />

      {/* <SpotlightOverlay /> */}

      {/* 🔹 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/45 z-[5]  pointer-events-none" />

      {/* 🔹 CONTENT */}
      <Container className="relative z-10 text-center">
        <p className="text-[22px] sm:text-[28px] md:text-[32px] font-medium text-white font-pop mb-4">
          Welcome
        </p>

        <TextAnimation />

        <p className="text-[18px] sm:text-[21px] md:text-[24px] text-white font-pop mb-6 mt-4">
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
      </Container>

      {/* 🔹 DOWN ARROW */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <a href="#about">
          <FaChevronDown className="w-[25px] h-[25px] text-white" />
        </a>
      </div>
    </div>
  );
};

export default Home;
