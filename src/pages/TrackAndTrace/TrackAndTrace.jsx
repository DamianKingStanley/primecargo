import React, { useState, useRef } from "react";
import axios from "axios";
import {
  FiSearch,
  FiTruck,
  FiMapPin,
  FiCalendar,
  FiPackage,
  FiUser,
  FiNavigation,
} from "react-icons/fi";
import LocationMap from "./Location";

const TrackAndTrace = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [packageDetails, setPackageDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const videoRef = useRef(null);

  const fetchCoordinates = async (location) => {
    const API_KEY = "5b52c32a929b4cf298d7fc6dd61a4b0e";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      location
    )}&key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      const { results } = response.data;
      if (results && results.length > 0) {
        const { lat, lng } = results[0].geometry;
        setCoordinates({ lat, lng });
      } else {
        setError("Unable to fetch location coordinates.");
        setCoordinates(null);
      }
    } catch (err) {
      console.error("Error fetching coordinates:", err);
      setError("Error fetching location coordinates.");
    }
  };

  const handleTrackShipment = async () => {
    if (!trackingCode) {
      setError("Please enter a tracking code.");
      return;
    }

    setLoading(true);
    setError("");
    setPackageDetails(null);
    setCoordinates(null);

    try {
      const response = await axios.get(
        `https://tracking-server-d6l5.onrender.com/track/${trackingCode}`
      );
      const details = response.data;
      setPackageDetails(details);

      if (details.currentLocation) {
        fetchCoordinates(details.currentLocation);
      }
    } catch (err) {
      setError("Package not found. Please check your tracking number.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleTrackShipment();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <div className="relative h-96 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://ik.imagekit.io/webmanagement/video/mapvideo.mp4?updatedAt=1745319839270"
          poster="https://ik.imagekit.io/webmanagement/video/logistics-banner-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Track Your Shipment
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Enter your tracking number to get real-time updates on your
              package
            </p>
          </div>
        </div>
      </div>

      {/* Tracking Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your tracking number"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                onKeyPress={handleKeyPress}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleTrackShipment}
              disabled={loading}
              className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Tracking...
                </>
              ) : (
                <>
                  <FiNavigation className="mr-2" />
                  Track Shipment
                </>
              )}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {packageDetails && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Package Details Header */}
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FiTruck className="mr-3" />
                Shipment Details
              </h2>
            </div>

            {/* Package Information */}
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FiUser className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Parcel Holder
                    </h3>
                    <p className="text-lg font-medium">
                      {packageDetails.parcelHolder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FiMapPin className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Current Location
                    </h3>
                    <p className="text-lg font-medium">
                      {packageDetails.currentLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FiPackage className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Cargo Category
                    </h3>
                    <p className="text-lg font-medium">
                      {packageDetails.cargoCategory}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FiMapPin className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Origin
                    </h3>
                    <p className="text-lg font-medium">
                      {packageDetails.takeOffLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FiMapPin className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Destination
                    </h3>
                    <p className="text-lg font-medium">
                      {packageDetails.destination}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FiCalendar className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Estimated Arrival
                    </h3>
                    <p className="text-lg font-medium">
                      {packageDetails.arrivalDate
                        ? new Date(
                            packageDetails.arrivalDate
                          ).toLocaleDateString()
                        : "Calculating..."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="px-6 pb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Shipment Status
                </h3>
                <div className="flex items-center">
                  <div
                    className={`h-3 flex-grow rounded-full mr-3 ${
                      packageDetails.status === "Delivered"
                        ? "bg-green-500"
                        : packageDetails.status === "In Transit"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  ></div>
                  <span className="font-medium">{packageDetails.status}</span>
                </div>
              </div>
            </div>

            {/* Map Display */}
            {coordinates && (
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <FiMapPin className="text-blue-600 mr-2" />
                  Current Location Map
                </h3>
                <div className="h-96 rounded-lg overflow-hidden">
                  <LocationMap
                    currentLocation={`${coordinates.lat},${coordinates.lng}`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackAndTrace;
