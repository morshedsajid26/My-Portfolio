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
      className={`relative w-16 h-8 bg-gray-300 dark:bg-gray-700 
        rounded-full flex items-center cursor-pointer 
        transition-all duration-300 ${className}`}
    >
      {/* Moving circle */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-white 
          rounded-full shadow-md flex items-center justify-center 
          transition-all duration-300
          ${dark ? "translate-x-8" : "translate-x-0"}`}
      >
        {dark ? <FiMoon size={16} /> : <FiSun size={16} />}
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full pointer-events-none 
          transition-opacity duration-300
          ${dark ? "opacity-90 bg-gradient-to-r from-[#20c997]/20 via-[#38e0bb]/25 to-[#b2fff7]/30" : "opacity-0"}`}
      ></div>
    </div>
  );
}
