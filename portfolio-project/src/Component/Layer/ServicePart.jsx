import React from 'react'


const ServicePart = ({Heading,pText,icon,className}) => {
  return (
    <div className={`w-[581px] flex justify-between ${className}`}>
        <div className="icon w-[70px] h-[70px] text-[#20c997] bg-[#212529] flex items-center justify-center rounded  ">
        {icon}
        </div>
        <div className="text font-pop w-[491px] ">
            <h2 className='text-[#ffffff] text-[20px] font-[500] mb-2.5'>{Heading}</h2>
            <p className='text-[14px] text-[#ffffff]/50'>{pText}</p>
        </div>
    </div>
  )
}

export default ServicePart