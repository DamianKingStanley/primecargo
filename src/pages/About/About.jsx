import React from "react";
import {
  FiTruck,
  FiGlobe,
  FiAward,
  FiUsers,
  FiShield,
  FiHeart,
} from "react-icons/fi";
import whoWeAreImage from "../../assets/about-us-image.jpeg";
import historyImage from "../../assets/about-us-image2.jpg";
import missionImage from "../../assets/about-us-image3.jpg";
import visionImage from "../../assets/about-us-image4.jpeg";
import valuesImage from "../../assets/about-us-image5.jpeg";

const AboutUs = () => {
  const values = [
    {
      icon: <FiShield className="text-blue-500 text-2xl" />,
      title: "Reliability",
      description: "We deliver on our promises, every time.",
    },
    {
      icon: <FiAward className="text-blue-500 text-2xl" />,
      title: "Innovation",
      description:
        "We embrace technology to drive efficiency and sustainability.",
    },
    {
      icon: <FiUsers className="text-blue-500 text-2xl" />,
      title: "Customer Focus",
      description: "Your satisfaction is our ultimate goal.",
    },
    {
      icon: <FiHeart className="text-blue-500 text-2xl" />,
      title: "Integrity",
      description: "Transparency and honesty guide every decision we make.",
    },
    {
      icon: <FiGlobe className="text-blue-500 text-2xl" />,
      title: "Collaboration",
      description: "We succeed by working together with our team and partners.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Delivering Excellence <br />
                <span className="text-orange-400">Beyond Borders</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                At VastSea Logistics, we don't just move packages - we build
                trust, create connections, and deliver solutions that make a
                real difference.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <FiTruck className="h-40 w-40 text-blue-300 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src={whoWeAreImage}
                alt="Our Team"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                  <FiUsers />
                </span>
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since our inception, VastSea Service has redefined logistics by
                combining cutting-edge technology with human expertise. We're
                not just experts in freight forwarding, storage, and
                delivery—we're your strategic partners in global commerce.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-gray-700">
                  "We thrive on making the impossible possible, delivering
                  solutions that go beyond traditional logistics."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="mb-20 bg-white rounded-xl shadow-sm p-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-4">
                  <FiGlobe />
                </span>
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From humble beginnings as a small local delivery company, we've
                grown into a trusted global logistics partner. Our journey has
                been marked by consistent innovation and an unwavering
                commitment to our core values.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    ✓
                  </span>
                  <span>Founded in 2010 with just 2 trucks</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    ✓
                  </span>
                  <span>Expanded to international shipping in 2015</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    ✓
                  </span>
                  <span>Implemented real-time tracking in 2018</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    ✓
                  </span>
                  <span>Now serving 150+ countries worldwide</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src={historyImage}
                alt="Our History"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiAward className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To simplify global commerce through innovative logistics solutions
              that are tailored, efficient, and dependable. We bridge distances
              to create opportunities and make the world more connected.
            </p>
            <img
              src={missionImage}
              alt="Our Mission"
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-500">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <FiGlobe className="text-orange-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To redefine global logistics through technological innovation,
              environmental responsibility, and unparalleled customer service.
              We envision a world where distance is no barrier to business.
            </p>
            <img
              src={visionImage}
              alt="Our Vision"
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              These principles guide every decision we make and every package we
              deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden">
            <div className="md:w-1/2 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p className="mb-6">
                Our commitment to these values has earned us recognition as one
                of the most reliable logistics providers in the industry.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={valuesImage}
                alt="Our Values in Action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
