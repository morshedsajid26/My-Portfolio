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

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionIds = ["home", "about", "services", "resume", "portfolio", "contact"];
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // ⬅️ Universal text color logic
  const textColor = isScrolled
    ? "text-[#252b33] dark:text-white"
    : "text-[#252b33] dark:text-white";

  return (
    <nav
      className={`flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 fixed w-full z-30
      ${
        // backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)]
        isScrolled
          ? "bg-white/80  dark:bg-[#111111]/80  transition-all duration-700"
          : "bg-transparent "
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
        <Li liText="Home" href="#home" className={textColor} active={activeSection === "home"} />
        <Li liText="About" href="#about" className={textColor} active={activeSection === "about"} />
        <Li liText="Services" href="#services" className={textColor} active={activeSection === "services"} />
        <Li liText="Resume" href="#resume" className={textColor} active={activeSection === "resume"} />
        <Li liText="Portfolio" href="#portfolio" className={textColor} active={activeSection === "portfolio"} />
        <Li liText="Contact" href="#contact" className={textColor} active={activeSection === "contact"} />

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
