import React from "react";

const ServiceInfoSection = () => {
  return (
    <article className="flex-1">
      <svg
        width="488"
        height="519"
        viewBox="0 0 488 519"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="info-svg w-[485px] h-[458px]"
      >
        {/* Headings */}
        <text
          fill="white"
          fontFamily="Golos"
          fontSize="33"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="102" y="35.54">What We Do</tspan>
        </text>
        <text
          fill="white"
          fontFamily="Golos"
          fontSize="33"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="102" y="210.54">Who We Do It For</tspan>
        </text>
        <text
          fill="white"
          fontFamily="Golos"
          fontSize="33"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="102" y="385.54">What Do They Get</tspan>
        </text>

        {/* Description Text */}
        <text
          fill="white"
          fontFamily="Golos"
          fontSize="19"
          letterSpacing="0em"
        >
          <tspan x="102" y="77.72">Rastaa.ai specializes in AI-</tspan>
          <tspan x="102" y="104.72">driven smart route </tspan>
          <tspan x="102" y="131.72">optimization. </tspan>
        </text>

        <text
          fill="white"
          fontFamily="Golos"
          fontSize="19"
          letterSpacing="0em"
        >
          <tspan x="102" y="252.72">Designed for logistics companies, </tspan>
          <tspan x="102" y="279.72">delivery service providers, and e-</tspan>
          <tspan x="102" y="306.72">commerce businesses. </tspan>
        </text>

        <text
          fill="white"
          fontFamily="Golos"
          fontSize="19"
          letterSpacing="0em"
        >
          <tspan x="102" y="427.72">Customers experience faster, more </tspan>
          <tspan x="102" y="454.72">efficient deliveries while maximizing </tspan>
          <tspan x="102" y="481.72">resource utilization and minimizing </tspan>
          <tspan x="102" y="508.72">operational costs. </tspan>
        </text>

        {/* Timeline Line */}
        <path
          opacity="0.2"
          d="M4 10L3.99998 515"
          stroke="#97A1B0"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M4 10L3.99998 515"
          stroke="#4D8FAE"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </article>
  );
};

export default ServiceInfoSection;
