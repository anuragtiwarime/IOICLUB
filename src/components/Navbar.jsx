import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={() => {
        handleLinkClick(to);
        if (onClick) onClick();
      }}
      className={`relative group hover:text-gray-300 transition-all duration-200 ease-in-out py-1 cursor-pointer
                ${activeLink === to ? 'text-white' : 'text-gray-300'}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out
                     ${activeLink === to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
    </Link>
  );

  return (
    <nav className="bg-black backdrop-blur-md text-white fixed w-full z-50 shadow-lg top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center space-x-2 transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/pwioi.png?updatedAt=1749631662026"
              alt="Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[1rem] font-medium">
            <NavLink to="/clubs">Clubs</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/policies">Policies</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            
            {/* Students Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span
                className={`flex items-center cursor-pointer group relative py-1
                         ${activeLink === "/students" ? 'text-white' : 'text-gray-300 hover:text-gray-300'}`}
              >
                Students
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 
                                      ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out
                              ${activeLink === "/students" ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </span>
              
              <div className={`absolute top-full -left-4 pt-2 transition-all duration-200 ease-in-out transform
                           ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 overflow-hidden min-w-[200px]">
                  {[ 
                    { to: "/students/technology", label: "School of Technology" },
                    { to: "/students/management", label: "School of Management" }
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => handleLinkClick("/students")}
                      className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/facultyandstaff">Faculty & Staff</NavLink>

            <Link
                to="/cee"
                onClick={() => handleLinkClick("/cee")}
                className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              CEE
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none transition-transform duration-200 hover:scale-110"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out
                 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-2 space-y-1">
          {[ 
            { to: "/clubs", label: "Clubs" },
            {to:"/events" , label : "Events"},
            { to: "/policies", label: "Policies" },
            { to: "/careers", label: "Careers" }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => {
                setIsOpen(false);
                handleLinkClick(item.to);
              }}
              className={`block py-2 px-4 text-lg font-medium rounded-lg transition-all duration-200
                       ${activeLink === item.to 
                         ? 'bg-gray-800/50 text-white' 
                         : 'text-gray-300 hover:bg-gray-800/30 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Students Section */}
          <div className="py-2 px-4">
            <span className="block text-lg font-medium text-gray-300 mb-2">Students</span>
            <div className="ml-4 space-y-1">
              {[ 
                { to: "/students/technology", label: "School of Technology" },
                { to: "/students/management", label: "School of Management" }
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setIsOpen(false);
                    handleLinkClick("/students");
                  }}
                  className="block py-2 px-4 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/facultyandstaff"
            onClick={() => {
              setIsOpen(false);
              handleLinkClick("/facultyandstaff");
            }}
            className={`block py-2 px-4 text-lg font-medium rounded-lg transition-all duration-200
                     ${activeLink === "/facultyandstaff" 
                       ? 'bg-gray-800/50 text-white' 
                       : 'text-gray-300 hover:bg-gray-800/30 hover:text-white'}`}
          >
            Faculty & Staff
          </Link>
          <Link
                to="/cee"
                onClick={() => {
                  setIsOpen(false);
                  handleLinkClick("/cee");
                }}
                className="block py-2 px-4 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg text-center"
            >
              CEE
            </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;