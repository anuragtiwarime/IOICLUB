import React, { useState } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




export default function Footer() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleHoliday = () => {
    navigate("/holidays");
  };

  return (
    <footer className="bg-black text-white py-12 font-roboto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
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

          <div>
            <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
            <div className="w-18 h-1 bg-gray-500 mx-auto rounded-full mb-6"></div>
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
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a onClick={() => navigate("/lifeatpwioi")} className="hover:text-gray-300 transition-colors cursor-pointer">
                    Campus Life
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button className="hover:text-gray-300 transition-colors">
                        Rank Predictor
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[650px]">
                      <DialogHeader>
                        <DialogTitle>Rank Predictor</DialogTitle>
                        <DialogDescription>
                          <iframe
                            src="https://script.google.com/a/macros/pw.live/s/AKfycbzhNlzoHsj7fiCgkan688qkDSgg4ievMOkBnWifwqvYdt5dUUWrPlzgzxcDWCnv3Y8iUQ/exec"
                            title="Rank Predictor"
                            className="w-full h-96"
                          />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:ml-5">
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <ul className="flex items-center gap-4">
              <li className="flex items-center">
                <a
                  href="https://www.youtube.com/@PW-IOI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaYoutube className="text-white text-3xl" />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/pw_ioi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/school/pw-ioi/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaLinkedin className="text-white text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12"></div>
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm">
            &copy; 2024 PW Institute of Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
