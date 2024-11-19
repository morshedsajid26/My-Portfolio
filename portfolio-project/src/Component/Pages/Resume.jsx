import React from 'react'
import Container from '../Layer/Container'
import TitleHeader from '../Layer/TitleHeader'

const Resume = () => {
  return (
    <div className='bg-[#212529] py-[72px]'>
         <Container>
        <TitleHeader Heading='summary' Ptext='resume'/>
        </Container>
    </div>
  )
}

export default Resume