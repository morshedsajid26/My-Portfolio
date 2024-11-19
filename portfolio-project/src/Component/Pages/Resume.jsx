import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'
import ResumeCard from '../Layer/ResumeCard'
import Skills from '../Skills'
import { FaDownload } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className='bg-[#212529] py-[72px] font-pop'>
         <Container>
        <TitleHeader Heading='summary' Ptext='resume'/>

        <div className='Resume flex justify-between mt-6  '>
            <div className="left w-[624px] flex flex-col gap-6">
                <h2 className='text-white text-[24px] font-semibold'>My Education</h2>

                <ResumeCard
                year='2023-2026'
                department='Computer Science and Engineering'
                institute='Daffodil Institue of IT'
                details='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'/>

                <ResumeCard
                year='2023-2024'
                department='Frontend Development with React'
                institute='Creative IT Institue'
                details='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'/>

            </div>


            <div className="left w-[624px] flex flex-col gap-6">
                <h2 className='text-white text-[24px] font-semibold'>My Experience</h2>

                <ResumeCard
                year='2023-2026'
                department='Computer Science and Engineering'
                institute='Daffodil Institue of IT'
                details='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'/>

                <ResumeCard
                year='2023-2026'
                department='Computer Science and Engineering'
                institute='Daffodil Institue of IT'
                details='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'/>

            </div>

        </div>

        <Skills className='my-12'/>

        
        <button className='py-3 px-10 text-[#6c757d] hover:text-[#ffffff] hover:bg-[#6c757d]/85 transition-all duration-300 rounded-full font-pop border-[#6c757d] border-[1.6px] text-[16px] font-[500] flex items-center justify-center text-center mx-auto gap-2 '>
                        Download CV
                        <FaDownload />
        </button> 
        

        
        </Container>
    </div>
  )
}

export default Resume