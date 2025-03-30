import { Button } from "./FormComponents";
import React from "react";

const ContactOptions = () => {
  return (
    <section className="flex gap-0 justify-between items-center mb-6 max-md:flex-col max-md:gap-5 max-sm:mb-10">
      <div className="flex flex-col items-center">
        <p className="mb-2 text-base leading-6 text-white">
          You can reach us anytime via
        </p>
        <p className="text-3xl font-semibold leading-10 text-white max-md:text-2xl">
          sd@rastaa.ai
        </p>
      </div>
      <p className="text-base leading-6 text-white">or</p>
      <div className="flex flex-col items-center">
        <p className="mb-5 text-base leading-6 text-white">
          Schedule a Meeting
        </p>
        <Button onClick={() => {}}>Schedule Now</Button>
      </div>
    </section>
  );
};

export default ContactOptions;
