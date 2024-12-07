import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'
import ReviewCard from '../Layer/ReviewCard'

import client1 from '/client1.png'
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'


// function SampleNextArrow(props) {
//   const {  style, onClick } = props;
//   return (
//     <div
//       className='absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px] left-1/2 translate-x-1/2 bottom-[-150%] -translate-y-[-150%] md:left-[74px]  md:bottom-[-45px] md:-translate-y-[-45px] rounded-full items-center justify-center bg-[#FFFFFF] shadow  hover:bg-[#286F6C]  transition-all duration-300 cursor-pointer '
//       style={{ ...style, display: "flex", background: "" }}
//       onClick={onClick}
//     >
//       <div className='w-full h-full flex items-center justify-center text-[#23262F] hover:text-white transition-all duration-300'>
//         <FaArrowRight/>
//       </div>
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const {  style, onClick } = props;
//   return (
//     <div
//      className='absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px]  left-1/4 translate-x-1/3 bottom-[-150%] -translate-y-[-150%] md:left-0 md:translate-x-0  md:bottom-[-45px] md:-translate-y-[-45px] rounded-full items-center justify-center bg-[#FFFFFF] shadow hover:bg-[#286F6C]  transition-all duration-300 cursor-pointer '
//       style={{ ...style,display: "flex",background: "" }}
//       onClick={onClick}
//     >
//        <div className='w-full h-full flex items-center justify-center text-[#23262F] hover:text-white transition-all duration-300'>
//         <FaArrowLeft/>
//        </div>
//     </div>
//   );
// }




const settings = {
  dots: false,
    infinite: true,
    arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const Client = () => {

  const settings = {
    dots: false,
      infinite: true,
      arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };



  return (
    <div id='client' className='bg-[#212529] py-[72px]'>
         <Container>
        <TitleHeader Heading='testimonial' Ptext='client speak'/>

       <div className='max-w-[1296px] max-h-[295px] overflow-hidden flex' >
       


<Slider {...settings}>

<div className='max-w-[550px]  bg-[#111418] p-[48px] '>
        <div className='top flex items-center gap-4'>
            
                <img className="h-[65px] w-[65px] rounded-full" src={client1} alt="" />

            <div>
                <p className='text-[16px] font-semibold font-pop text-[#ffffff] '>
                Sajid
                </p>
                <p className='text-[16px] font-medium font-pop text-[#ffffff]/50'>
                    User from Usa
                </p>
            </div>

         </div>

         <p className='text-[16px] font-normal font-pop text-[#dee3e4] my-6 '>
         “Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”
            </p>

            <span className='text-[#ffc107] flex gap-1'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            
            </span>
    </div>

    <div className='max-w-[550px]  bg-[#111418] p-[48px] '>
        <div className='top flex items-center gap-4'>
            
                <img className="h-[65px] w-[65px] rounded-full" src={client1} alt="" />

            <div>
                <p className='text-[16px] font-semibold font-pop text-[#ffffff] '>
                Sajid
                </p>
                <p className='text-[16px] font-medium font-pop text-[#ffffff]/50'>
                    User from Usa
                </p>
            </div>

         </div>

         <p className='text-[16px] font-normal font-pop text-[#dee3e4] my-6 '>
         “Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”
            </p>

            <span className='text-[#ffc107] flex gap-1'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            
            </span>
    </div>



  

    

   

   

   
      </Slider>
       </div>


      
        </Container>
    </div>
  )
}

export default Client