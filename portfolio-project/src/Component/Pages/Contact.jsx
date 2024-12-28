import React, { useState } from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'
import { FaFacebookF, FaGithub, FaGoogle,  FaInstagram, FaLinkedinIn, FaPhone  } from 'react-icons/fa'
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzDEXRIytPiXQ7JcBzf40geoaqEOiLJUKZQDQG00Ntc-5CzYPW14mQg2XL6CZHz_g2Q/exec", 
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    if (result.status === "success") {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send the message. Please try again.");
    }
  };


  return (
    <div id='contact' className='bg-[#343a40] py-[72px]'>
        <Container>
            <TitleHeader Heading='Contact' Ptext='Get in Touch'/>

            <div className='md:flex font-pop '>
                <div className='text md:w-[328px] hidden md:block'>
                   
                   <div className="address">
                   <h2 className='uppercase text-[21px] text-[#ffffff] font-medium mb-4 '>Address</h2>
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
                        <a href="mailto:neazmorshed407@gmail.com">
                        neazmorshed407@gmail.com
                        </a>
                        </p>
                    </div>

                    <div className="icon">
                        <h2 className='uppercase text-[21px] text-[#ffffff] font-medium mb-4'>
                            follow me
                        </h2>

                        <ul className='flex text-[#dddddd] gap-2.5' >
                        <li className="w-[26px] h-[26px] flex items-center justify-center">
                                       <a href="https://github.com/morshedsajid26" aria-label="GitHub">
                                         <FaGithub />
                                       </a>
                                     </li>

                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="https://www.facebook.com/snmsajid26" aria-label='Facebook'><FaFacebookF /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center'>
                                <a href="https://www.linkedin.com/in/neaz-morshed-sajid" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="mailto:neazmorshed407@gmail.com"><FaGoogle /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="https://www.instagram.com/neaz_morshed_sajid" aria-label="Instagram"><FaInstagram /></a>
                                </li>
                        </ul>
                    </div>



                </div>

                <form onSubmit={handleSubmit} className='form  md:w-[988px]'>
                <h2 className='uppercase text-[21px] text-[#ffffff] font-medium mb-4'>
                            send me a note
                        </h2>

                 <div className='flex flex-col md:flex-row md:flex gap-y-6 md:gap-y-0 justify-between '>
                    <input className='md:w-[471px] py-[13px] px-[15px]    outline-[#20c997] bg-[#232a31] rounded-[6px] text-[16px] text-white' type="text" placeholder='Name' name='name'  value={formData.name}
        onChange={handleChange}
        required/>

                    <input className='md:w-[471px] py-[13px] px-[15px]  outline-[#20c997] bg-[#232a31] rounded-[6px] text-[16px] text-white' type="email" placeholder='Email' name='email'   value={formData.email}
        onChange={handleChange}
        required/>
                    </div> 
                    
                    <textarea className='w-full   h-20 py-[13px] px-[15px] outline-[#20c997] bg-[#232a31] rounded-[6px] text-[16px] text-white my-6'  name="message"
        value={formData.message}
        onChange={handleChange}
        required  placeholder='Tell me more about your needs........'></textarea>  

                    
                    <div className='text-center'>
                    <button type='submit' className='py-3 px-10 bg-[#20c997] hover:bg-[#20c997]/85 transition-all duration-300 rounded-full font-pop text-[#ffffff] text-[16px] font-medium '>
                        Send Message
                    </button> 
                        </div>   
                </form>

                <div className='text w-[328px] bg-slae-200  md:hidden flex flex-col mx-auto text-center items-center justify-center mt-10 gap-y-3'>
                   
                   <div className="address">
                   <h2 className='uppercase text-[21px] text-[#ffffff] font-medium mb-4 '>Address</h2>
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
                        <a href="mailto:neazmorshed407@gmail.com">
                        neazmorshed407@gmail.com
                        </a>
                        </p>
                    </div>

                    <div className="icon">
                        <h2 className='uppercase text-[21px] text-[#ffffff] font-medium mb-4'>
                            follow me
                        </h2>

                        <ul className='flex text-[#dddddd] gap-2.5' >
                           <li className="w-[26px] h-[26px] flex items-center justify-center">
                                       <a href="https://github.com/morshedsajid26" aria-label="GitHub">
                                         <FaGithub />
                                       </a>
                                     </li>

                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="https://www.facebook.com/snmsajid26" aria-label='Facebook'><FaFacebookF /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center'>
                                <a href="https://www.linkedin.com/in/neaz-morshed-sajid" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="mailto:neazmorshed407@gmail.com"><FaGoogle /></a>
                                </li>
                            <li className='w-[26px] h-[26px] flex items-center justify-center '>
                                <a href="https://www.instagram.com/neaz_morshed_sajid" aria-label="Instagram"><FaInstagram /></a>
                                </li>
                            
                        </ul>
                    </div>



                </div>
            </div>
        </Container>
        
    </div>
  )
  
}

export default Contact