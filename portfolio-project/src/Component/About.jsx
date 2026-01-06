import React from "react";
import Container from "../Layer/Container";
import TitleHeader from "../Layer/TitleHeader";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-white dark:bg-[#212529] py-[72px] h-screen flex items-center"
    >
      <Container>
        <TitleHeader Heading="About me" Ptext="Know me more" />

        {/* About Me Section */}
        <div className="aboutMe w-full flex flex-col lg:flex-row justify-between my-[48px] gap-6 mx-auto">
          {/* Text Section */}
          <div className="text w-full lg:w-full text-center ">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              className="font-pop text-[22px] md:text-[28px] font-semibold text-[#252b33] dark:text-white"
            >
              I'm a<span className="text-[#20c997]"> Frontend Developer </span>
            </motion.h2>
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
          </div>

          {/* Details Section */}
          {/* <div className="details w-full lg:w-[35%]">
            <ul className="font-pop text-[14px] md:text-[16px] text-[#dee3e4] font-bold mb-4">
              <li className="border-b border-[#ffffff]/20 py-3">
                Name: <span className="font-normal">Syed Neaz Morshed Sajid</span>
              </li>
              <li className="border-b border-[#ffffff]/20 py-3">
                Email: 
                <span className="font-normal text-[#20c997]">
                  <a href="mailto:neazmorshed407@gmail.com"> neazmorshed407@gmail.com</a>
                </span>
              </li>
              <li className="border-b border-[#ffffff]/20 py-3">
                Age: <span className="font-normal">24</span>
              </li>
              <li className="py-3">
                From: <span className="font-normal">Dhaka, Bangladesh</span>
              </li>
            </ul>
            <button  className="py-3 px-8 md:px-10 bg-[#20c997] hover:bg-[#20c997]/85 transition-all duration-300 rounded-full font-pop text-[#ffffff] text-[14px] md:text-[16px] font-medium">
              <a href="/CV.Sajid.pdf" download="CV.Sajid.pdf">
              Download CV
              </a>
            </button>
          </div> */}
        </div>

        {/* Experience Section */}
        {/* <div className="experience w-full grid grid-cols-2  md:grid-cols-4 text-center font-pop gap-4 md:gap-0">
          <div className="one border-white/15 border-r-[.8px] md:border-r-[.8px] border-dotted py-5">
            <h2 className="text-[36px] md:text-[48px] font-medium text-[#ffffff]/50">10+</h2>
            <p className="text-[#dee3e4] text-[14px] md:text-[16px]">Years Experience</p>
          </div>
          <div className="one border-white/15  md:border-r-[.8px] border-dotted py-5">
            <h2 className="text-[36px] md:text-[48px] font-medium text-[#ffffff]/50">250+</h2>
            <p className="text-[#dee3e4] text-[14px] md:text-[16px]">Happy Clients</p>
          </div>
          <div className="one border-white/15 border-r-[.8px] md:border-r-[.8px] border-dotted py-5">
            <h2 className="text-[36px] md:text-[48px] font-medium text-[#ffffff]/50">650+</h2>
            <p className="text-[#dee3e4] text-[14px] md:text-[16px]">Projects Done</p>
          </div>
          <div className="one py-5">
            <h2 className="text-[36px] md:text-[48px] font-medium text-[#ffffff]/50">38</h2>
            <p className="text-[#dee3e4] text-[14px] md:text-[16px]">Get Awards</p>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default About;
