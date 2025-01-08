import React from 'react';
import Ankit from '../assets/ankit.jpg';
import { FaLinkedin } from 'react-icons/fa';
import Man from '../assets/man.webp'

const TechnologyPage = () => {
 const students = [
     {
       name: 'Ankit Raj',
       city: 'Hazaribagh',
       state: 'Jharkhand',
       photo: Ankit,
       linkedIn: 'https://www.linkedin.com/in/ankitraj061',
     },
     {
       name: 'Anuj Kumar',
       city: 'Banaras',
       state: 'Uttar Pradesh',
       photo: Man,
       linkedIn: 'https://www.linkedin.com/in/ankitraj061',
     },
     {
       name: 'Umesh Sharma',
       city: 'Ranchi',
       state: 'Jharkhand',
       photo: Man,
       linkedIn: 'https://www.linkedin.com/in/ankitraj061',
     },
     {
       name: 'Ravi Verma',
       city: 'Patna',
       state: 'Bihar',
       photo: Man,
       linkedIn: 'https://www.linkedin.com/in/ankitraj061',
     },
   ];
 
   return (
     <div className="pt-24 px-4 max-w-7xl mx-auto">
       <h1 className="text-3xl font-bold text-black mb-8 text-center">Our SOT Students</h1>
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

export default TechnologyPage;
