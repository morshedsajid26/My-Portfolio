import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'
import ProjectCard from '../Layer/ProjectCard'

const Portfolio = () => {
  return (
    <div id='portfolio' className='bg-[#343a40] py-[72px]'>
         <Container>
        <TitleHeader Heading='portfolio' Ptext='my work'/>

        <ProjectCard
        title='OREBI'
        tools1='HTML5'
        tools2='Tailwind CSS'
        tools3='JavaScript'
        tools4='React'
        />

        </Container>
    </div>
  )
}

export default Portfolio