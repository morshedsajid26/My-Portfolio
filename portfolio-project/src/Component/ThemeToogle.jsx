"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import userDarkMode from "../hooks/userDarkMode";

export default function ThemeToggle({ className }) {
  const { dark, toggleTheme } = userDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Fix hydration
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={toggleTheme}
      className={`
        relative 
        w-12 h-6           /* mobile */
        sm:w-14 sm:h-7     /* tablet */
        md:w-16 md:h-8     /* desktop */
        bg-gray-300 dark:bg-gray-700 
        rounded-full flex items-center cursor-pointer 
        transition-all duration-300 ${className}
      `}
    >
      {/* Moving circle */}
      <div
        className={`
          absolute top-1 left-1
          w-4 h-4               /* mobile circle */
          sm:w-5 sm:h-5         /* tablet */
          md:w-6 md:h-6         /* desktop */
          bg-white rounded-full shadow-md 
          flex items-center justify-center  
          transition-all duration-300
          ${dark ? "translate-x-[150%]" : "translate-x-0"}
        `}
      >
        {dark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </div>

      {/* Glow effect */}
      <div
        className={`
          absolute inset-0 rounded-full pointer-events-none 
          transition-opacity duration-300
          ${dark ? "opacity-90 bg-gradient-to-r from-[#20c997]/20 via-[#38e0bb]/25 to-[#b2fff7]/30" : "opacity-0"}
        `}
      ></div>
    </div>
  );
}
