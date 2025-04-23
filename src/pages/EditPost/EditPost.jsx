import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const [parcelHolder, setParcelHolder] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [takeOffLocation, setTakeOffLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [cargoCategory, setCargoCategory] = useState("");
  const [dateOfQuote, setDateOfQuote] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("In Transit");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://tracking-server-d6l5.onrender.com/post/${postId}`
        );
        const {
          parcelHolder,
          currentLocation,
          takeOffLocation,
          destination,
          arrivalDate,
          cargoCategory,
          dateOfQuote,
          location,
          status,
        } = response.data.SinglePost;
        setParcelHolder(parcelHolder);
        setCurrentLocation(currentLocation);
        setTakeOffLocation(takeOffLocation);
        setDestination(destination);
        setArrivalDate(formatDate(arrivalDate));
        setCargoCategory(cargoCategory);
        setDateOfQuote(formatDate(dateOfQuote));
        setLocation(location);
        setStatus(status);
      } catch (error) {
        setError("Error fetching post data");
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  const submitForm = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userInformation"));
    const userId = userData?.result?.id;

    const getUserToken = () => {
      const userData = JSON.parse(localStorage.getItem("userInformation"));
      return userData ? userData.token : "";
    };

    try {
      const response = await axios.put(
        `https://tracking-server-d6l5.onrender.com/posts/edit/${postId}`,
        {
          parcelHolder,
          currentLocation,
          takeOffLocation,
          destination,
          arrivalDate,
          cargoCategory,
          dateOfQuote,
          location,
          status,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserToken()}`,
          },
        }
      );

      if (response.status === 200) {
        navigate("/user/profile/");
      } else {
        setError("Failed to update post");
      }
    } catch (error) {
      setError("Error updating post");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-1 px-2">
      <section className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Make Changes</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <label
              htmlFor="parcelHolder"
              className="block text-sm font-medium text-gray-700"
            >
              Parcel Holder
            </label>
            <input
              type="text"
              id="parcelHolder"
              value={parcelHolder}
              onChange={(e) => setParcelHolder(e.target.value)}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="currentLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Current Location
            </label>
            <input
              type="text"
              id="currentLocation"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="takeOffLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Take Off Location
            </label>
            <input
              type="text"
              id="takeOffLocation"
              value={takeOffLocation}
              onChange={(e) => setTakeOffLocation(e.target.value)}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="arrivalDate"
              className="block text-sm font-medium text-gray-700"
            >
              Arrival Date
            </label>
            <input
              type="date"
              id="arrivalDate"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="cargoCategory"
              className="block text-sm font-medium text-gray-700"
            >
              Cargo Category
            </label>
            <select
              id="cargoCategory"
              value={cargoCategory}
              onChange={(e) => setCargoCategory(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              htmlFor="dateOfQuote"
              className="block text-sm font-medium text-gray-700"
            >
              Quote Date
            </label>
            <input
              type="date"
              id="dateOfQuote"
              value={dateOfQuote}
              onChange={(e) => setDateOfQuote(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
              <option value="At Sorting Facility">At Sorting Facility</option>
              <option value="Delayed">Delayed</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditPost;
