import React from 'react'

const SkillCard = ({Name,Percentage,className,width}) => {
  return (
    <div className={`w-[624px] ${className}`}>
           
    <p className='flex justify-between text-[16px] font-[500px] text-[#dee3e4] mb-2' >{Name}
        
        <span>{Percentage}</span>
    </p>

    <div className='w-full h-2  bg-[#111418] rounded relative'>
    <div className={`absolute bg-[#20c997]  h-2 rounded ${width}`}>

    </div>

   
</div>
</div>
  )
}

export default SkillCard