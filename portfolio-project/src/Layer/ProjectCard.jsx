import React from 'react'

import orebi from '/Orebi.png'
import { FiExternalLink } from 'react-icons/fi'



const ProjectCard = ( {}) => {
  return (
    <div className={`relative  font-pop `}>
      
        <img className='w-[500px] h-[300px] rounded-lg  ' src={orebi}  alt="" />

        <div className=' absolute w-[500px]  h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  '>

        

        <h3 className='text-[40px] text-white/70 text-center'>orebi</h3>

        <div className='mx-auto my-5'>

        <h3 className='text-[22px] text-white/70 text-center'>Technologies</h3>


        <div className="tools flex gap-2 mt-5  ">
          <h5 className='px-4 py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[16px]'>HTML5</h5>
          <h5  className='px-4 py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[16px]'>1</h5>
          <h5  className='px-4 py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[16px]'>2</h5>
          <h5  className='px-4 py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[16px]'>3</h5>       
        </div>

        </div>

       <div className=' flex justify-between'>
       


        <div className='px-3 py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8'  >
        <a className='flex justify-center items-center gap-2' href=""> <p>Live Link</p>
        <FiExternalLink  />
        </a>
        </div>
       </div>

        


        </div>
        
    </div>
  )
}

export default ProjectCard