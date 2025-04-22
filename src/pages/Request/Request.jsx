import React from "react";
import requestBanner from "../../assets/about-us-image3.jpg"; // Replace with your banner image
import ContactForm from "../../component/ContactForm/ContactForm";

const Request = () => {
  return (
    <div className="contact-us">
      {/* Banner Section */}
      <div
        className="relative flex items-center justify-center h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${requestBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl px-3 font-bold text-white z-10">
          We are one step away from getting your package for you.
        </h1>
      </div>

      <ContactForm />
    </div>
  );
};

export default Request;
