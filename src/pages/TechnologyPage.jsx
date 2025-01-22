import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Man from '../assets/man.webp';
import Woman from '../assets/women.jpeg';
import Footer from '../components/Footer';
import batch23SOT from '../data/batch23SOT.json';
import batch24SOT from '../data/batch24SOT.json';

const TechnologyPage = () => {
  const [activeBatch, setActiveBatch] = useState('23');

  const students = (activeBatch === '23' ? batch23SOT : batch24SOT).map(student => ({
    ...student,
    photo: student.photo === "Man" ? Man : student.photo === "Woman" ? Woman : student.photo
  }));

  return (
    <>
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our SOT Students
          </h1>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
          
          {/* Batch Toggle Buttons */}
          <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-xl mb-12">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeBatch === '23'
                  ? 'bg-black text-white shadow-lg'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveBatch('23')}
            >
              23 Batch
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeBatch === '24'
                  ? 'bg-black text-white shadow-lg'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveBatch('24')}
            >
              24 Batch
            </button>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <a
              key={index}
              href={student.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Image Container */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-50 shadow-md group-hover:border-gray-200 transition-all duration-300">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* LinkedIn Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
                      <FaLinkedin className="text-white text-xl" />
                    </div>
                  </div>
                </div>

                {/* Student Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {student.city}, {student.state}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechnologyPage;