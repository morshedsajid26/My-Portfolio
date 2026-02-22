import React from "react";

const Li = ({ className, liText, children, href, active }) => {
  return (
    <li className="list-none">
      <a
        className={`
          font-pop text-[16px] font-medium
          transition-all duration-300
          ${active ? "!text-[#20C996]" : "hover:text-[#20C996]"}
          ${className}   
        `}
        href={href}
      >
        {liText}
      </a>
      {children}
    </li>
  );
};

export default Li;
