import React from "react";
import serviceImage1 from "../../assets/truck-delivery.gif"; // Replace with actual paths
import serviceImage2 from "../../assets/hhla-container.gif";
import serviceImage3 from "../../assets/waltergroup-containex.gif";
import gifIcon from "../../assets/car.gif"; // Replace with actual gif path

const OurServices = () => {
  const services = [
    {
      title: "Secure Delivery",
      description:
        "We prioritize safety in every package we handle. From confidential documents to valuable parcels, our secure delivery service ensures your items arrive intact and on time.",
      image: serviceImage1,
    },
    {
      title: "Freight Shipping",
      description:
        "Need to move large shipments across regions or borders? Our freight shipping service offers efficient and cost-effective solutions tailored to your business needs.",
      image: serviceImage2,
    },
    {
      title: "Warehouse Storage",
      description:
        "Our state-of-the-art warehouse facilities provide secure storage for your goods, with options for inventory management, distribution, and 24/7 monitoring.",
      image: serviceImage3,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-orange-600 text-center mb-8">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Discover a range of logistics services tailored to meet your unique
          needs. At Prime Cargo Logistics, we go the extra mile to deliver
          convenience, reliability, and precision.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src={gifIcon}
              alt="Shipping Process"
              className="w-40 h-40 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              Simplified Shipping Process
            </h3>
            <p className="text-gray-700">
              From start to finish, we streamline the logistics process to save
              you time and stress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
