import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'
import ServicePart from '../Layer/ServicePart'

import { RiComputerLine } from "react-icons/ri";




const Services = () => {
  return (
    <div className='bg-[#343a40] py-[72px]'>
        <Container>
        <TitleHeader Heading='services' Ptext='what i do?'/>

        <div className='flex justify-between'>
        <div className='left flex flex-col gap-12'>
            
            <ServicePart 
            icon= {<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Web Development' 
            pText='Building unique website tailored to specific business needs and branding.
            '/>

            <ServicePart 
            icon= {<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Responsive Design' 
            pText='Ensuring the website looks and works well on all devices (desktop, tablet, mobile).
            '/>


            <ServicePart 
            icon= {<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Integration Services' 
            pText='Connecting the frontend with APIs or backends to enable data fetching and interactivity.
            '/>
           
          
        </div>

        <div className='right flex flex-col gap-12'>
            
            <ServicePart 
            icon= {<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Web Development' 
            pText='Building unique website tailored to specific business needs and branding.
            '/>

            <ServicePart 
            icon= {<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Responsive Design' 
            pText='Ensuring the website looks and works well on all devices (desktop, tablet, mobile).
            '/>


            <ServicePart 
            icon= {<RiComputerLine className='h-[30px] w-[33px]' />}  
            Heading='Integration Services' 
            pText='Connecting the frontend with APIs or backends to enable data fetching and interactivity.
            '/>
           
          
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Services