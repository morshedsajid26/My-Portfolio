import React from 'react';

const TitleHeader = ({ className, Heading, Ptext }) => {
  return (
    <div className={`title font-pop text-center relative ${className}`}>
      {/* Background Heading */}
      <h2 className="uppercase text-[#6c757d] text-[64px] md:text-[96px] lg:text-[132px] font-semibold opacity-10">
        {Heading}
      </h2>

      {/* Foreground Text */}
      <p className="capitalize text-[24px] md:text-[28px] lg:text-[36px] font-semibold text-[#252b33] dark:text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:absolute after:content-[''] after:w-16 md:after:w-20 after:h-[2px] after:bg-[#20c997] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
        {Ptext}
      </p>
    </div>
  );
};

export default TitleHeader;
