import React from "react";

const PricingHeader = ({ isMonthly, setIsMonthly }) => {
  return (
    <header className="flex justify-between items-center mb-15 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
      <h1 className="text-5xl font-bold text-white leading-[67.2px] max-sm:text-3xl">
        The Right Plans for You
      </h1>
      <div className="inline-flex gap-4 items-center border border-white border-solid rounded-[35px] max-sm:justify-center max-sm:w-[90%]">
        <div className="flex gap-2 items-center w-full max-sm:justify-between max-sm:px-2">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-8 py-4 text-xl max-sm:text-base max-sm:px-4 rounded-[35px] transition-all duration-300 ${
              isMonthly
                ? "bg-white text-zinc-950"
                : "text-white hover:bg-white/10"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-8 py-4 text-xl max-sm:text-base max-sm:px-4 rounded-[35px] flex items-center gap-2 transition-all duration-300 ${
              !isMonthly
                ? "bg-white text-zinc-950"
                : "text-white hover:bg-white/10"
            }`}
          >
            Yearly
            <span className="px-3 py-1 text-sm bg-amber-600 rounded-[35px] text-white whitespace-nowrap">
              20% Off
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default PricingHeader;
