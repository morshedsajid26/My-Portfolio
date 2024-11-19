import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'
import { FaFacebookF, FaGithub, FaGoogle, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaPhone  } from 'react-icons/fa'
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='bg-[#343a40] py-[72px]'>
        <Container>
            <TitleHeader Heading='Contact' Ptext='Get in Touch'/>

            <div className='flex font-pop '>
                <div className='text w-[328px]'>
                   
                   <div className="address">
                   <h2 className='uppercase text-[21px] text-[#ffffff] font-[500] mb-4 '>Address</h2>
                    <p className='text-[#dee3e4] text-[16px] w-[190px]'>
                        House 42, Avenue 1, Block E, Mirpur 12, Dhaka 1216, Bangladesh
                    </p>
                   </div>

                    <div className=' my-4'>
                        
                        <p className='flex items-center gap-2 font-pop text-[#dee3e4] text-[16px]'>   
                        <span className='text-[#20c997] text-[18px]'>  
                            <FaPhone />
                            </span>
                         +880 1756899699
                        </p>

                        <p className='flex items-center gap-2 font-pop text-[#dee3e4] text-[16px]'>                      
                        <span className='text-[#20c997] text-[18px]' > 
                            <MdEmail />
                            </span>
                        <a href="neazmorshed407@gmail.com">
                        neazmorshed407@gmail.com
                        </a>
                        </p>
                    </div>

                    <div className="icon">
                        <h2 className='uppercase text-[21px] text-[#ffffff] font-[500] mb-4'>
                            follow me
                        </h2>

                        <ul className='flex text-[#dddddd] gap-2.5' >
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="#"><FaGithub /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="#"><FaFacebookF /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center'>
                                <a href="#"><FaLinkedinIn /></a>
                            </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="#"><FaGoogle /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="#"><FaInstagram /></a>
                                </li>
                            
                        </ul>
                    </div>



                </div>

                <div className='form  w-[988px]'>
                <h2 className='uppercase text-[21px] text-[#ffffff] font-[500] mb-4'>
                            send me a note
                        </h2>

                 <div className='flex justify-between '>
                    <input className='w-[471px] py-[13px] px-[15px]    outline-[#20c997] bg-[#232a31] rounded-[6px] text-[16px] text-white' type="text" placeholder='Name' />

                    <input className='w-[471px] py-[13px] px-[15px]  outline-[#20c997] bg-[#232a31] rounded-[6px] text-[16px] text-white' type="email" placeholder='Email' />
                    </div> 
                    
                    <textarea className='w-full h-20 py-[13px] px-[15px] outline-[#20c997] bg-[#232a31] rounded-[6px] text-[16px] text-white my-6'  placeholder='Tell us more about your needs........'></textarea>  

                    
                    <div className='text-center'>
                    <button className='py-3 px-10 bg-[#20c997] hover:bg-[#20c997]/85 transition-all duration-300 rounded-full font-pop text-[#ffffff] text-[16px] font-[500] '>
                        Send Message
                    </button> 
                        </div>   
                </div>
            </div>
        </Container>
        
    </div>
  )
  
}

export default Contact