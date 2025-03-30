import React from "react";

const XlWrapper = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 w-full px-0 ${className}`}>
      {children}
    </div>
  );
};

export default XlWrapper;
