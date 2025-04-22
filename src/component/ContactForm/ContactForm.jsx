import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    services: {
      doorToDoor: false,
      internationalDelivery: false,
      storage: false,
    },
    countryOfOrigin: "",
    destinationCountry: "",
    name: "",
    email: "",
    phoneNumber: "",
    additionalNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        services: { ...prevData.services, [name]: checked },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedServices = Object.keys(formData.services)
      .filter((key) => formData.services[key])
      .join(", ");

    const mailtoLink = `mailto:Prime Cargo@gmail.com
      Name: ${formData.name}%0D%0A
      Email: ${formData.email}%0D%0A
      Phone: ${formData.phoneNumber}%0D%0A
      Country of Origin: ${formData.countryOfOrigin}%0D%0A
      Destination Country: ${formData.destinationCountry}%0D%0A
      Services: ${selectedServices}%0D%0A
      Additional Notes: ${formData.additionalNotes}`;

    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      window.location.href = mailtoLink;
      setFormData({
        services: {
          doorToDoor: false,
          internationalDelivery: false,
          storage: false,
        },
        countryOfOrigin: "",
        destinationCountry: "",
        name: "",
        email: "",
        phoneNumber: "",
        additionalNotes: "",
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-8 text-orange-600">
        Request A Quote
      </h2>
      <p className="text-lg mb-12">
        Please fill out the form, and we will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Services */}
        <div className="mb-6 text-left">
          <h3 className="font-semibold mb-2">Select Services</h3>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="doorToDoor"
              checked={formData.services.doorToDoor}
              onChange={handleChange}
              className="mr-2"
            />
            Door-to-Door Delivery
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="internationalDelivery"
              checked={formData.services.internationalDelivery}
              onChange={handleChange}
              className="mr-2"
            />
            International Delivery
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="storage"
              checked={formData.services.storage}
              onChange={handleChange}
              className="mr-2"
            />
            Storage and Warehouse
          </label>
        </div>

        {/* Country of Origin */}
        <div className="mb-6 text-left">
          <label htmlFor="countryOfOrigin" className="block font-semibold mb-2">
            Country of Origin
          </label>
          <input
            type="text"
            id="countryOfOrigin"
            name="countryOfOrigin"
            value={formData.countryOfOrigin}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Destination Country */}
        <div className="mb-6 text-left">
          <label
            htmlFor="destinationCountry"
            className="block font-semibold mb-2"
          >
            Destination Country
          </label>
          <input
            type="text"
            id="destinationCountry"
            name="destinationCountry"
            value={formData.destinationCountry}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-6 text-left">
          <label htmlFor="name" className="block font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6 text-left">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6 text-left">
          <label htmlFor="phoneNumber" className="block font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Additional Notes */}
        <div className="mb-6 text-left">
          <label htmlFor="additionalNotes" className="block font-semibold mb-2">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-300 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request A Quote"}
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4 text-green-600">
              Request Submitted!
            </h3>
            <p>We will get back to you soon.</p>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
