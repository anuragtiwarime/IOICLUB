import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <p className="mb-2">12th Floor, Brigade Signature Tower,</p>
            <p className="mb-2">Old Madras Rd, Sannatammanahalli,</p>
            <p className="mb-2">Bengaluru, Karnataka 560049</p>
            <p className="mt-4">
              <a
                href="mailto:studentsuccess@pwioi.com"
                className="text-blue-400 hover:underline"
              >
                studentsuccess@pwioi.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Holidays', 'About Us', 'Admissions', 'Academic Programs', 'Campus Life'].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="https://pwioi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <ul className=" flex items-center gap-4">
              <li className="flex items-center">
                
                <a
                  href="https://www.youtube.com/@PW-IOI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaYoutube className="text-red-500 text-2xl" />
                </a>
              </li>
              <li className="flex items-center gap-3">
                
                <a
                  href="https://www.instagram.com/pw_ioi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                 <FaInstagram className="text-pink-500 text-2xl" />
                </a>
              </li>
              <li className="flex items-center gap-3">
               
                <a
                  href="https://www.linkedin.com/school/pw-ioi/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                   <FaLinkedin className="text-blue-500 text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12"></div>

        {/* Footer bottom */}
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm">
            &copy; 2024 PW Institute of Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
