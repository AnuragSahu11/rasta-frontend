"use client";
import React from "react";

const FormInput = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-base leading-6 text-gray-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-8 py-5 w-full text-base text-gray-400 bg-[#ffffff20] border-[none] rounded-[50px] max-sm:px-5 max-sm:py-4"
      />
    </div>
  );
};

const FormTextArea = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-base leading-6 text-gray-400">{label}</label>
      <textarea
        placeholder={placeholder}
        className="px-8 py-5 w-full text-base text-gray-400 rounded-2xl resize-none bg-[#ffffff20] border-[none] h-[133px] max-sm:px-5 max-sm:py-4"
      />
    </div>
  );
};

const Button = ({ children, onClick, type = "button", fullWidth = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-4 text-xl leading-7 bg-white cursor-pointer rounded-[35px] text-zinc-950 border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 max-sm:px-6 max-sm:py-3 max-sm:text-lg ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export { FormInput, FormTextArea, Button };
