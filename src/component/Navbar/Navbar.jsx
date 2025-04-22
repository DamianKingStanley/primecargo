import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/logo.2b10e23.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInformation"));
    if (userData && userData.result.role) {
      setUsername(userData.result.role);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userInformation"));
        if (userData && userData.result.id) {
          const response = await fetch(
            `https://tracking-server-d6l5.onrender.com/user/profile/${userData.result.id}`,
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
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (isLoggedIn) fetchUserProfile();
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full  z-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-3 flex items-center justify-between ">
        {/* Logo */}
        <Link to="/">
          {/* <img className="w-24" src={logo} alt="Logo" /> */}
          <p className="text-xl font-bold hover:text-orange-600">Prime Cargo</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-orange-600">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-orange-600">
            Contact Us
          </Link>
          <Link to="/track" className="hover:text-orange-600">
            Track
          </Link>
          <Link to="/request-a-quote" className="hover:text-orange-600">
            Request a Quote
          </Link>
          {isLoggedIn ? (
            <Link
              to={`/user/profile/${user?._id}`}
              className="hover:text-orange-600"
            >
              Profile
            </Link>
          ) : (
            <p></p>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:bg-inherit"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed top-15 left-0 w-full h-fit py-10 z-40 text-left flex flex-col px-3 space-y-10 text-sm font-semibold shadow-lg">
          <Link
            to="/"
            className="hover:text-orange-600 px-2  border-b-2 border-gray-200 "
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-orange-600 px-1  border-b-2 border-gray-200 "
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-orange-600 px-2  border-b-2 border-gray-200 "
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/track"
            className="hover:text-orange-600 px-2  border-b-2 border-gray-200 "
            onClick={toggleMenu}
          >
            Track
          </Link>
          <Link
            to="/request-a-quote"
            className="hover:text-orange-600 px-2  border-b-2 border-gray-200 "
            onClick={toggleMenu}
          >
            Request a Quote
          </Link>
          {isLoggedIn ? (
            <Link
              to={`/user/profile/${user?._id}`}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full"
              onClick={toggleMenu}
            >
              Profile
            </Link>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
