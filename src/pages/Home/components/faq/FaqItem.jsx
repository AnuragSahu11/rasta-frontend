"use client";
import React from "react";
import ArrowIcon from "./ArrowIcon";

const FaqItem = ({ question, answer, isExpanded, onToggle }) => {
  return (
    <div className="flex flex-col gap-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <h2 className="text-2xl font-semibold leading-8 text-white max-sm:text-lg">
          {question}
        </h2>
        <ArrowIcon isExpanded={isExpanded} />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base leading-6 text-white max-sm:text-sm">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
