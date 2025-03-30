"use client";
import React from "react";
import { FormInput, FormTextArea, Button } from "./FormComponents";

const ContactFormInputs = () => {
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-sm:gap-5">
      <FormInput label="Full Name" type="text" placeholder="John Doe" />
      <FormInput label="Email" type="email" placeholder="john@youremail.com" />
      <FormInput label="Phone" type="tel" placeholder="+91 12345 67890" />
      <FormTextArea label="Message" placeholder="Your Message" />
      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default ContactFormInputs;
