"use client";
import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onToggle, links }) => {
  return (
    <>
      <button
        className="hidden text-2xl text-white max-sm:block"
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } max-sm:block hidden`}
      >
        <button
          onClick={onToggle}
          className="absolute top-6 right-6 text-white p-2 hover:opacity-75 transition-opacity"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <NavLinks
            links={links}
            className="flex-col items-center gap-8 text-2xl"
            onClick={onToggle}
            isMobileMenu={true}
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
