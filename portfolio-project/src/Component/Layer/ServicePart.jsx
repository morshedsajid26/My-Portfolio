import React from 'react';

const ServicePart = ({ Heading, pText, icon, className }) => {
  return (
    <div
      className={`flex  sm:flex-row items-start sm:items-center gap-x-4 gap-y-4 w-[95%] sm:w-auto mx-auto ${className}`}
    >
      {/* Icon Section */}
      <div
        className="icon w-[70px] md:w-[80px] h-[70px] text-[#20c997] bg-[#212529] flex items-center justify-center rounded"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Text Section */}
      <div className="text font-pop w-[275px] md:w-full">
        <h2 className="text-[#ffffff] text-[18px] sm:text-[20px] font-[500] mb-2">
          {Heading}
        </h2>
        <p className="text-[14px] sm:text-[16px] text-[#ffffff]/50 leading-relaxed">
          {pText}
        </p>
      </div>
    </div>
  );
};

export default ServicePart;
