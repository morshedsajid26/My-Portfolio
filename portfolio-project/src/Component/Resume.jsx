import React from "react";
import Container from "../Layer/Container";
import TitleHeader from "../Layer/TitleHeader";
import ResumeCard from "../Layer/ResumeCard";
import { FaDownload } from "react-icons/fa";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div
      id="resume"
      className="bg-white dark:bg-[#343a40] py-12 font-pop min-h-screen flex items-center"
    >
      <Container>
        {/* Title Header */}
        <TitleHeader Heading="Summary" Ptext="Resume" />

        {/* Education and Experience Section */}
        <div className="resume w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="education flex flex-col gap-6"
          >
            <h2 className="text-[#252b33] dark:text-white text-[24px] font-semibold">
              My Education
            </h2>

            <ResumeCard
              year="2023-2026"
              department="Computer Science and Engineering"
              institute="Daffodil Institute of IT"
              details="Education is running."
            />

            <ResumeCard
              year="2024"
              department="Frontend Development with React"
              institute="Creative IT Institute"
              details="Learned HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Next.js, and building responsive, dynamic web applications."
            />
          </motion.div>

          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="experience flex flex-col gap-6"
          >
            <h2 className="text-[#252b33] dark:text-white text-[24px] font-semibold">
              My Experience
            </h2>

            <ResumeCard
              year="2025-Now"
              department="Frontend Developer"
              institute="Fire AI - Betopia Group"
              details="Developing and maintaining user interfaces, ensuring responsive design, and optimizing performance for web applications."
            />
          </motion.div>
        </div>

        {/* Download CV Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 py-3 px-10 text-[#6c757d] hover:text-white hover:bg-[#6c757d]/85 transition-all duration-300 rounded-full font-pop border-[#6c757d] border-[1.6px] text-[16px] font-medium flex mx-auto"
          >
            <a
              href="/CV.Sajid.pdf"
              download="CV.Sajid.pdf"
              className="flex items-center justify-center gap-2"
            >
              Download CV
              <FaDownload />
            </a>
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Resume;
