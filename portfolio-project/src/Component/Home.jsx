import React, { useState } from 'react';
import TextAnimation from '../Layer/TextAnimation';
import { FaChevronDown } from 'react-icons/fa';
import Container from '../Layer/Container';

const Home = () => {
  const [color, setColor] = useState("transparent"); 

  const [border, setBorder] = useState("#20c997"); 

  const handleClick = (isButton) => {
    setColor(isButton ? "#0d6efd" : "transparent");
    setBorder(isButton ? "#0d6efd" : "#20c997");
  };

  return ( 
    <div 
      id='home' 
      className='py-[205px] md:py-[220px]  sm:pt-[200px] bg-[url(/public/sajid.jpg)] text-center relative bg-cover bg-no-repeat bg-center after:absolute after:content-[""] after:h-full after:w-full after:top-0 after:left-0 after:bg-black/40 z-0 after:-z-30' 
      onClick={() => handleClick(false)}
    >
      <Container className=' '>
        {/* Welcome Text */}
        <p className='text-[22px] sm:text-[28px] md:text-[32px] font-medium text-white font-pop mb-4 z-30 '>
          Welcome
        </p>

        {/* TextAnimation */}
        <TextAnimation className='z-30' />

        {/* Location Text */}
        <p className='text-[18px] sm:text-[21px] md:text-[24px] text-white font-pop mb-6 mt-4'>
          based in Dhaka, Bangladesh.
        </p>

        {/* Hire Me Button */}
        <a href="#contact">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click from firing
              handleClick(true); // Change to color when button is clicked
            }}
            style={{
              backgroundColor: color,
              color: "white",
              borderColor: border,
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#20c997")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = color)}
            className='py-3 px-8 sm:px-10 border-[1.6px] border-[#20c997] hover:bg-[#20c997]/85 transition-all duration-500 rounded-full font-pop hover:text-[#ffffff] text-[#20c997] text-[14px] sm:text-[16px] font-medium'
          >
            Hire Me
          </button>
        </a>
      </Container>

      {/* Down Arrow Icon */}
      <div className='absolute bottom-4 sm:bottom-2 left-[49.5%] -translate-x-[49.5%] animate-bounce-slow'>
        <a href="#about">
          <FaChevronDown className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] text-white font-black' />
        </a>
      </div>
    </div>
  );
};

export default Home;
