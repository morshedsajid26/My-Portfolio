import React from 'react'

import { RiComputerLine } from "react-icons/ri";
import { HiLink, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { PiPaletteBold } from 'react-icons/pi';
import { FaMobileAlt } from 'react-icons/fa';
import { IoBugOutline } from 'react-icons/io5';
import Container from '../Layer/Container';
import TitleHeader from '../Layer/TitleHeader';
import ServicePart from '../Layer/ServicePart';

const Services = () => {
  return (
    <div id='services' className='bg-[#f8f9fa] dark:bg-[#343a40] py-[72px] min-h-screen flex items-center'>
        <Container>
        <TitleHeader className='md:mb-20 mb-10 '  Heading='services' Ptext='What i do?'/>

        <div className='w-full grid md:grid-cols-2 gap-12'>

            <ServicePart 
            icon={<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Web Development' 
            pText='Building unique website tailored to specific business needs and branding.'
            />

            <ServicePart 
            icon={<FaMobileAlt className='h-[30px] w-[33px]' />}  
            Heading='Responsive Design' 
            pText='Ensuring the website looks and works well on all devices (desktop, tablet, mobile).'
            />

            <ServicePart 
            icon={<PiPaletteBold className='h-[30px] w-[33px]' />}  
            Heading='UI/UX Implementation' 
            pText='Transform design mockups (Figma, Adobe XD, etc.) into fully functional web pages.'
            />

            <ServicePart 
            icon={<IoBugOutline className='h-[30px] w-[33px]' />}  
            Heading='Code Debugging and Maintenance' 
            pText='Fix bugs, enhance existing features, and ensure smooth functionality.'
            />

            <ServicePart 
            icon={<HiLink className='h-[30px] w-[33px]' />}  
            Heading='Integration Services' 
            pText='Connecting the frontend with APIs or backends to enable data fetching and interactivity.'
            />

            <ServicePart 
            icon={<HiOutlineRocketLaunch className='h-[30px] w-[33px]' />}  
            Heading='Version Control and Deployment' 
            pText='Use tools like Git for code management and deploy websites seamlessly.'
            />

        </div>

        </Container>
    </div>
  )
}

export default Services
