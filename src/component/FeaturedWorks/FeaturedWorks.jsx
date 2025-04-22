import React from "react";
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
import aboutImage from "../../assets/hero-image2.PNG"; // Replace with your actual image path

const FeaturedWorks = () => {
  const highlights = [
    {
      title: "Our Mission",
      description:
        "To simplify logistics for our customers, delivering world-class solutions that are tailored, efficient, and dependable. We aim to bridge distances and create opportunities, making the world more connected",
      icon: <FaBullseye className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Our Vision",
      description:
        "To be the most trusted and innovative logistics provider, leading the way in customer satisfaction, technology integration, and environmental responsibility. Our vision is to redefine what it means to deliver.",
      icon: <FaLightbulb className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Our Values",
      description:
        "Reliability, Innovation,Customer Focus, Integrity, Collaboration. We deliver on our promises, everytime. Your satisfaction is our ultimate goal.",
      icon: <FaHandshake className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "24/7 Service",
      description:
        "We’re available round the clock to ensure your shipments reach their destination on time, no matter when you need us.",
      icon: <FaClock className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Service Points",
      description:
        "Our extensive network of service points ensures easy access and support, wherever you are.",
      icon: (
        <FaMapMarkerAlt className="text-orange-600 text-4xl mx-auto mb-4" />
      ),
    },
    {
      title: "Professional Team",
      description:
        "Our experienced team of logistics experts is committed to delivering excellence at every step of the journey.",
      icon: <FaUsers className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Live Tracking",
      description:
        "Real-time updates let you monitor your shipment's progress from start to finish, providing peace of mind.",
      icon: <FaTruckMoving className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Estimated Delivery Time",
      description:
        "Accurate delivery time predictions keep you informed and help you plan ahead with confidence.",
      icon: <FaStopwatch className="text-orange-600 text-4xl mx-auto mb-4" />,
    },
  ];

  return (
    <div className="bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-orange-600">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At Prime Cargo Logistics, we are more than a logistics company—we
              are your partner in seamless delivery. With a legacy of excellence
              and a passion for innovation, we are dedicated to bridging gaps
              and making the world smaller, one package at a time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Since our inception, we have redefined the standards of logistics,
              offering tailored solutions for businesses and individuals alike.
              Whether it’s local delivery or global shipping, our expertise
              ensures every step of the journey is smooth, secure, and
              efficient.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-orange-600 text-center mb-12">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
              >
                {highlight.icon}
                <h4 className="text-xl font-bold text-orange-600 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
