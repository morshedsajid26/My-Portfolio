import React from 'react';

const ResumeCard = ({ className, year, department, institute, details }) => {
  return (
    <div
      className={`w-full h-[230px] max-w-[624px] p-6 bg-[#111418] rounded-[6px] shadow-lg ${className}`}
    >
      {/* Year Tag */}
      <p className="text-[#ffffff] text-[14px] py-[5px] px-[10px] bg-[#dc3545] rounded w-max mb-4">
        {year}
      </p>

      {/* Department/Role */}
      <h3 className="text-[#ffffff] text-[20px] sm:text-[21px] font-medium mb-2">
        {department}
      </h3>

      {/* Institute/Organization */}
      <p className="text-[#20c997] text-[16px] sm:text-[18px] mb-4">
        {institute}
      </p>

      {/* Details */}
      <p className="text-[#ffffff]/50 text-[15px] sm:text-[16px] leading-relaxed">
        {details}
      </p>
    </div>
  );
};

export default ResumeCard;
