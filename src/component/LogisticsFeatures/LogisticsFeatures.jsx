import React from "react";
import {
  FaTruck,
  FaWarehouse,
  FaShip,
  FaGlobe,
  FaPlane,
  FaBoxes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logisticsImage from "../../assets/loading-package.jpg";
import logisticsImage2 from "../../assets/logistic-worker.png";

const LogisticsFeatures = () => {
  const features = [
    {
      title: "Smart Transportation",
      description:
        "Adaptive logistics solutions that evolve with your business needs, powered by real-time data analytics.",
      icon: <FaTruck className="text-orange-500 text-3xl" />,
      color: "bg-blue-50",
    },
    {
      title: "Flexible Storage",
      description:
        "Scalable warehousing solutions with shared resources for optimal cost efficiency.",
      icon: <FaWarehouse className="text-orange-500 text-3xl" />,
      color: "bg-purple-50",
    },
    {
      title: "Ocean & Air Shipping",
      description:
        "Comprehensive sea and air freight services with end-to-end cargo monitoring.",
      icon: <FaShip className="text-orange-500 text-3xl" />,
      color: "bg-green-50",
    },
    {
      title: "Global Network",
      description:
        "Worldwide transport infrastructure with local expertise in 150+ countries.",
      icon: <FaGlobe className="text-orange-500 text-3xl" />,
      color: "bg-yellow-50",
    },
    {
      title: "Express Air Freight",
      description:
        "Priority air shipping for time-sensitive shipments with guaranteed deadlines.",
      icon: <FaPlane className="text-orange-500 text-3xl" />,
      color: "bg-red-50",
    },
    {
      title: "Last-Mile Delivery",
      description:
        "Precision final-leg distribution with real-time tracking and notifications.",
      icon: <FaBoxes className="text-orange-500 text-3xl" />,
      color: "bg-indigo-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={logisticsImage}
            alt="Modern logistics operations"
            className="w-full h-full object-cover"
          />
          <img
            src={logisticsImage2}
            alt="Modern logistics operations"
            className="w-full h-full object-cover mt-3"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                Global Logistics Network
              </h3>
              <p className="text-white/90">
                Connecting markets across continents with precision and
                reliability
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-orange-500">Logistics Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our integrated services cover every aspect of supply chain
            management, delivering efficiency and visibility at every step.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${feature.color} border border-gray-100 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg ${feature.color.replace(
                      "bg-",
                      "text-"
                    )} bg-white shadow-sm`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsFeatures;
