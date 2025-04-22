import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [loginMessage, setLoginMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const storeUserData = (userData) => {
    localStorage.setItem("userInformation", JSON.stringify(userData));
    return true;
  };

  const submitForm = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://tracking-server-d6l5.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            role,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        storeUserData(data);
        setIsLoading(false);
        if (role === "admin") {
          window.location.href = "/create-package";
        } else {
          window.location.href = "/";
        }
      } else {
        const errorResponseData = await response.json();
        setLoginMessage(
          errorResponseData.message || "Login failed. Try again later."
        );
        setIsLoading(false);
      }
    } catch (error) {
      setLoginMessage("An error occurred. Try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 w-full max-w-md">
        {loginMessage && (
          <div
            className={`$ {
              loginMessage === "Login successful"
                ? "text-green-600"
                : "text-red-600"
            } text-center mb-4`}
          >
            {loginMessage}
          </div>
        )}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Prime Cargo Logistics
        </h1>
        <p className="text-center text-gray-600 mb-4">Admin Sign In</p>
        <div>
          <input
            type="email"
            name="email"
            id="emailL"
            placeholder="Enter your email here"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="passwordL"
              placeholder="Enter your password here"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="hidden w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={submitForm}
            className={`w-full px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : "Login"}
          </button>
          <p className="text-center text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="text-orange-500 hover:underline hover:text-orange-700 ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
