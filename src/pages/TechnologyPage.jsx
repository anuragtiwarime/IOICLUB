import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Man from '../assets/man.webp';
import Woman from '../assets/women.jpeg';
import Footer from '../components/Footer';
import batch23SOT from '../data/batch23SOT.json';
import batch24SOT from '../data/batch24SOT.json';

const TechnologyPage = () => {
  const [activeBatch, setActiveBatch] = useState('23'); // Default batch is 23

  const students = (activeBatch === '23' ? batch23SOT : batch24SOT).map(student => ({
    ...student,
    photo: student.photo === "Man" ? Man : student.photo === "Woman" ? Woman : student.photo
  }));

  return (
    <>
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Our SOT Students</h1>

        {/* Buttons to toggle between batches */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2  font-medium transition-colors ${
              activeBatch === '23' ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveBatch('23')}
          >
            23 Batch
          </button>
          <button
            className={`px-4 py-2 font-medium transition-colors ${
              activeBatch === '24' ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveBatch('24')}
          >
            24 Batch
          </button>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <a
              key={index}
              href={student.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <img
                src={student.photo}
                alt={student.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <div className="flex items-center justify-center gap-2">
                <p className="text-xl font-semibold">{student.name}</p>
                <FaLinkedin
                  className="text-black text-xl hover:text-gray-800 transition-colors"
                  title="LinkedIn Profile"
                />
              </div>
              <p className="text-gray-700">{student.city}, {student.state}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechnologyPage;