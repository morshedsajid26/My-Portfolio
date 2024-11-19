import React from 'react'

const ResumeCard = ({className,year,department,institute,details}) => {
  return (
    <div className={`w-[624px] p-6 bg-[#111418]  rounded-[6px] ${className}`}>
                    
    <p className=' text-[#ffffff] text-[14px] py-[4.9px] px-[9.1px] bg-[#dc3545] rounded w-[95px] mb-4'>
          {year}
   </p>

   <h3 className=' text-[#ffffff] text-[21px] font-[500] mb-2'>
   {department}
    </h3>

   <p className=' text-[#20c997] text-[16px] mb-4'>
  {institute}
   </p> 

   <p className=' text-[#ffffff]/50 text-[16px]'>
  {details}
   </p>
   



</div>
  )
}

export default ResumeCard