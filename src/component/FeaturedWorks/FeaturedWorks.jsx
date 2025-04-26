import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaTruckMoving,
  FaStopwatch,
} from "react-icons/fa";
import aboutImage from "../../assets/hero-image2.PNG";

const FeaturedWorks = () => {
  const highlights = [
    {
      title: "Our Mission",
      description:
        "To simplify logistics with world-class solutions that are tailored, efficient, and dependable.",
      icon: <FaBullseye className="text-blue-600 text-3xl" />,
      color: "bg-blue-50",
    },
    {
      title: "Our Vision",
      description:
        "To be the most trusted logistics provider through innovation and customer satisfaction.",
      icon: <FaLightbulb className="text-purple-600 text-3xl" />,
      color: "bg-purple-50",
    },
    {
      title: "Our Values",
      description:
        "Reliability, Innovation, Customer Focus, Integrity, Collaboration.",
      icon: <FaHandshake className="text-green-600 text-3xl" />,
      color: "bg-green-50",
    },
    {
      title: "24/7 Service",
      description: "Round-the-clock support to ensure timely deliveries.",
      icon: <FaClock className="text-red-600 text-3xl" />,
      color: "bg-red-50",
    },
    {
      title: "Global Network",
      description: "Extensive service points for easy access worldwide.",
      icon: <FaMapMarkerAlt className="text-yellow-600 text-3xl" />,
      color: "bg-yellow-50",
    },
    {
      title: "Expert Team",
      description: "Experienced professionals committed to excellence.",
      icon: <FaUsers className="text-indigo-600 text-3xl" />,
      color: "bg-indigo-50",
    },
    {
      title: "Live Tracking",
      description: "Real-time updates for complete shipment visibility.",
      icon: <FaTruckMoving className="text-pink-600 text-3xl" />,
      color: "bg-pink-50",
    },
    {
      title: "On-Time Delivery",
      description: "Accurate ETAs you can rely on for planning.",
      icon: <FaStopwatch className="text-teal-600 text-3xl" />,
      color: "bg-teal-50",
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Your Trusted{" "}
              <span className="text-blue-600">Logistics Partner</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At VastSea Logistics, we're more than a shipping company—we're
              your strategic partner in global commerce. With a legacy of
              excellence and a passion for innovation, we bridge distances to
              make the world smaller, one package at a time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our inception, we've redefined logistics standards with
              tailored solutions for businesses and individuals. From local
              deliveries to international shipping, our expertise ensures every
              journey is smooth, secure, and efficient.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                ISO 9001 Certified
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                150+ Countries
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                24/7 Support
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Our team in action"
              className="w-full rounded-xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="text-2xl font-bold text-blue-600">10+</div>
              <div className="text-sm font-medium text-gray-500">
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why <span className="text-blue-600">Choose Us</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We combine cutting-edge technology with human expertise to deliver
            exceptional logistics solutions
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${highlight.color} border border-gray-100`}
            >
              <div
                className={`w-12 h-12 ${highlight.color.replace(
                  "bg-",
                  "text-"
                )} rounded-full flex items-center justify-center mb-4`}
              >
                {highlight.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
