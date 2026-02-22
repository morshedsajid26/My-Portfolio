import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ image, name, techs, link, github, description, category }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white dark:bg-[#1a1c21] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-[#252b33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-[#252b33] rounded-full hover:bg-[#20c997] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white text-[#252b33] rounded-full hover:bg-[#20c997] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#20c997] px-2 py-1 bg-[#20c997]/5 rounded-md">
            {category || "Project"}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-[#252b33] dark:text-white mb-3 group-hover:text-[#20c997] transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="text-[11px] font-medium text-gray-500 dark:text-gray-500"
            >
              #{tech.replace(/\s+/g, '')}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
