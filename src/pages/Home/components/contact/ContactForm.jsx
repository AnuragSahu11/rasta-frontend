"use client";
import React from "react";
import ContactHeader from "./ContactHeader";
import ContactOptions from "./ContactOptions";
import ContactFormInputs from "./ContactFormInputs";

const ContactForm = () => {
  return (
    <>
      <main className="flex justify-center items-center px-5 pb-20 mx-auto max-w-none min-h-screen bg-zinc-950 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <section className="w-full max-w-[752px]">
          <ContactHeader />
          <ContactOptions />
          <ContactFormInputs />
        </section>
      </main>
    </>
  );
};

export default ContactForm;
