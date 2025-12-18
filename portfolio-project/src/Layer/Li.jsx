import React from 'react';

const Li = ({ className, liText, children, href }) => {
  return (
    <li className="list-none">
      <a
        className={`
          font-pop text-[16px] font-medium
          transition-all duration-300
          hover:text-[#20C996] dark:hover:text-[#20C996]
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
