import React from "react";

const ArrowIcon = ({ isExpanded }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon flex-shrink-0"
    >
      <circle
        cx="24"
        cy="24"
        r="24"
        fill={!isExpanded ? "#97A1B0" : "white"}
        opacity={!isExpanded ? "0.1" : "1"}
      />
      <path
        d={!isExpanded ? "M16 22L24.0013 30L32 22" : "M32 26L23.9987 18L16 26"}
        stroke={!isExpanded ? "white" : "#070E11"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
