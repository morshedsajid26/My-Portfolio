import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'

const About = () => {
  return (
    <div className='bg-[#212529] py-[72px]'>
        <Container>
            <TitleHeader Heading='About me' Ptext='Know me more'/>

            <div className="aboutMe flex justify-between my-[48px]">
                <div className="text w-[856px]"> 
                    <h2 className='font-pop text-[28px] font-semibold text-[#ffffff]'>I'm 
                        <span className='text-[#20c997]'> Syed Neaz Morshed Sajid, </span>
                          a Frontend Web Developer
                        </h2>


                     <p className='font-pop text-[16px] mb-[18px] mt-[16px] text-[#ffffff]/50'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                     <p className='font-pop text-[16px] text-[#ffffff]/50'>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>   
                </div>
                
                <div className="details w-[391px]">
                    <ul className='font-pop text-[16px] text-[#dee3e4] font-bold mb-4'>
                        <li className='border-b border-[#ffffff]/20 py-3'>Name: 
                            <span className='font-normal'>  Syed Neaz Morshed Sajid</span>
                            </li>
                        
                        <li className='border-b border-[#ffffff]/20 py-3' >Email: 
                            <span className='font-normal text-[#20c997]'>  
                                <a href="neazmorshed407@gmail.com"> neazmorshed407@gmail.com</a>
                            </span>
                            </li>
                        
                        <li className='border-b border-[#ffffff]/20 py-3' >Age:  
                            <span className='font-normal'>  24</span>
                            </li>
                        
                        <li className='py-3' >From: 
                            <span className='font-normal'>  Dhaka, Bangladesh</span>
                            </li>
                    </ul>

                    <button className='py-3 px-10 bg-[#20c997] hover:bg-[#20c997]/85 transition-all duration-300 rounded-full font-pop text-[#ffffff] text-[16px] font-[500]'>
                        Download CV
                    </button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About