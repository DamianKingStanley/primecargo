import React, { useEffect, useState, useRef } from "react";
import deliveryImage1 from "../../assets/airfreight.jpg";
import deliveryImage2 from "../../assets/air-freight.jpg";
import deliveryImage3 from "../../assets/warehousing.jpg";

const WriteUpImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const componentRef = useRef(null);

  const content = {
    title: "Reliable. Efficient. Tailored for You.",
    paragraphs: [
      "Trust Prime Cargo Logistics to simplify your shipping needs. Whether you're moving small packages or large freight, our priority is ensuring every delivery is smooth, secure, and on time.",
      "With our extensive network across air, sea, and land, combined with advanced technology, we provide flexible solutions that align perfectly with your requirements. From local errands to global distribution, we deliver with precision and care.",
    ],
    stats: [
      { value: "99%", label: "On-Time Delivery" },
      { value: "24/7", label: "Customer Support" },
      { value: "150+", label: "Countries Served" },
    ],
  };

  const images = [deliveryImage1, deliveryImage2, deliveryImage3];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (componentRef.current) observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={componentRef}
      className="w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`space-y-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {content.title}
          </h2>

          <div className="space-y-5">
            {content.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lg text-gray-600 leading-relaxed"
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {content.stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${i * 200 + 600}ms` }}
              >
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div
          className={`relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
            </div>
          ))}

          {/* Image Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteUpImage;
