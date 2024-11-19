import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'

const Portfolio = () => {
  return (
    <div className='bg-[#343a40] py-[72px]'>
         <Container>
        <TitleHeader Heading='portfolio' Ptext='my work'/>
        </Container>
    </div>
  )
}

export default Portfolio