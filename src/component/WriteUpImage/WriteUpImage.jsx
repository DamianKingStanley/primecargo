import React, { useEffect, useState, useRef } from "react";
import deliveryImage1 from "../../assets/airfreight.jpg"; // Replace with your actual image paths
import deliveryImage2 from "../../assets/air-freight.jpg";
import deliveryImage3 from "../../assets/warehousing.jpg";

const WriteUpImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const componentRef = useRef(null);

  const images = [deliveryImage1, deliveryImage2, deliveryImage3]; // Slideshow images

  useEffect(() => {
    // Intersection Observer for component visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Slideshow effect: change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust duration as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      ref={componentRef}
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white overflow-hidden py-20"
    >
      {/* Text Section */}
      <div
        className={`flex-1 text-left space-y-4 transition-transform duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-orange-600">
          Reliable. Efficient. Just for You.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed ">
          Trust Prime Cargo Logistics to simplify your shipping needs. Whether
          you’re moving small packages or large freight, our priority is
          ensuring every delivery is smooth, secure, and on time. We’re
          committed to taking the stress out of logistics so you can focus on
          what matters most to you.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed ">
          With our extensive network across air, sea, and land, combined with
          advanced technology, we provide flexible solutions that align
          perfectly with your requirements. From local errands to global
          distribution, we deliver with precision and care. Prime Cargo
          Logistics—redefining how the world connects, one package at a time.
        </p>
      </div>

      {/* Image Section (Slideshow) */}
      <div
        className={`flex-1 transition-transform duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <img
          src={images[currentImageIndex]} // Display the current image
          alt="Logistics Service"
          className="w-full h-72 object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default WriteUpImage;
