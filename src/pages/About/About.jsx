import React from "react";
import whoWeAreImage from "../../assets/about-us-image.jpeg";
import historyImage from "../../assets/about-us-image2.jpg";
import missionImage from "../../assets/about-us-image3.jpg";
import visionImage from "../../assets/about-us-image4.jpeg";
import valuesImage from "../../assets/about-us-image5.jpeg";
import GlobalPresence from "../../component/Reviews/Reviews";
import ContactForm from "../../component/ContactForm/ContactForm";

const AboutUs = () => {
  return (
    <div className="py-1">
      {/* Header Section */}
      <div className=" bg-black p-4 mb-10">
        <h1 className="text-5xl font-bold text-white">About Us</h1>
        <p className="mt-4 text-lg text-white ">
          At Prime Cargo Logistics, logistics isn’t just about moving packages;
          it’s about building trust, delivering excellence, and creating
          connections that make a difference.
        </p>
      </div>
      <div className="p-8 bg-gray-50 text-gray-800">
        {/* About Us Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who We Are */}
          <div className="flex flex-col items-center">
            <img
              src={whoWeAreImage}
              alt="Who We Are"
              className="rounded-lg w-full h-100 object-cover"
            />
            <h2 className="text-3xl font-semibold text-orange-500 mt-6">
              Who We Are
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Since our inception, Prime Cargo Service has redefined logistics
              by putting people at the heart of everything we do. We’re not just
              experts in freight forwarding, storage, and delivery—we’re problem
              solvers who thrive on making the impossible, possible.
            </p>
          </div>

          {/* Our History */}
          <div className="flex flex-col items-center">
            <img
              src={historyImage}
              alt="Our History"
              className="rounded-lg w-full h-100 object-cover"
            />
            <h2 className="text-3xl font-semibold text-orange-500 mt-6">
              Our History
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              What began as a small local delivery company has grown into a
              trusted logistics partner with a reach that spans across
              continents. From humble beginnings, we’ve stayed true to our
              promise of delivering with care, speed, and affordability.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="mt-12 space-y-8">
          {/* Our Mission */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={missionImage}
              alt="Our Mission"
              className="rounded-lg w-full md:w-1/2 h-100 object-cover"
            />
            <div>
              <h2 className="text-3xl font-semibold text-orange-500">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                To simplify logistics for our customers, delivering world-class
                solutions that are tailored, efficient, and dependable. We aim
                to bridge distances and create opportunities, making the world
                more connected.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-orange-500">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                To be the most trusted and innovative logistics provider,
                leading the way in customer satisfaction, technology
                integration, and environmental responsibility. Our vision is to
                redefine what it means to deliver.
              </p>
            </div>
            <img
              src={visionImage}
              alt="Our Vision"
              className="rounded-lg w-full md:w-1/2 h-100 object-cover"
            />
          </div>

          {/* Our Values */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={valuesImage}
              alt="Our Values"
              className="rounded-lg w-full md:w-1/2 h-100 object-cover"
            />
            <div>
              <h2 className="text-3xl font-semibold text-orange-500">
                Our Values
              </h2>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>
                  <strong>Reliability</strong>: We deliver on our promises,
                  every time.
                </li>
                <li>
                  <strong>Innovation</strong>: We embrace technology to drive
                  efficiency and sustainability.
                </li>
                <li>
                  <strong>Customer Focus</strong>: Your satisfaction is our
                  ultimate goal.
                </li>
                <li>
                  <strong>Integrity</strong>: Transparency and honesty guide
                  every decision we make.
                </li>
                <li>
                  <strong>Collaboration</strong>: We succeed by working
                  together—with our team, customers, and partners.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <GlobalPresence />
      <ContactForm />
    </div>
  );
};

export default AboutUs;
