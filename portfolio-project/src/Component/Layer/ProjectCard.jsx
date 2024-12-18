import React from 'react'

import orebi from '/Orebi.png'
import { FiExternalLink } from 'react-icons/fi'



const ProjectCard = () => {
  return (
    <div className={`relative after: after: after:content-[""] after: after: after: after: after:invisible group-hover/item:visible font-pop `}>
      
        <img className='w-[500px] h-[300px] ' src={orebi}  alt="" />

        <div className=' absolute w-[500px]  h-[300px] top-0 cursor-pointer bg-black/50 flex flex-col justify-between'>

        

        <h3 className='text-[47px]'>Orebi</h3>

       <div className=' flex justify-between'>
       <div className="tools flex gap-3">
          <h5 className='px-4 py-2 bg-slate-500 rounded-full font-semibold text-[16px]'>HTML5</h5>
          <h5  className='px-4 py-2 bg-slate-500 rounded-full font-semibold text-[16px]'>Tailwind</h5>
          <h5  className='px-4 py-2 bg-slate-500 rounded-full font-semibold text-[16px]'>JavaScript</h5>
          <h5  className='px-4 py-2 bg-slate-500 rounded-full font-semibold text-[16px]'>React</h5>








          
        </div>


        <div className='px-3 py-2 bg-slate-500 rounded-full text-black w-10 flex justify-center items-center visibility-full'  >
        <a href="">
        <FiExternalLink  />
        </a>
        </div>
       </div>

        


        </div>
        
    </div>
  )
}

export default ProjectCard