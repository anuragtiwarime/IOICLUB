import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; 
import Man from '../assets/man.webp';

const MangagementPage = () => {
  const students = [
    
     
      {
          name: 'Abhinav Jain',
          city: '',  
          state: '', 
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Abhishek Kumar',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Amrita P',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Atchaya R',
          city: ' Madurai',
          state: 'Tamil Nadu',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Deeksha Pawar',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Deepak',
          city: 'Bhadurpally',
          state: 'Andhra Pradesh',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Deepak Kumar Mahto',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Iffa Naaz',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Jasleen Kaur',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Jaypal pandey',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Kashish Kashish',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Khushal',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Mayank Ranjan',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Md kaif alam',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Parvathi Chandhana',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'PRAJWAL KAGALAGOMB',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Pulkit Vyas',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Raj Mishra',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Rajdeep Debnath',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Sahil Singh',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Sahil Soni',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Shivam Kumar',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Shreya Tiwari',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Shubham Kumar Saurav',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Tushar Dengle',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Shristi',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Vivek',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Vivek Sahu',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Yash Sahu',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      },
      {
          name: 'Dharani Hosur',
          city: '',
          state: '',
          photo: Man,
          linkedIn: '',
      }

  ];

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8 text-center">Our SOM Students</h1>
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
  );
};

export default MangagementPage;
