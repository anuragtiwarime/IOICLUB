import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>12th Floor, Brigade Signature Tower,</p>
            <p>Old Madras Rd, Sannatammanahalli,</p>
            <p>Bengaluru, Karnataka 560049</p>
            <p>Email: studentsuccess@pwioi.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://pwioi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Holidays
                </a>
              </li>
              <li>
                <a
                  href="https://pwioi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://pwioi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="https://pwioi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Academic Programs
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=xL8op-oqRTg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Campus Life
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.youtube.com/@PW-IOI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pw_ioi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/school/pw-ioi/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 PW Institute of Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}