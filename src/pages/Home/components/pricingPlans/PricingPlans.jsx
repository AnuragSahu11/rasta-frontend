"use client";
import React, { useState } from "react";
import PricingHeader from "./PricingHeader";
import PlanCard from "./PlanCard";

const PricingPlans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      type: "Plan",
      price: "",
      description: "Pricing",
      messages: "Messages",
      chatbots: "Chatbots",
      model: "Model",
      files: "Files and Webpages",
      support: "Support",
    },
    {
      type: "Free",
      price: "0",
      description: "Start with 3,000 word limit",
      messages: "25",
      chatbots: "1",
      model: "Basic",
      files: "100",
      support: "Basic",
    },
    {
      type: "Standard",
      price: "29",
      description: "Start with 3,000 word limit",
      messages: "1,500",
      chatbots: "2",
      model: "Advanced (GPT-4)",
      files: "200",
      support: "1,000",
      isPopular: true,
    },
    {
      type: "Premium",
      price: "39",
      description: "Start with 3,000 word limit",
      messages: "5,000",
      chatbots: "10",
      model: "Advanced (GPT-4)",
      files: "500",
      support: "Unlimited",
    },
  ];

  return (
    <section className=" pt-0 bg-zinc-950 max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-10">
      <PricingHeader isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      <div className="flex gap-6 max-md:flex-col max-md:items-center">
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.type}
            {...plan}
            isFirst={index === 0}
            isMonthly={isMonthly}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
