import React from 'react'

import orebi from '/Orebi.png'



const ProjectCard = () => {
  return (
    <div className={`relative after:bg-black/50 after:absolute after:content-[""] after:w-[500px] after:h-[300px] after:top-0 after:cursor-pointer after:hover:> `}>
      
        <img className='w-[500px] h-[300px] ' src={orebi}  alt="" />

        <div className=''>


        </div>
        
    </div>
  )
}

export default ProjectCard