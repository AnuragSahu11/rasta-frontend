import React from "react";
import ServiceInfoSection from "./ServiceInfoSection";
import DeliveryImageSection from "./DeliveryImageSection";

const RastaaServices = () => {
  return (
    <div>
      <section className="flex justify-center items-start pb-22 pt-30 w-full min-h-screen bg-zinc-950 max-md:px-5 max-md:py-40 max-sm:px-2 max-sm:py-6">
        <div className="flex flex-col items-center w-full max-w-[1400px]">
          <h1 className="mb-25 text-5xl font-bold text-center text-white leading-[67.2px] max-w-[626px] max-md:px-5 max-md:py-0 max-md:text-4xl max-sm:px-2.5 max-sm:pt-25 max-sm:text-4xl max-sm:mb-12 max-sm:leading-[48px]">
            Revolutionize Last Mile Operations with Rastaa.ai
          </h1>
          <div className="flex gap-10 max-sm:gap-5 justify-between items-start w-full max-md:flex-col max-md:items-center">
            <ServiceInfoSection />
            <DeliveryImageSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RastaaServices;
