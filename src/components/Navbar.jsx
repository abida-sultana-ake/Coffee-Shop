import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navLinkClasses = ({ isActive }) =>
    `hover:text-yellow-800 transition-colors ${
      isActive ? "text-yellow-900 font-semibold" : "text-yellow-700"
    }`;

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Logout logic
      setIsLoggedIn(false);
      navigate("/"); 
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-yellow-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img
                src="/assets/coffee-cup.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-2xl font-bold text-yellow-800 mt-2">
              Bean & Dream
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center font-medium">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/menu" className={navLinkClasses}>
              Menu
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>

            {/* Cart Icon */}
            <button className="relative text-yellow-700 hover:text-yellow-900 transition-colors">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                3
              </span>
            </button>

            {/* Login/Logout Button */}
            <button
              onClick={handleAuthClick}
              className={`w-full px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-lg ${
                isLoggedIn
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400"
              }`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Cart Icon */}
            <button className="relative text-yellow-700 hover:text-yellow-900 transition-colors">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                3
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-yellow-800 text-white p-3 rounded-lg transition duration-300 hover:bg-yellow-700 hover:shadow-lg"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-3 space-y-2 bg-yellow-50 shadow-inner">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium hover:bg-yellow-100 transition-colors ${
                isActive ? "text-yellow-900 font-semibold" : "text-yellow-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium hover:bg-yellow-100 transition-colors ${
                isActive ? "text-yellow-900 font-semibold" : "text-yellow-700"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium hover:bg-yellow-100 transition-colors ${
                isActive ? "text-yellow-900 font-semibold" : "text-yellow-700"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium hover:bg-yellow-100 transition-colors ${
                isActive ? "text-yellow-900 font-semibold" : "text-yellow-700"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Mobile Login/Logout Button */}
          <button
            onClick={handleAuthClick}
            className={`w-full mt-2 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-lg ${
              isLoggedIn
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
