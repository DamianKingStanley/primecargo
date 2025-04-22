import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaShippingFast } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Check auth status on mount and route change
  useEffect(() => {
    const checkAuth = () => {
      const userData = JSON.parse(localStorage.getItem("userInformation"));
      if (userData?.result?.role) {
        setIsLoggedIn(true);
        fetchUserProfile(userData);
      } else {
        setIsLoggedIn(false);
      }
    };

    const fetchUserProfile = async (userData) => {
      try {
        const response = await fetch(
          `https://tracking-server-d6l5.onrender.com/user/profile/${userData.result.id}`,
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        const data = await response.json();
        if (response.ok) setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    checkAuth();
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("userInformation");
    setIsLoggedIn(false);
    setUser(null);
    closeMenu();
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/track", label: "Track" },
    { path: "/request-a-quote", label: "Request a Quote" },
  ];

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <FaShippingFast className="text-blue-600 text-2xl" />
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              PrimeCargo
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={`/user/profile/${user?._id}`}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-500"
                >
                  <FaUserCircle className="text-lg" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-500"
                >
                  <FiLogOut className="text-lg" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/user/login"
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/user/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white w-full overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {isLoggedIn ? (
                <>
                  <Link
                    to={`/user/profile/${user?._id}`}
                    onClick={closeMenu}
                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-3 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                  >
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex space-x-4 pt-4">
                  <Link
                    to="/user/login"
                    onClick={closeMenu}
                    className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/user/register"
                    onClick={closeMenu}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow-sm"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
