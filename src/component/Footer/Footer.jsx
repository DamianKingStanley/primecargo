import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-16 px-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Have a Shipment with Us?
          </h1>
          <p className="text-lg md:text-xl text-black">
            Let’s ensure your package gets delivered swiftly & securely.
          </p>
        </div>
        <Link
          to="/track"
          className="mt-6 md:mt-0 bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition"
        >
          Track Shipment →
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <span className="text-black">Connect with us:</span>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-600 hover:bg-gray-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-600 hover:bg-gray-700 transition"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-600 hover:bg-gray-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Footer Links & Copyright */}
        <div className="text-black mt-6 md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Prime Cargo. All Rights Reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6 mt-2">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition">
              Terms of use
            </Link>
            <Link to="#" className="hover:text-white transition">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
