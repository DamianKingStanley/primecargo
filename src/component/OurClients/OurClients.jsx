import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import pic1 from "../../assets/guy1.jpg";
import pic2 from "../../assets/guy2.jpg";
import pic3 from "../../assets/guy3.jpg";
import pic4 from "../../assets/guy4.jpg";

const OurClients = () => {
  const reviews = [
    {
      name: "Emily Johnson",
      role: "Business Owner",
      review:
        "Prime Cargo Logistics transformed our shipping process. Their reliability and professionalism are unmatched. Highly recommend!",
      rating: 5,
      photo: pic4, // Replace with actual photo path
    },
    {
      name: "Michael Brown",
      role: "E-commerce Manager",
      review:
        "The live tracking feature is a game-changer. Knowing where my shipments are at all times gives me peace of mind.",
      rating: 4.5,
      photo: pic2, // Replace with actual photo path
    },
    {
      name: "Sophia Lee",
      role: "Freelancer",
      review:
        "Exceptional service! Their team goes above and beyond to ensure timely deliveries. I’ll definitely use them again.",
      rating: 5,
      photo: pic3, // Replace with actual photo path
    },
    {
      name: "James Carter",
      role: "Event Planner",
      review:
        "Prime Cargo estimated delivery time is always accurate, which helps me plan my events seamlessly. Great job!",
      rating: 5,
      photo: pic1, // Replace with actual photo path
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Cycle reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentReviewIndex];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Here’s what our clients have to say about working with us.
        </p>

        <div className="relative">
          {/* Banner Slider */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center"
                >
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-24 h-24 rounded-full mb-6 shadow-lg object-cover"
                  />
                  <div className="mb-4">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                      {review.review}
                    </p>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-lg" />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <FaStar className="text-yellow-500 text-lg opacity-50" />
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange text-3xl  rounded-full p-2"
            onClick={() =>
              setCurrentReviewIndex((prevIndex) =>
                prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
              )
            }
          >
            &#10094;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange text-3xl rounded-full p-2"
            onClick={() =>
              setCurrentReviewIndex(
                (prevIndex) => (prevIndex + 1) % reviews.length
              )
            }
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
