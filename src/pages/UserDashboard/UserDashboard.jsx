import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBox,
  FaFileAlt,
  // FaSignOutAlt,
  FaTruck,
  FaDollarSign,
} from "react-icons/fa";
import UserPosts from "../UserPosts/UserPosts";
import Quotes from "../Quotes/Quotes";

const UserDashboard = () => {
  // const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("quotes");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const CheckProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userInformation"));
        if (!userData?.token || !userData) {
          navigate("/login");
          return;
        }
      } catch (error) {
      } finally {
      }
    };

    CheckProfile();
  }, [navigate]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userInformation"));
        if (!userData?.token) {
          navigate("/login");
          return;
        }

        const loggedId = userData?.result?.id;

        const response = await fetch(
          `https://server.vastseacarrier.com/user/profile/${loggedId}`,
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          console.error("Failed to fetch user profile:", data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem("userInformation");
  //   navigate("/user/login");
  // };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const loggedId = user?.id;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaTruck className="text-blue-600 text-2xl" />
            <span className="text-xl font-bold text-gray-800">VastSea</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </header> */}

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-6">
        {/* User Profile Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="relative">
                <FaUserCircle className="text-6xl text-blue-500" />
                {user?.role === "admin" && (
                  <span className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Admin
                  </span>
                )}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800">
                {user?.fullname}
              </h1>
              <p className="text-gray-600 mb-2">{user?.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <FaTruck className="mr-1" />
                  <span>
                    Member since:{" "}
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {user?.role === "admin" && (
                  <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    <FaFileAlt className="mr-1" />
                    <span>Administrator</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {user?.role === "admin" && (
                <button
                  onClick={() => setActiveTab("packages")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === "packages"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <FaBox />
                  <span>My Packages</span>
                </button>
              )}

              <button
                onClick={() => setActiveTab("quotes")}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === "quotes"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <FaDollarSign />
                <span>My Quotes</span>
              </button>
              {user?.role === "admin" && (
                <button
                  onClick={() => setActiveTab("allQuotes")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === "allQuotes"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <FaFileAlt />
                  <span>All Quotes</span>
                </button>
              )}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {activeTab === "packages" && user?.role === "admin" && (
            <UserPosts userId={loggedId} />
          )}
          {activeTab === "quotes" && <Quotes userId={loggedId} />}
          {activeTab === "allQuotes" && user?.role === "admin" && (
            <Quotes adminMode={true} />
          )}
        </div>

        {/* Admin Quick Actions */}
        {user?.role === "admin" && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/create-package")}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <FaBox className="text-xl" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900">Create Package</h3>
                <p className="text-sm text-gray-500">Add new shipment</p>
              </div>
            </button>
            <button
              onClick={() => navigate("/track")}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <FaTruck className="text-xl" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900">Track Shipment</h3>
                <p className="text-sm text-gray-500">Monitor packages</p>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("allQuotes")}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                <FaDollarSign className="text-xl" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900">Manage Quotes</h3>
                <p className="text-sm text-gray-500">View all requests</p>
              </div>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;
