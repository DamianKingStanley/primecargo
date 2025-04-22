import React, { useState, useEffect } from "react";
import { FaBuilding, FaGlobeAmericas, FaRegClock } from "react-icons/fa";

const GlobalPresence = () => {
  const [offices, setOffices] = useState(0);
  const [countries, setCountries] = useState(0);
  const [experience, setExperience] = useState(0);

  const targetOffices = 120; // Number of offices
  const targetCountries = 50; // Number of countries covered
  const targetExperience = 10; // Years of experience

  useEffect(() => {
    const officeInterval = setInterval(() => {
      setOffices((prev) => {
        if (prev < targetOffices) {
          return prev + 1;
        } else {
          clearInterval(officeInterval); // Stop counting when target is reached
          return prev;
        }
      });
    }, 30);

    const countryInterval = setInterval(() => {
      setCountries((prev) => {
        if (prev < targetCountries) {
          return prev + 1;
        } else {
          clearInterval(countryInterval); // Stop counting when target is reached
          return prev;
        }
      });
    }, 40);

    const experienceInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < targetExperience) {
          return prev + 1;
        } else {
          clearInterval(experienceInterval); // Stop counting when target is reached
          return prev;
        }
      });
    }, 50);

    return () => {
      clearInterval(officeInterval);
      clearInterval(countryInterval);
      clearInterval(experienceInterval);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-950 py-20 relative">
      {/* Floating Background Elements */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20 w-64 h-64 bg-blue-300 rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 opacity-20 w-80 h-80 bg-indigo-400 rounded-full"></div> */}

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8">
          Our Global Presence
        </h2>
        <p className="text-lg text-white mb-12">
          We are proud to have a global reach with offices in multiple countries
          and years of experience in the logistics industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Offices Section */}
          <div className="p-10 transform transition duration-500 hover:scale-105 hover:shadow-2xl relative bg-white rounded-lg flex justify-center items-center text-center">
            <div className="absolute inset-0 bg-blue-100 opacity-50 rounded-lg"></div>
            <h3 className="text-5xl font-bold text-blue-600 relative z-10">
              {offices}+{" "}
            </h3>
            <p className="text-lg text-gray-600 relative z-10">
              Offices Around the World
            </p>
          </div>

          {/* Countries Covered Section */}
          <div className="p-10 transform transition duration-500 hover:scale-105 hover:shadow-2xl relative bg-white rounded-lg flex justify-center items-center text-center">
            <div className="absolute inset-0 bg-green-100 opacity-50 rounded-lg"></div>
            <h3 className="text-5xl font-bold text-green-600 relative z-10">
              {countries}+{" "}
            </h3>
            <p className="text-lg text-gray-600 relative z-10">
              Countries Covered
            </p>
          </div>

          {/* Experience Section */}
          <div className="p-10 transform transition duration-500 hover:scale-105 hover:shadow-2xl relative bg-white rounded-lg flex justify-center items-center text-center">
            <div className="absolute inset-0 bg-orange-100 opacity-50 rounded-lg"></div>
            <h3 className="text-5xl font-bold text-orange-600 relative z-10">
              {experience}+{" "}
            </h3>
            <p className="text-lg text-gray-600 relative z-10">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
