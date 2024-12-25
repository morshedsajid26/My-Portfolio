import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'


import orebi from '/Orebi.png'
import furnishop from '/Furnishop.png'
import agenc from '/Agenc.png'


import Slider from 'react-slick'
import { FiExternalLink } from 'react-icons/fi'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaArrowLeftLong } from 'react-icons/fa6'








function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      className='absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px] right-[580px] -bottom-10  md:-bottom-[60px] rounded-full items-center justify-center bg-[#FFFFFF] shadow  hover:bg-[#20c997]  transition-all duration-500 cursor-pointer  z-10  '
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div className='w-full h-full flex items-center justify-center transition-all duration-300'>
        <FaArrowRight/>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
     className='absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px] -bottom-10 left-[580px] md:-bottom-[60px] rounded-full items-center justify-center bg-[#FFFFFF] shadow hover:bg-[#20c997]  transition-all duration-500 cursor-pointer z-10  '
      style={{ ...style,display: "flex",background: "" }}
      onClick={onClick}
    >
       <div className='w-full h-full flex items-center justify-center transition-all duration-300'>
        <FaArrowLeft/>
       </div>
    </div>
  );
}





const Portfolio = () => {

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  
  return (
    <div id='portfolio' className='bg-[#343a40] pt-[72px] pb-[100px]'>
         <Container>
        <TitleHeader Heading='portfolio' Ptext='my work'/>

        <div className='w-full md:max-w-[1296px]  h-[300px] flex flex-col gap-[48px]  '>
  
        
        <Slider {...settings}>

        
       
         <div className={` relative   font-pop`}>
             
               <img className='w-full md:max-w-[624px] h-[230px]  md:h-[300px] rounded-lg  ' src={orebi}  alt="" />
       
               <div className=' absolute w-full md:max-w-[624px]   h-[230px]  md:h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  '>
       
               
       
               <h3 className='text-[30px] md:text-[40px] text-white/70 text-center'>OREBI</h3>
       
               <div className='mx-auto my-5'>
       
               <h3 className='text-[18px] md:text-[22px] text-white/70 text-center'>Technologies</h3>
       
       
               <div className="tools flex gap-2 mt-5  ">
                 <h5 className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px]'>HTML5</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>Tailwind CSS</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>JavaScript</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>React</h5>       
               </div>
       
               </div>
       
              <div className=' flex justify-between'>
              
       
       
               <div className=' px-[10px] md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8'  >
               <a className='flex justify-center items-center gap-2 text-[12px] md:text-[16px]' href=""> <p>Live Link</p>
               <FiExternalLink  />
               </a>
               </div>
              </div>
       
               
       
       
               </div>
               
           </div>


           


           <div className={` relative  font-pop`}>
             
               <img className='w-full md:max-w-[624px]  h-[230px]  md:h-[300px] rounded-lg  ' src={furnishop}  alt="" />
       
               <div className=' absolute w-full md:max-w-[624px]   h-[230px]  md:h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  '>
       
               
       
               <h3 className='text-[30px] md:text-[40px] text-white/70 text-center'>FurniShop</h3>
       
               <div className='mx-auto my-5'>
       
               <h3 className='text-[18px] md:text-[22px] text-white/70 text-center'>Technologies</h3>
       
       
               <div className="tools flex gap-2 mt-5  ">
                 <h5 className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px]'>HTML5</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>Tailwind CSS</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>JavaScript</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>React</h5>       
               </div>
       
               </div>
       
              <div className=' flex justify-between'>
              
       
       
               <div className=' px-[10px] md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8'  >
               <a className='flex justify-center items-center gap-2 text-[12px] md:text-[16px]' href="https://furni-shop-snms.vercel.app/"> <p>Live Link</p>
               <FiExternalLink  />
               </a>
               </div>
              </div>
       
               
       
       
               </div>
               
           </div>


           <div className={` relative  font-pop`}>
             
               <img className='w-full md:max-w-[624px]  h-[230px]  md:h-[300px] rounded-lg  ' src={agenc}  alt="" />
       
               <div className=' absolute w-full md:max-w-[624px]   h-[230px]  md:h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  '>
       
               
       
               <h3 className='text-[30px] md:text-[40px] text-white/70 text-center'>Agenc</h3>
       
               <div className='mx-auto my-5'>
       
               <h3 className='text-[18px] md:text-[22px] text-white/70 text-center'>Technologies</h3>
       
       
               <div className="tools flex gap-2 mt-5  ">
                 <h5 className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px]'>HTML5</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>Bootstrap</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>jquery</h5>
                 <h5  className=' px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]'>JavaScript</h5>       
               </div>
       
               </div>
       
              <div className=' flex justify-between'>
              
       
       
               <div className=' px-[10px] md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8'  >
               <a className='flex justify-center items-center gap-2 text-[12px] md:text-[16px]' href="https://agenc-snms.vercel.app/"> <p>Live Link</p>
               <FiExternalLink  />
               </a>
               </div>
              </div>
       
               
       
       
               </div>
               
           </div>


             





               </Slider>

      </div>
      

       

        </Container>
    </div>
  )
}

export default Portfolio