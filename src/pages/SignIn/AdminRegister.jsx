import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [secretKey, setSecretKey] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (/^\d/.test(fullname)) {
      newErrors.fullname = "Full name cannot start with a number.";
      isValid = false;
    }

    if (/^\d/.test(email)) {
      newErrors.email = "Email cannot start with a number.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (password.length < 7) {
      newErrors.password = "Password must be at least 7 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://tracking-server-d6l5.onrender.com/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            password,
            role,
            secretKey: role === "admin" ? secretKey : undefined,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setRegisterMessage("Registered successfully");
        navigate("/login");
      } else {
        const errorResponseData = await response.json();
        setRegisterMessage(
          errorResponseData.message || "Registration failed. Try again later."
        );
      }
    } catch (error) {
      setRegisterMessage("Registration failed. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-20">
      <div className="w-full max-w-md p-6 bg-white  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Prime Cargo Logistic
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Fill the form below to get started
        </p>

        {registerMessage && (
          <div
            className={`mt-4 p-2 text-center rounded-lg text-sm ${
              registerMessage === "Registered successfully"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {registerMessage}
          </div>
        )}

        <div className="mt-4 space-y-4">
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.fullname ? "border-red-500" : "border-gray-300"
            }`}
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullname && (
            <p className="text-sm text-red-500">{errors.fullname}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter a valid email"
            className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}

          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="admin">Admin</option>
          </select>

          {role === "admin" && (
            <input
              type="password"
              id="secretKey"
              placeholder="Admin secret key"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
          )}

          <button
            onClick={submitForm}
            className={`w-full px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : "Register"}
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 hover:underline hover:text-orange-400"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
