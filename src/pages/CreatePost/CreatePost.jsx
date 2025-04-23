import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Function to generate a random code (mixture of letters and numbers) with "FRC-" prefix
const generateCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let code = "PC-";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }
  return code;
};

const CreatePost = () => {
  const [parcelHolder, setParcelHolder] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [takeOffLocation, setTakeOffLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [cargoCategory, setCargoCategory] = useState("");
  const [dateOfQuote, setDateOfQuote] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("In Transit");
  const [errorResponse, setErrorResponse] = useState(null);
  const [code, setCode] = useState(generateCode()); // Automatically generate code

  const navigate = useNavigate();

  useEffect(() => {
    const CheckProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userInformation"));
        if (!userData?.token || !userData) {
          navigate("/login");
          return;
        }

        // Check if the user is an admin
        if (userData?.result?.role !== "admin") {
          navigate("/");
          return;
        }
      } catch (error) {
        console.error("Error checking user profile:", error);
      }
    };

    CheckProfile();
  }, [navigate]);

  const handleSubmit = async () => {
    const userData = JSON.parse(localStorage.getItem("userInformation"));
    const userId = userData?.result?.id;

    const getUserToken = () => {
      return userData ? userData.token : "";
    };

    try {
      const response = await fetch(
        "https://tracking-server-d6l5.onrender.com/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserToken()}`,
          },
          body: JSON.stringify({
            userId,
            parcelHolder,
            code,
            currentLocation,
            takeOffLocation,
            destination,
            arrivalDate,
            cargoCategory,
            dateOfQuote,
            location,
            status,
          }),
        }
      );

      if (response.ok) {
        // const data = await response.json();
        navigate("/create-package");
      } else {
        const errorResponseData = await response.json();
        setErrorResponse(errorResponseData.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100  py-20">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="bg-blue-600 py-6 px-8">
          <h2 className="text-3xl font-bold text-white">Create New Package</h2>
          <p className="text-blue-100 mt-1">
            Fill in the package details below
          </p>
        </div>

        {errorResponse && (
          <p className="bg-red-100 text-red-700 p-4 mb-4 rounded-md text-center">
            {errorResponse}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="parcelHolder"
              className="block text-lg font-medium text-gray-700"
            >
              Parcel Holder
            </label>
            <input
              type="text"
              id="parcelHolder"
              value={parcelHolder}
              onChange={(e) => setParcelHolder(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="parcelCode"
              className="block text-lg font-medium text-gray-700"
            >
              Parcel Code
            </label>
            <input
              type="text"
              id="parcelCode"
              value={code}
              readOnly
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="currentLocation"
              className="block text-lg font-medium text-gray-700"
            >
              Current Location
            </label>
            <input
              type="text"
              id="currentLocation"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="takeOffLocation"
              className="block text-lg font-medium text-gray-700"
            >
              Take Off Location
            </label>
            <input
              type="text"
              id="takeOffLocation"
              value={takeOffLocation}
              onChange={(e) => setTakeOffLocation(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-lg font-medium text-gray-700"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="arrivalDate"
              className="block text-lg font-medium text-gray-700"
            >
              Arrival Date
            </label>
            <input
              type="date"
              id="arrivalDate"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="cargoCategory"
              className="block text-lg font-medium text-gray-700"
            >
              Cargo Category
            </label>
            <select
              id="cargoCategory"
              value={cargoCategory}
              onChange={(e) => setCargoCategory(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="General Cargo">General Cargo</option>
              <option value="Dangerous Goods">Dangerous Goods</option>
              <option value="Perishable Goods">Perishable Goods</option>
              <option value="Heavy Cargo">Heavy Cargo</option>
              <option value="Project Cargo">Project Cargo</option>
              <option value="Refrigerated Cargo">Refrigerated Cargo</option>
              <option value="Live Animals">Live Animals</option>
              <option value="Fragile Cargo">Fragile Cargo</option>
              <option value="High-Value Cargo">High-Value Cargo</option>
              <option value="Automobile Cargo">Automobile Cargo</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="arrivalDate"
              className="block text-lg font-medium text-gray-700"
            >
              Quote Date
            </label>
            <input
              type="date"
              id="arrivalDate"
              value={dateOfQuote}
              onChange={(e) => setDateOfQuote(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-lg font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-lg font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
              <option value="At Sorting Facility">At Sorting Facility</option>
              <option value="Delayed">Delayed</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
