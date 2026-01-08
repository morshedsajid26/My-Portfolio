"use client";

import React, { useEffect, useState } from "react";
import Li from "../Layer/Li";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToogle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⬅️ Universal text color logic
  const textColor = isScrolled
    ? "text-[#252b33] dark:text-white"
    : "text-[#252b33] dark:text-white";

  return (
    <nav
      className={`flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 fixed w-full z-30
      ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)] dark:bg-[#111111]/80  transition-all duration-700"
          : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="logo z-30">
        <h1
          className={`font-acme text-[24px] sm:text-[28px] lg:text-[30px] ${textColor}`}
        >
          <a href="#"> {`<MORSHED/>`}</a>
        </h1>
      </div>

      {/* Menu Section */}
      <div
        className={`
    menu absolute md:static gap-x-[35px] top-0 right-0
    h-screen md:h-full w-[50%] md:w-auto py-[170px] md:py-0

    -z-10 flex flex-col md:flex-row items-center justify-center gap-6
    transition-all duration-300 overflow-y-auto md:overflow-visible

    ${
      isMenuOpen
        ? "translate-x-0 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)] bg-white/50 dark:bg-[#111111]/90"
        : "translate-x-[100%] md:translate-x-0 bg-transparent backdrop-blur-none shadow-none"
    }

    md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:shadow-none
  `}
      >
        {/* LI items — Dynamic text color */}
        <Li liText="Home" href="#home" className={textColor} />
        <Li liText="About" href="#about" className={textColor} />
        <Li liText="Services" href="#services" className={textColor} />
        <Li liText="Resume" href="#resume" className={textColor} />
        <Li liText="Portfolio" href="#portfolio" className={textColor} />
        <Li liText="Contact" href="#contact" className={textColor} />

        {/* Mobile Social Icons */}
        <ul className={`mt-4 justify-end gap-4 md:hidden flex ${textColor}`}>
          <li>
            <a href="https://github.com/morshedsajid26">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/snmsajid26">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/neaz-morshed-sajid/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="icon flex items-center justify-center gap-4">
        <ThemeToggle />

        {/* Hamburger Icon */}
        <div className="md:hidden mt-[4px] mr-4 ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={24} className={textColor} />
            ) : (
              <FaBars size={24} className={textColor} />
            )}
          </button>
        </div>

        {/* Desktop Social Icons */}
        <ul className={`hidden md:flex justify-end gap-4 ${textColor}`}>
          <li>
            <a href="https://github.com/morshedsajid26">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/snmsajid26">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/neaz-morshed-sajid/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
