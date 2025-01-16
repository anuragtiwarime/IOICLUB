import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-black text-white fixed w-full z-50 shadow-lg transition-all duration-300 ease-in-out ${
        showNavbar ? 'top-0' : '-top-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dkxongd5z/image/upload/v1736950534/logo_v2tpru.png"
              alt="Logo"
              className="h-12"
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[1rem] font-medium tracking-wide">
            <Link
              to="/clubs"
              className="hover:text-gray-300 transition-all duration-200 ease-in-out border-b-2 border-transparent hover:border-gray-300"
            >
              Clubs
            </Link>
            <Link
              to="/policies"
              className="hover:text-gray-300 transition-all duration-200 ease-in-out border-b-2 border-transparent hover:border-gray-300"
            >
              Policies
            </Link>
            <Link
              to="/careers"
              className="hover:text-gray-300 transition-all duration-200 ease-in-out border-b-2 border-transparent hover:border-gray-300"
            >
              Careers
            </Link>
            {/* Dropdown for Students */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span
                className="flex items-center hover:text-gray-300 transition-all duration-200 ease-in-out cursor-pointer border-b-2 border-transparent hover:border-gray-300"
              >
                Students
                <GoChevronDown className="ml-1" />
              </span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-black shadow-lg rounded-md">
                  <Link
                    to="/students/technology"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition"
                  >
                    School of Technology
                  </Link>
                  <Link
                    to="/students/management"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition"
                  >
                    School of Management
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/facultyandstaff"
              className="hover:text-gray-300 transition-all duration-200 ease-in-out border-b-2 border-transparent hover:border-gray-300"
            >
              Faculty & Staff
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black transition-all duration-300 ease-in-out">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              to="/clubs"
              className="block text-lg font-medium hover:text-gray-300 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Clubs
            </Link>
            <Link
              to="/policies"
              className="block text-lg font-medium hover:text-gray-300 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Policies
            </Link>
            <Link
              to="/careers"
              className="block text-lg font-medium hover:text-gray-300 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            {/* Dropdown in Mobile */}
            <div>
              <span className="block text-lg font-medium hover:text-gray-300 transition-all duration-200">
                Students
              </span>
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/students/technology"
                  className="block text-sm font-medium hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  School of Technology
                </Link>
                <Link
                  to="/students/management"
                  className="block text-sm font-medium hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  School of Management
                </Link>
              </div>
            </div>
            <Link
              to="/facultyandstaff"
              className="block text-lg font-medium hover:text-gray-300 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Faculty & Staff
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
