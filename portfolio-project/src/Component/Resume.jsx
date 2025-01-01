import React from 'react';
import Container from '../Layer/Container';
import TitleHeader from '../Layer/TitleHeader';
import ResumeCard from '../Layer/ResumeCard';
import { FaDownload } from 'react-icons/fa';
import Skills from './Skills';

const Resume = () => {
  return (
    <div id='resume' className="bg-[#212529] py-12 font-pop">
      <Container>
        {/* Title Header */}
        <TitleHeader Heading="Summary" Ptext="Resume" />

        {/* Education and Experience Section */}
        <div className="resume w-full  grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Education */}
          <div className="education flex flex-col gap-6">
            <h2 className="text-white text-[24px] font-semibold">
              My Education
            </h2>

            <ResumeCard
              year="2023-2026"
              department="Computer Science and Engineering"
              institute="Daffodil Institute of IT"
              details="Education is running."
            />

            <ResumeCard
              year="2023-2024"
              department="Frontend Development with React"
              institute="Creative IT Institute"
              details="Learned HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Next.js, and building responsive, dynamic web applications."
            />
          </div>

          {/* Experience */}
          <div className="experience flex flex-col gap-6">
            <h2 className="text-white text-[24px] font-semibold">
              My Experience
            </h2>


            <p className='font-pop text-white text-center text-[20px] md:text-[24px]  font-medium'> No job experience. </p>
{/* 
            <ResumeCard
              year="2023-2026"
              department="Junior Frontend Developer"
              institute="Tech Solutions Ltd."
              details="Developed responsive web applications using React.js. "
            />

            <ResumeCard
              year="2023-2026"
              department="Freelance Web Developer"
              institute="Upwork & Fiverr"
              details="Worked with multiple clients to build and maintain websites. "
            /> */}
          </div>
        </div>

        {/* Skills Section */}
        <Skills className="my-12" />

        {/* Download CV Button */}
        <button className="py-3 px-10 text-[#6c757d] hover:text-[#ffffff] hover:bg-[#6c757d]/85 transition-all duration-300 rounded-full font-pop border-[#6c757d] border-[1.6px] text-[16px] font-medium flex mx-auto">
        
        <a href="/CV.Sajid.pdf" download="CV.Sajid.pdf" className='flex items-center justify-center gap-2'>
              Download CV
              <FaDownload />
         </a>

        </button>
      </Container>
    </div>
  );
};

export default Resume;
