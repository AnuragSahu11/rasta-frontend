import React from "react";

const CopyrightIcon = () => (
  <svg
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="copyright-icon"
  >
    <g clipPath="url(#clip0_1_467)">
      <path
        d="M7.02245 0.000488281C3.14686 0.000488281 -0.0065918 2.91508 -0.0065918 6.49983C-0.0065918 10.0832 3.14686 12.9992 7.02245 12.9992C10.8985 12.9992 14.0518 10.0832 14.0518 6.49983C14.0518 2.91508 10.8985 0.000488281 7.02245 0.000488281ZM7.02245 11.5512C4.00995 11.5512 1.55936 9.2852 1.55936 6.49987C1.55936 3.71334 4.00995 1.44739 7.02245 1.44739C10.0353 1.44739 12.4859 3.71337 12.4859 6.49987C12.4859 9.2852 10.0353 11.5512 7.02245 11.5512Z"
        fill="#102128"
      />
      <path
        d="M9.32962 7.67694C8.88059 8.38947 8.04562 8.83148 7.15063 8.83148C5.76077 8.83148 4.62866 7.78484 4.62866 6.49958C4.62866 5.21326 5.76077 4.16627 7.15063 4.16627C8.04566 4.16627 8.88059 4.6099 9.32962 5.32102L9.38766 5.41396H11.0817L10.98 5.16175C10.6852 4.43959 10.168 3.82559 9.4833 3.38733C8.79689 2.94795 7.99061 2.71484 7.15063 2.71484C4.89416 2.71484 3.05914 4.41317 3.05914 6.49958C3.05914 8.58613 4.89416 10.2829 7.15063 10.2829C7.99061 10.2829 8.79685 10.0505 9.4833 9.61049C10.168 9.17213 10.6852 8.55833 10.98 7.83617L11.0817 7.58383H9.38766L9.32962 7.67694Z"
        fill="#102128"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_467">
        <rect
          width="14.0584"
          height="13"
          fill="white"
          transform="translate(-0.0065918)"
        />
      </clipPath>
    </defs>
  </svg>
);

export function FooterBottom() {
  return (
    <div className="px-5 py-0 mx-auto my-0 max-w-[1200px]">
      <hr className="mx-0 my-16 h-px opacity-30 bg-zinc-700" />
      <div className="flex justify-between items-center bottom-[content] max-sm:flex-col max-sm:gap-5 max-sm:items-start">
        <div className="flex gap-3 items-center">
          <CopyrightIcon />
          <p className="text-sm leading-5 text-gray-900">
            2025 Restaurants. All Right Reserved.
          </p>
        </div>
        <nav className="text-sm leading-5 text-gray-900 max-sm:mt-2.5">
          <a href="#" className="ml-10 cursor-pointer hover:text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="ml-10 cursor-pointer hover:text-gray-700">
            Privacy Policy
          </a>
        </nav>
      </div>
    </div>
  );
}
