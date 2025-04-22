import React, { useState } from "react";
import {
  FiCheck,
  FiTruck,
  FiGlobe,
  FiPackage,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
} from "react-icons/fi";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://tracking-server-d6l5.onrender.com/create-quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowModal(true);
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
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Form Section */}
          <div className="md:w-2/3 p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Request a <span className="text-blue-600">Custom Quote</span>
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Fill out the form below and our logistics experts will contact
                you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Services Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <FiTruck className="mr-2 text-blue-500" />
                  Services Needed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.services.doorToDoor
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="doorToDoor"
                      checked={formData.services.doorToDoor}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">
                        Door-to-Door
                      </span>
                      <span className="block text-xs text-gray-500">
                        End-to-end delivery
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.services.internationalDelivery
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="internationalDelivery"
                      checked={formData.services.internationalDelivery}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">
                        International
                      </span>
                      <span className="block text-xs text-gray-500">
                        Global shipping
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.services.storage
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="storage"
                      checked={formData.services.storage}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-gray-900">
                        Storage
                      </span>
                      <span className="block text-xs text-gray-500">
                        Warehousing
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Location Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="countryOfOrigin"
                    className="block text-sm font-medium text-gray-700 mb-1  items-center"
                  >
                    <FiGlobe className="mr-2 text-blue-500" />
                    Origin Country
                  </label>
                  <input
                    type="text"
                    id="countryOfOrigin"
                    name="countryOfOrigin"
                    value={formData.countryOfOrigin}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="destinationCountry"
                    className="block text-sm font-medium text-gray-700 mb-1  items-center"
                  >
                    <FiPackage className="mr-2 text-blue-500" />
                    Destination Country
                  </label>
                  <input
                    type="text"
                    id="destinationCountry"
                    name="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1  items-center"
                  >
                    <FiUser className="mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1  items-center"
                  >
                    <FiMail className="mr-2 text-blue-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1  items-center"
                  >
                    <FiPhone className="mr-2 text-blue-500" />
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-gray-700 mb-1  items-center"
                >
                  <FiMessageSquare className="mr-2 text-blue-500" />
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Get Your Free Quote"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-700 p-8 sm:p-10 text-white">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-full p-1 mt-1">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Fast Response</h4>
                    <p className="mt-1 text-blue-100">
                      Get a quote within 24 hours
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-full p-1 mt-1">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">
                      Competitive Pricing
                    </h4>
                    <p className="mt-1 text-blue-100">
                      Best rates in the industry
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-full p-1 mt-1">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Global Network</h4>
                    <p className="mt-1 text-blue-100">
                      150+ countries coverage
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-full p-1 mt-1">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">24/7 Support</h4>
                    <p className="mt-1 text-blue-100">
                      Always here to help you
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-6 border-t border-blue-500">
                <h4 className="text-lg font-semibold mb-3">
                  Need immediate help?
                </h4>
                <p className="text-blue-100 mb-4">
                  Call our logistics experts now
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-2xl font-bold hover:underline"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <FiCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Request Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your inquiry. Our logistics expert will contact you
              within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
