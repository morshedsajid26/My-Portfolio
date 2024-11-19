import React from 'react'
import Li from './Layer/Li'

import { FaFacebookF,FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-3 py-4 bg-black '>
      <div className="  logo w-[309px]"> 
        <h1 className='font-pop text-[30px] text-[#FAFAFA]'> Portfolio </h1>
      </div>
      <div className="  menu w-[615px] flex justify-between ">
        <Li liText='Home' />
        <Li liText='About' href='/about'/>
        <Li liText='Services' href='/services'/>
        <Li liText='Resume' href='/resume'/>
        <Li liText='Portfolio' href='/portfolio'/>
        <Li liText='Client' href='client'/>
        <Li liText='Contact' href='contact'/>

      </div>
      <div className=" icon w-[309px]">
        <ul className='flex justify-end gap-3 text-[#FAFAFA] '>
          <li className='w-[26px] h-[26px] flex items-center justify-center '>
            <a href="#"><FaGithub /></a>
            </li>
          <li className='w-[26px] h-[26px] flex items-center justify-center '>
            <a href="#"><FaFacebookF /></a>
            </li>
          <li className='w-[26px] h-[26px] flex items-center justify-center'>
            <a href="#"><FaLinkedinIn /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar