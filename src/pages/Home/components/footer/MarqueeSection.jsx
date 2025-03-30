"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeItem = () => (
  <div className="flex items-center gap-4">
    <span className="text-4xl font-bold leading-10 whitespace-nowrap text-zinc-950 max-sm:text-2xl">
      *
    </span>
    <span className="text-4xl font-bold leading-10 whitespace-nowrap text-zinc-950 max-sm:text-2xl">
      Start Your Free Trial Now!
    </span>
  </div>
);

export function MarqueeSection() {
  return (
    <section className="overflow-hidden py-2.5 pt-[124px] w-full bg-slate-50 max-sm:py-1.5">
      <Marquee speed={150} gradient={false} direction="left">
        <div className="flex gap-24 max-sm:gap-8">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </Marquee>
    </section>
  );
}
