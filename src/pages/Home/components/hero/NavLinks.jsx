import React from "react";

const NavLinks = ({ className = "", links, onClick, isMobileMenu }) => {
  return (
    <nav className={`flex gap-12 items-center max-md:gap-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          onClick={onClick}
          className={`text-base leading-6 cursor-pointer transition-colors duration-300 ${
            isMobileMenu
              ? "text-white hover:text-gray-300"
              : "text-zinc-950 hover:text-zinc-700"
          }`}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
