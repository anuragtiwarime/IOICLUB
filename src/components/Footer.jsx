import React, { useState } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleHoliday = () => {
    navigate("/holidays");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Contact Us
            </h3>
            <p className="mb-2">12th Floor, Brigade Signature Tower,</p>
            <p className="mb-2">Old Madras Rd, Sannatammanahalli,</p>
            <p className="mb-2">Bengaluru, Karnataka 560049</p>
            <p className="mt-4">
              <a
                href="mailto:studentsuccess@pwioi.com"
                className="text-blue-400 hover:text-blue-300 transition-all duration-300 ease-in-out hover:underline"
              >
                studentsuccess@pwioi.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Quick Links
            </h3>
            <div className="w-18 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <div className="quick_links grid grid-cols-2">
              <ul className="space-y-4">
                <li>
                  <a onClick={handleHoliday} className="cursor-pointer">Holidays</a>
                </li>
                {['About Us', 'Admissions', 'Academic Programs'].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="https://pwioi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a onClick={() => navigate("/lifeatpwioi")} className="hover:text-blue-400 transition-colors cursor-pointer">
                    Campus Life
                  </a>
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigate("/rank-predictor")}
                    className="hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    Rank Predictor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/attendance-report")}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Attendance Report
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:ml-5">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Follow Us
            </h3>
            <ul className="flex items-center gap-6">
              <li className="flex items-center">
                <a
                  href="https://www.youtube.com/@PW-IOI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transform hover:scale-125 transition-all duration-300"
                >
                  <FaYoutube className="text-3xl" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.instagram.com/pw_ioi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transform hover:scale-125 transition-all duration-300"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.linkedin.com/school/pw-ioi/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transform hover:scale-125 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 opacity-50"></div>
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm hover:text-gray-300 transition-colors duration-300">
            &copy; 2024 PW Institute of Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
