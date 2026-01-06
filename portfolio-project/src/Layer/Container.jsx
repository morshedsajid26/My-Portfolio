import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-[1296px] px-3 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
