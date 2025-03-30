"use client";
import React from "react";
import { MarqueeSection } from "./MarqueeSection";
import { FooterNavigation } from "./FooterNavigation";
import { FooterBottom } from "./FooterBottom";

export default function Footer() {
  return (
    <footer>
      <MarqueeSection />
      <div className="pt-36 pb-12 bg-slate-50 max-sm:pt-20">
        <div className="flex justify-between px-5 py-0 mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:gap-12 max-sm:px-4 max-sm:py-0">
          <section className="max-w-[634px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4a495d37d3a7f9bdec8bdb98d691f824217d68"
              alt="Rastaa.ai logo"
              className="mb-9 h-14 w-[175px]"
            />
            <p className="text-base leading-8 text-gray-900">
              Timely deliveries can make or break a business today. Rastaa.
              Powered by artificial intelligence for intelligent route
              optimization, ai eliminates the anxiety of last mile operations
              with a revolutionary SaaS platform. Consider consistently
              delivering on customer expectations with faster shipments
              utilizing the shortest, most efficient routes for every delivery.
              With Rastaa.
            </p>
          </section>
          <FooterNavigation />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
