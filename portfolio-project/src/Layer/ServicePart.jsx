import React from "react";
import { motion } from "framer-motion";

const ServicePart = ({ Heading, pText, icon, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className={`flex sm:flex-row items-start sm:items-center gap-x-4 gap-y-4 w-full sm:w-auto p-6 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-[#252b33] hover:shadow-xl dark:hover:shadow-none ${className}`}
    >
      {/* Icon Section */}
      <div
        className="icon w-[70px] min-w-[70px] h-[70px] text-[#20c997] bg-white dark:bg-[#343a40] shadow-md dark:shadow-none flex items-center justify-center rounded-lg transition-colors group-hover:bg-[#20c997] group-hover:text-white"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Text Section */}
      <div className="text font-pop w-full">
        <h2 className="text-[#252b33] dark:text-white text-[18px] sm:text-[20px] font-medium mb-2">
          {Heading}
        </h2>
        <p className="text-[14px] sm:text-[16px] text-[#4c4d4d] dark:text-white/50 leading-relaxed text-balance">
          {pText}
        </p>
      </div>
    </motion.div>
  );
};

export default ServicePart;
