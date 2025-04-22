import React from "react";
import contactBanner from "../../assets/logistic-worker.png"; // Replace with your banner image
import ContactForm from "../../component/ContactForm/ContactForm";
import LocationMap from "../../component/LocationMap/LocationMap";

const ContactUs = () => {
  return (
    <div className="py-1">
      {/* Banner Section */}
      <div
        className="relative flex items-center justify-center h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl font-bold text-white z-10">Get in Touch</h1>
      </div>

      {/* Contact Details */}
      <div className="p-8 bg-gray-50 text-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-600">Contact Us</h2>
          <p className="mt-4 text-lg">
            Have questions? Need support? We’re here to help. Reach out to us
            through email or visit our office.
          </p>
        </div>

        {/* Contact Options */}
        <div className="max-w-5xl mx-auto">
          {/* Email Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-orange-500">Email Us</h3>
            <p className="mt-2 text-gray-600">
              Send us an email and we’ll respond as soon as possible.
            </p>
            <p className="mt-4 text-gray-800 font-medium">
              support@Prime Cargo.com
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-500">Visit Us</h3>
            <p className="mt-2 text-gray-600">
              Our office is open Monday to Friday, 9 AM - 5 PM.
            </p>
            <p className="mt-4 text-gray-800 font-medium">
              Prime Cargo Logistics Headquarters, <br />
              123 Courier Street, Logistics City, <br />
              New York, America.
            </p>
          </div>
        </div>
      </div>
      <LocationMap />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
