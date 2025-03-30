import React from "react";

const NavigationSection = ({ title, links }) => (
  <nav className="flex flex-col gap-10">
    <h2 className="text-xl font-semibold leading-7 text-zinc-950">{title}</h2>
    <ul className="flex flex-col gap-5">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-base leading-6 text-gray-900 cursor-pointer hover:text-gray-700"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export function FooterNavigation() {
  const pageLinks = ["Features", "Pricing", "FAQ's", "Contact"];
  const socialLinks = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

  return (
    <div className="flex gap-48 max-md:gap-12 max-md:mt-8 max-sm:flex-col max-sm:gap-8">
      <NavigationSection title="Pages" links={pageLinks} />
      <NavigationSection title="Social media" links={socialLinks} />
    </div>
  );
}
