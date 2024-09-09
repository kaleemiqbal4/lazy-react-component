import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa"; // Example logo icon
import { HiMenu, HiX } from "react-icons/hi"; // Menu and Close icons

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <FaReact size={32} className="text-teal-400" />
          <Link
            to="/"
            className="text-2xl font-bold hover:text-teal-300 transition-colors duration-300"
          >
            MyApp
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <HiMenu size={24} />
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/about"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/course"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button for Large Screens */}
        <div className="hidden lg:block">
          <Link
            to="/login"
            className="hover:text-teal-300 transition-colors duration-300"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Off-Canvas Menu for Mobile Screens */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 lg:hidden transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            onClick={toggleMenu}
            className="text-white self-end text-3xl"
            aria-label="Close menu"
          >
            <HiX size={24} />
          </button>
          <ul className="mt-8 space-y-6">
            <li>
              <Link
                to="/"
                className="text-white text-2xl hover:text-teal-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-2xl hover:text-teal-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/course"
                className="text-white text-2xl hover:text-teal-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-2xl hover:text-teal-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white text-2xl hover:text-teal-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
