import React from "react";

const ResumeCard = ({ className, year, department, institute, details }) => {
  return (
    <div
      className={`w-full h-[290px] md:h-[230px] max-w-[624px] p-6 bg-white dark:bg-[#111418] border border-[#dee3e4] dark:border-[#4c4d4d] rounded-[6px] ${className}`}
    >
      {/* Year Tag */}
      <p className="text-white text-[14px] py-[5px] px-[10px] bg-[#20c997] dark:bg-[#dc3545] rounded w-max mb-4">
        {year}
      </p>

      {/* Department/Role */}
      <h3 className="text-[#252b33] dark:text-white text-[20px] sm:text-[21px] font-medium mb-2">
        {department}
      </h3>

      {/* Institute/Organization */}
      <p className="text-[#dc3545] dark:text-[#20c997] text-[16px] sm:text-[18px] mb-4">
        {institute}
      </p>

      {/* Details */}
      <p className="text-[#4c4d4d] dark:text-white/50 text-[15px] sm:text-[16px] leading-relaxed">
        {details}
      </p>
    </div>
  );
};

export default ResumeCard;
