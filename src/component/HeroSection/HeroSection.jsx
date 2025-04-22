import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/hero-image1.PNG";
import banner2 from "../../assets/hero-image2.PNG";
import banner3 from "../../assets/truck-logistics.jpg";

const slides = [
  {
    title: "GPS TRACKING",
    description:
      "We provide real-time GPS tracking of your shipment with just your tracking number, ensuring transparency.",
    image: banner1,
  },
  {
    title: "Transporting Shipments Fast and Safe",
    description:
      "Enjoy our preferential relationships with airlines, maritime operators, and customs to ensure seamless shipping experiences.",
    image: banner2,
  },
  {
    title: "Superb Delivery Service",
    description:
      "We are a world-class delivery company offering you the swiftest and most professional of delivery services.",
    image: banner3,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6 md:pt-0 pt-32">
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white text-lg md:text-3xl mb-6 max-w-2xl">
            {slides[currentSlide].description}
          </p>
          <Link to="/track">
            <button className="bg-orange-600 hover:bg-black  text-white  font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Track Shipment
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? "bg-blue-600 w-4 h-4" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
