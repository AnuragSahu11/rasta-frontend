"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import MobileMenu from "./MobileMenu";

const links = [
  { text: "Features", href: "#features" },
  { text: "Pricing", href: "#pricing" },
  { text: "FAQ's", href: "#faqs" },
  { text: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex absolute top-0 left-0 z-50 justify-center items-center px-6 py-3.5 mx-auto my-0 w-full  max-md:px-4 max-md:py-3.5">
        <div className="flex items-center gap-4 justify-between max-w-[1200px] w-full">
          <Logo />
          <NavLinks
            className="max-sm:hidden"
            links={links}
            isMobileMenu={false}
          />
          <div className="flex items-center gap-4">
            <CTAButton />
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              links={links}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
