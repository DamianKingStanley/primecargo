import React from "react";
import { FaTruck, FaWarehouse, FaShip, FaGlobe } from "react-icons/fa";
import logisticsImage from "../../assets/loading-package.jpg"; // Replace with your image path

const LogisticsFeatures = () => {
  const features = [
    {
      title: "Transportation & Logistics",
      description:
        "To best support your ever-changing logistics needs, we are continuously evolving our transportation services.",
      icon: <FaTruck className="text-white text-4xl" />,
    },
    {
      title: "Moving & Storage",
      description:
        "You can opt for dedicated platforms from the advantages related to shared surfaces, resources, and equipment.",
      icon: <FaWarehouse className="text-white text-4xl" />,
    },
    {
      title: "Shipping Operations",
      description:
        "Provides a scalable and customizable solution for customers who have programs to retire outdated IT assets.",
      icon: <FaShip className="text-white text-4xl" />,
    },
    {
      title: "Freight & Worldwide Transport",
      description:
        "Global freight shipping via air, ocean, road or rail. A comprehensive suite of services drawing on our global scale and local insight to deliver value across your entire supply chain.",
      icon: <FaGlobe className="text-white text-4xl" />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-orange-600 text-white py-3 px-7">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={logisticsImage}
          alt="Logistics"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Features Section */}
      <div className="md:w-1/2 py-12 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4">{feature.icon}</div>
              <div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogisticsFeatures;
