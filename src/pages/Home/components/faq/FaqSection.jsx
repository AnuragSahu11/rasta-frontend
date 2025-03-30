import React from "react";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "What is Rastaa.ai?",
    answer:
      "Rastaa.ai is an AI-driven SaaS platform designed to optimize last mile hub operations through smart route planning.",
  },
  {
    question: "How can Rastaa.ai improve delivery times?",
    answer:
      "By using AI to calculate the most efficient routes, Rastaa.ai slashes delivery times significantly.",
  },
  {
    question: "Is Rastaa.ai suitable for my logistics business?",
    answer:
      "Yes, Rastaa.ai is tailored for logistics companies, e-commerce businesses, and any organization involved in deliveries.",
  },
  {
    question: "Can I track my shipments in real-time?",
    answer:
      "Absolutely! Rastaa.ai offers real-time tracking features for transparency and peace of mind.",
  },
  {
    question: "How does AI enhance route optimization?",
    answer:
      "AI analyzes an array of factors like traffic, weather, and historical data to determine the best possible routes.",
  },
  {
    question:
      "Will implementation require significant changes to my existing system?",
    answer:
      "No, Rastaa.ai offers flexible integrations and API capabilities to seamlessly adapt to your current systems.",
  },
  {
    question: "What customer support is available?",
    answer:
      "Rastaa.ai provides round-the-clock customer support to assist with any questions or issues.",
  },
];

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  return (
    <section className="relative pt-30 min-h-screen bg-zinc-950 max-md:px-10 max-md:py-32 max-sm:px-5 max-sm:py-20">
      <div className="relative mx-auto my-0 max-w-[1200px] max-md:w-full">
        <h1 className="mb-14 text-5xl font-bold text-white leading-[67.2px] max-sm:mb-10 max-sm:text-3xl">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-3 w-[610px] max-md:w-full">
          {faqData.map((faq, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="w-full h-px bg-gray-400 opacity-50" />
              )}
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isExpanded={expandedIndex === index}
                onToggle={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              />
              {index === faqData.length - 1 && (
                <div className="w-full h-px bg-gray-400 opacity-50" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="absolute h-[557px] right-[0px] top-[180px] w-[484px] max-md:hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eaee7a7080e551ae66177a3dba58822aa192d6c"
          alt="Illustration"
          className="object-contain absolute top-0 h-[591px] w-[591px]"
        />
      </div>
    </section>
  );
};

export default FaqSection;
