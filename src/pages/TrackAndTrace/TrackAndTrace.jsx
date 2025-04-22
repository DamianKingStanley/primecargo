import React, { useState } from "react";
import axios from "axios";
import Banner from "../../assets/Ocean.jpg";
import LocationMap from "./Location";

const TrackAndTrace = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [packageDetails, setPackageDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

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

    try {
      const response = await axios.get(
        `https://tracking-server-d6l5.onrender.com/track/${trackingCode}`
      );
      const details = response.data;
      setPackageDetails(details);

      // Fetch coordinates for the location
      if (details.currentLocation) {
        fetchCoordinates(details.currentLocation);
      }
    } catch (err) {
      setError("Package not found or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans mx-auto h-auto">
      <div
        className="relative flex items-center justify-center h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-4xl font-bold text-white">
          Track & Trace
        </h1>
      </div>

      <div className="my-8 mx-auto text-center">
        <label
          htmlFor="trackingCode"
          className="block font-bold mb-2 text-lg text-gray-800"
        >
          Track Details
        </label>
        <input
          type="text"
          id="trackingCode"
          placeholder="Enter Tracking Code"
          value={trackingCode}
          onChange={(e) => setTrackingCode(e.target.value)}
          className="w-3/4 md:w-1/2 lg:w-1/3 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <br />
        <button
          onClick={handleTrackShipment}
          className={`px-6 py-2 text-white font-semibold rounded transition duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-700"
          }`}
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track Shipment"}
        </button>
        {error && <p className="text-red-600 font-medium mt-4">{error}</p>}
      </div>

      {packageDetails && (
        <div className=" inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
          <div className="bg-white w-11/12 sm:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg ">
            {/* <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
              onClick={() => setPackageDetails(null)}
            >
              ×
            </button> */}
            <h2 className="text-2xl font-semibold text-center mb-6">
              Package Details
            </h2>
            <div className="space-y-4">
              <p className="p-3 bg-gray-100 rounded">
                <strong>Parcel Holder:</strong> {packageDetails.parcelHolder}
              </p>
              <p className="p-3 bg-gray-100 rounded">
                <strong>Current Location:</strong>{" "}
                {packageDetails.currentLocation}
              </p>
              <p className="p-3 bg-gray-100 rounded">
                <strong>Take-Off Location:</strong>{" "}
                {packageDetails.takeOffLocation}
              </p>
              <p className="p-3 bg-gray-100 rounded">
                <strong>Destination:</strong> {packageDetails.destination}
              </p>
              <p className="p-3 bg-gray-100 rounded">
                <strong>Arrival Date:</strong>{" "}
                {packageDetails.arrivalDate
                  ? new Date(packageDetails.arrivalDate).toLocaleDateString()
                  : "N/A"}
              </p>
              <p className="p-3 bg-gray-100 rounded">
                <strong>Cargo Category:</strong> {packageDetails.cargoCategory}
              </p>
              <p className="p-3 bg-gray-100 rounded">
                <strong>Status:</strong> {packageDetails.status}
              </p>
            </div>
            {coordinates && (
              <LocationMap
                currentLocation={`${coordinates.lat},${coordinates.lng}`}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackAndTrace;
