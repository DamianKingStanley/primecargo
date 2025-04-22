import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/cargo1.webp";
import banner2 from "../../assets/cargo2.webp";
import banner3 from "../../assets/cargo4.jpg";

const slides = [
  {
    title: "Real-Time GPS Tracking",
    description:
      "Monitor your shipments live with our advanced tracking system using just your tracking number.",
    image: banner1,
    cta: "Track Now",
  },
  {
    title: "Fast & Secure Transport",
    description:
      "Leveraging our global network with airlines and maritime operators for seamless logistics.",
    image: banner2,
    cta: "Get Quote",
  },
  {
    title: "Premium Delivery Service",
    description:
      "World-class delivery solutions with speed and professionalism you can trust.",
    image: banner3,
    cta: "Our Services",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen max-h-[800px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto transform transition-all duration-1000 ease-in-out">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
            {slides[currentSlide].description}
          </p>
          <Link
            to={
              slides[currentSlide].cta === "Track Now"
                ? "/track"
                : slides[currentSlide].cta === "Get Quote"
                ? "/request-a-quote"
                : "/about-us"
            }
            className="inline-block animate-fadeIn delay-200"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
              {slides[currentSlide].cta}
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide
                ? "bg-blue-500 w-6 scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-blue-500 transition-all duration-1000 ease-linear"
          style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
