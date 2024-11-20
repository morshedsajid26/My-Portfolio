import React from 'react'
import SkillCard from './Layer/SkillCard'

const Skills = ({className}) => {
  return (
    <div className={`skills ${className}`}>

        <h2 className='text-white text-[24px] font-semibold mb-6'>My Skills</h2>

       <div className='w-full grid grid-cols-2 gap-12  '>

      
            <SkillCard
            Name='Web Design'
            Percentage='90%'
            width='w-[90%]'/>


            <SkillCard
            Name='HTML/CSS'
            Percentage='95%'
            width='w-[95%]'/>


            <SkillCard
            Name='Bootstrap'
            Percentage='85%'
            width='w-[85%]'/>


            <SkillCard
            Name='Tailwind'
            Percentage='95%'
            width='w-[95%]'/>


            <SkillCard
            Name='JavaScript'
            Percentage='65%'
            width='w-[65%]'/>


            <SkillCard
            Name='React'
            Percentage='50%'
            width='w-[50%]'/>


            <SkillCard
            Name='Next.js'
            Percentage='5%'
            width='w-[5%]'/>

     
       </div>

       

        </div>
  )
}

export default Skills