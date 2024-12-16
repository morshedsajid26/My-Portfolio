import React, { useState } from 'react';
import Li from './Layer/Li';

import { FaFacebookF, FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-[#111111] fixed w-full z-30">
      {/* Logo Section */}
      <div className="logo z-30 ">
        <h1 className="font-pop text-[24px] sm:text-[28px] lg:text-[30px] text-[#FAFAFA]">
          <a href="#services">Portfolio</a>
        </h1>
      </div>

      

      {/* Menu Section */}
      <div
        className={`menu absolute md:static gap-x-[35px] top-full left-0 h-[50%] md:h-full w-full md:w-auto py-[170px] md:py-0  bg-[#111111f4] z-10 flex flex-col md:flex-row items-center justify-center gap-6 transition-all duration-300 overflow-y-auto md:overflow-visible ${
          isMenuOpen ? 'translate-y-0 ' : '-translate-y-[200%]  md:translate-y-0'
        } `}
      >
        <Li liText="Home" href="#home" />
        <Li liText="About" href="#about" />
        <Li liText="Services" href="#services" />
        <Li liText="Resume" href="#resume" />
        <Li liText="Portfolio" href="#portfolio" />
        <Li liText="Client" href="#client" />
        <Li liText="Contact" href="#contact" />
      </div>

      {/* Icon Section */}
      <div className="icon flex items-center justify-center">

        {/* Hamburger Icon */}
      <div className="md:hidden mt-[4px] mr-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes size={24} color="#FAFAFA" /> : <FaBars size={24} color="#FAFAFA" />}
        </button>
      </div>


        <ul className="flex justify-end gap-4 text-[#FAFAFA]">
          <li className="w-[26px] h-[26px] flex items-center justify-center">
            <a href="https://github.com/morshedsajid26" aria-label="GitHub">
              <FaGithub />
            </a>
          </li>
          <li className="w-[26px] h-[26px] flex items-center justify-center">
            <a href="https://www.facebook.com/snmsajid26" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </li>
          <li className="w-[26px] h-[26px] flex items-center justify-center">
            <a href="https://www.linkedin.com/in/neaz-morshed-sajid/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
