import React from "react";
import { Link } from "react-router-dom";
import { FiTruck, FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden text-center">
        <div className="bg-blue-600 p-6">
          <div className="flex justify-center">
            <FiTruck className="h-16 w-16 text-white" />
          </div>
          <h1 className="mt-4 text-4xl font-bold text-white">404</h1>
          <p className="mt-2 text-blue-100">Page Not Found</p>
        </div>

        <div className="p-8">
          {/* <div className="mx-auto max-w-xs">
            <img
              src="https://ik.imagekit.io/demo/404-error_6r3JXwZJY.png"
              alt="Lost in space illustration"
              className="w-full h-auto"
            />
          </div> */}

          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            Oops! Lost in Transit
          </h2>
          <p className="mt-2 text-gray-600">
            The page you're looking for seems to have been misplaced, just like
            a missing package. But don't worry, we'll help you get back on
            track.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <FiHome className="mr-2" />
              Home Page
            </Link>

            <Link
              to="/track"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiSearch className="mr-2" />
              Track Shipment
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="#"
              onClick={() => window.history.back()}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <FiArrowLeft className="mr-1" />
              Go back to previous page
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Need help? Contact our support team at support@primecargo.com</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
