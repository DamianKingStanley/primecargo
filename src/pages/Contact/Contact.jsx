import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiTruck,
} from "react-icons/fi";
import contactBanner from "../../assets/logistic-worker.png";
import LocationMap from "../../component/LocationMap/LocationMap";
import ContactForm from "../../component/ContactForm/ContactForm";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-blue-600 text-2xl" />,
      title: "Email Us",
      description: "Our support team will get back to you within 24 hours",
      details: "support@VastSea.com",
      action: "mailto:support@VastSea.com",
    },
    {
      icon: <FiPhone className="text-blue-600 text-2xl" />,
      title: "Call Us",
      description: "Speak directly with our customer service team",
      details: "+1 (800) 123-4567",
      action: "tel:+18001234567",
    },
    {
      icon: <FiMapPin className="text-blue-600 text-2xl" />,
      title: "Visit Us",
      description: "Our headquarters are open Monday-Friday",
      details: "123 Logistics Ave, New York, NY 10001",
      action: "https://maps.google.com",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <img
          src={contactBanner}
          alt="Our logistics team"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We're Here to Help
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Whether you have questions about shipments, need a quote, or just
              want to connect, our team is ready to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {method.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <p className="text-gray-800 font-medium mb-6">{method.details}</p>
              <a
                href={method.action}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Contact us <FiSend className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Office
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="flex items-start mb-6">
                <FiMapPin className="text-blue-600 text-xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Headquarters
                  </h3>
                  <p className="text-gray-600">
                    123 Logistics Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FiClock className="text-blue-600 mr-3" />
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {officeHours.map((time, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">{time.day}</span>
                      <span className="text-gray-800 font-medium">
                        {time.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Emergency Support
              </h3>
              <p className="text-gray-600 mb-4">
                For urgent shipping inquiries outside business hours, call our
                24/7 support line:
              </p>
              <a
                href="tel:+18005551234"
                className="text-xl font-bold text-blue-600 hover:text-blue-800"
              >
                +1 (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Location Map */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Us on the Map
          </h2>
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
