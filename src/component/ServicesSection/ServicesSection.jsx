import React, { useEffect, useState } from "react";
import serviceImage1 from "../../assets/truck-delivery.gif";
import serviceImage2 from "../../assets/hhla-container.gif";
import serviceImage3 from "../../assets/waltergroup-containex.gif";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [videoPlaying, setVideoPlaying] = useState(false);

  const services = [
    {
      title: "Secure Delivery",
      description:
        "We prioritize safety in every package we handle. From confidential documents to valuable parcels, our secure delivery service ensures your items arrive intact and on time.",
      image: serviceImage1,
      icon: "🚛",
    },
    {
      title: "Freight Shipping",
      description:
        "Need to move large shipments across regions or borders? Our freight shipping service offers efficient and cost-effective solutions tailored to your business needs.",
      image: serviceImage2,
      icon: "🚢",
    },
    {
      title: "Warehouse Storage",
      description:
        "Our state-of-the-art warehouse facilities provide secure storage for your goods, with options for inventory management, distribution, and 24/7 monitoring.",
      image: serviceImage3,
      icon: "🏭",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored logistics solutions designed for efficiency, reliability,
            and peace of mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 text-3xl p-3 rounded-lg shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <video
                src="https://ik.imagekit.io/webmanagement/video/video-banner.mp4?updatedAt=1745319190148"
                controls={videoPlaying}
                autoPlay
                muted
                loop
                onClick={() => setVideoPlaying(!videoPlaying)}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                poster="https://via.placeholder.com/800x450?text=Prime+Cargo+Logistics"
              />
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Shipping Process
              </h3>
              <p className="text-gray-300">
                From start to finish, we streamline logistics to save you time
                and reduce stress.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
