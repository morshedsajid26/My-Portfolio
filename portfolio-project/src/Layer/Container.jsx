import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`md:max-w-[1296px] max-w-[98%] px-3 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
