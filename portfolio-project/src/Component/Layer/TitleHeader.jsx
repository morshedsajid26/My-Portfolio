import React from 'react'

const TitleHeader = ({className ,Heading,Ptext}) => {
  return (
    <div className={`title font-pop text-center relative ${className}`}>
                <h2 className='uppercase text-[#6c757d] text-[132px] font-semibold opacity-10 '>{Heading}</h2>
                <p className='capitalize text-[36px] font-semibold text-[#ffffff] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 after:absolute after:content-[""] after:w-20 after:h-[2px] after:bg-[#20c997] after:bottom-0  after:left-1/2 after:-translate-x-1/2  '>{Ptext}</p>
            </div>
  )
}

export default TitleHeader