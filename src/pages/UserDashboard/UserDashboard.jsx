import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import UserPosts from "../UserPosts/UserPosts";

const UserDashboard = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userInformation"));
        const response = await fetch(
          `https://tracking-server-d6l5.onrender.com/user/profile/${userId}`,
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
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userInformation");
    navigate("/login");
  };

  return (
    <div className="py-1">
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Dashboard
          </h2>
          {user ? (
            <div className="flex flex-col items-center">
              <FaUserCircle className="text-6xl text-gray-500 mb-4" />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">
                  {user.fullname}
                </p>
              </div>
              <div className="mt-6 space-x-4 flex">
                {user.role === "admin" && (
                  <button
                    className="flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                    onClick={() => navigate("/create-package")}
                  >
                    Create Package
                  </button>
                )}
                <button
                  className="flex items-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Loading user information...
            </p>
          )}
        </div>
      </div>
      <UserPosts />
    </div>
  );
};

export default UserDashboard;
