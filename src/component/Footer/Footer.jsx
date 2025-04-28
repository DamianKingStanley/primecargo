import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaShippingFast,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaShippingFast className="text-blue-500 text-2xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                VastSea
              </span>
            </div>
            <p className="text-gray-400">
              Delivering excellence through innovative logistics solutions
              worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.x.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/track"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Air Freight
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Ocean Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Road Transport
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Warehousing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  291 Brighton Road, South Croydon, CR2 6EQ, United Kingdom
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-blue-400" />
                <p className="text-gray-400">+44 (7777) 389698</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-blue-400" />
                <p className="text-gray-400">support@vastseacarrier.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Ship With Us?
              </h2>
              <p className="text-blue-100">
                Get started with our premium logistics services today.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/request-a-quote"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                Get a Quote
              </Link>
              <Link
                to="/contact-us"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VastSea Logistics. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
