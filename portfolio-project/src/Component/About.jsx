import React from "react";
import Container from "../Layer/Container";
import TitleHeader from "../Layer/TitleHeader";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-white dark:bg-[#343a40] py-[72px] h-screen flex items-center"
    >
      <Container>
        <TitleHeader Heading="About me" Ptext="Know me more" />

        <div className="aboutMe w-full flex flex-col lg:flex-row justify-between my-[48px] gap-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text w-full lg:w-full text-center "
          >
            <h2 className="font-pop text-[22px] md:text-[28px] font-semibold text-[#252b33] dark:text-white">
              I'm a<span className="text-[#20c997]"> Frontend Developer </span>
            </h2>
            <p className="font-pop text-[14px] md:text-[16px] mb-[18px] mt-[16px] text-[#4c4d4d] dark:text-white/50">
              I can help you with crafting clean, functional, and visually
              appealing user interfaces for your projects. Whether you need
              assistance building a responsive website, creating interactive
              components, or optimizing your application for better performance,
              I’m here to support you. I can also collaborate on projects,
              provide feedback on design and usability, and help solve frontend
              development challenges with creative solutions.
            </p>
            <p className="font-pop text-[14px] md:text-[16px] text-[#4c4d4d] dark:text-white/50">
              Delivering work depends on the scope and complexity of the
              project. For smaller tasks like fixing bugs or creating simple
              components, I can deliver within a few hours to a couple of days.
              For larger projects, such as designing and developing a full web
              application, I typically need 1-2 weeks or more, depending on the
              requirements. Clear communication and understanding of your needs
              will help me provide an accurate timeline for your project.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default About;
