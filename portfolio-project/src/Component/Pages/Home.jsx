import React from 'react'
import TextAnimation from '../Layer/TextAnimation'
import { FaAngleDown, FaChevronDown } from 'react-icons/fa'
import Container from '../Layer/Container'


const Home = () => {

  return (
    <div id='home' className='pb-20 pt-[200px] bg-[#343a40] text-center relative '>
    <Container className='pb-20'>
    <p className='text-[28px] font-medium text-white font-pop mb-4'>Welcome</p>
     
     <TextAnimation/>
     
     <p className='text-[21px] text-white font-pop mb-6 mt-4'>based in Dhaka, Bangladesh.</p>

    <a href="#contact">
    <button className='py-3 px-10 border-[1.6px] border-[#20c997] hover:bg-[#20c997]/85 transition-all duration-500 rounded-full font-pop  hover:text-[#ffffff] text-[#20c997] text-[16px] font-medium '>
                        Hire Me
                     
      </button> 
    </a>
    </Container>

      <div className=' absolute bottom-2  left-1/2 -translate-x-1/2 animate-bounce-slow'>
      <a href="#about">
      <FaChevronDown className='w-[20px] h-20 text-white font-black' />
      </a>
      </div>
     
    </div>
  )
}

export default Home