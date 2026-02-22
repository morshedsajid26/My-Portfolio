import React, { useState } from "react";
import Container from "../Layer/Container";
import ProjectCard from "./ProjectCard";
import TitleHeader from "../Layer/TitleHeader";
import { motion, AnimatePresence } from "framer-motion";

import orebi from "/Orebi.png";
import furnishop from "/Furnishop.png";
import agenc from "/Agenc.png";
import gericht from "/Gericht.png";
import UNIAO from "/UNIAO.png";

const projects = [
  {
    image: orebi,
    name: "OREBI E-Commerce",
    category: "E-Commerce",
    techs: ["React", "Tailwind CSS", "Redux",],
    description: "A premium e-commerce platform featuring complex filtering, cart management, and a high-performance checkout flow.",
    link: "https://orebi-one.vercel.app/",
  },
  {
    image: gericht,
    name: "Gericht Fine Dining",
    category: "Landing Page",
    techs: ["React", "CSS3", "Framer Motion"],
    description: "A visually stunning immersive web experience for high-end dining, focusing on elegant typography and transitions.",
    link: "https://gericht-food-restaurant.vercel.app/",
  },
  {
    image: UNIAO,
    name: "UNIAO Agency",
    category: "Landing Page",
    techs: ["React", "Framer Motion", "Tailwind"],
    description: "A bold, modern agency portfolio designed to showcase high-impact services and creative excellence.",
    link: "https://uniao-one.vercel.app/",
  },
  {
    image: furnishop,
    name: "FurniShop Interiors",
    category: "Landing Page",
    techs: ["React", "Tailwind CSS", "AOS"],
    description: "Minimalist digital storefront for interior brands, emphasizing clean visual hierarchy and lightning-fast speed.",
    link: "https://furni-shop-snms.vercel.app",
  },
  {
    image: agenc,
    name: "Agenc Creative",
    category: "Landing Page",
    techs: ["HTML5", "Bootstrap 5", "jQuery"],
    description: "Performance-oriented professional landing page for creative agencies establishment.",
    link: "https://agenc-snms.vercel.app/",
  }
];

const categories = ["All", "E-Commerce",  "Landing Page", "Dashboard"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#f8f9fa] dark:bg-[#212529] py-20 md:py-32">
      <Container>
        <TitleHeader 
          className="mb-16 md:mb-24" 
          Heading="portfolio" 
          Ptext="My Work" 
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative pb-2 text-sm md:text-base font-bold tracking-tight transition-colors duration-300 ${
                activeCategory === cat 
                ? "text-[#20c997]" 
                : "text-gray-400 hover:text-[#252b33] dark:hover:text-white"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#20c997]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                {...project}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;
