import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
        "VastSea Logistics transformed our shipping process. Their reliability and professionalism are unmatched. Highly recommend!",
      rating: 5,
      photo: pic4,
    },
    {
      name: "Michael Brown",
      role: "E-commerce Manager",
      review:
        "The live tracking feature is a game-changer. Knowing where my shipments are at all times gives me peace of mind.",
      rating: 4.5,
      photo: pic2,
    },
    {
      name: "Sophia Lee",
      role: "Freelancer",
      review:
        "Exceptional service! Their team goes above and beyond to ensure timely deliveries. I'll definitely use them again.",
      rating: 5,
      photo: pic3,
    },
    {
      name: "James Carter",
      role: "Event Planner",
      review:
        "VastSea's estimated delivery time is always accurate, which helps me plan my events seamlessly. Great job!",
      rating: 5,
      photo: pic1,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    } else {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
    }
  };

  const review = reviews[currentReviewIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      position: "absolute",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Trusted by <span className="text-blue-600">Businesses Worldwide</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Don't just take our word for it. Here's what our clients say about our
          services.
        </motion.p>

        <div className="relative h-96 md:h-80 overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentReviewIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full flex justify-center items-center"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full h-full flex flex-col items-center">
                <div className="relative mb-6">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-100 p-2 rounded-full">
                    <FaQuoteLeft className="text-blue-600 text-xl" />
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xl ${
                        i < Math.floor(review.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{review.review}"
                </blockquote>

                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentReviewIndex ? 1 : -1);
                setCurrentReviewIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentReviewIndex ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
