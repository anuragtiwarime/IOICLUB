import { MapPin, Briefcase, Award, Users, Sparkles } from "lucide-react";
import React from "react";

function Mentors() {
  const mentors = [
    {
      name: "Akanksha Rai Sharma",
      role: "AWS SME / Trainer",
      organization: "AWS",
      designation: "Technical Program Manager",
      image: "/Akanksha.jpg",
    },
    {
      name: "Abhijit Shinde",
      role: "Industry Expert",
      organization: "Centilytics",
      designation: "Data Scientist",
      image: "/Abhijit.jpg",
    },
    {
      name: "Irshad Chohan",
      role: "AWS SME",
      organization: "AWS",
      designation: "Principal Solution Architect",
      image: "/Irshad.jpg",
    },
    {
      name: "Deewakar Gupta",
      role: "AWS SME",
      organization: "AWS",
      designation: "Sr. Manager",
      image: "/deewakar.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Meet Our Mentors
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Profile Image Section */}
                  <div className="flex flex-col items-center mb-6 flex-grow">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 font-semibold text-lg" style={{display: 'none'}}>
                            {mentor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        <Sparkles className="w-3 h-3 inline mr-1" />
                        Expert
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center flex-grow flex flex-col justify-between">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                          {mentor.name}
                        </h3>
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium mb-3">
                          <Award className="w-4 h-4 mr-2" />
                          {mentor.role}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm w-full justify-center">
                          <Briefcase className="w-3 h-3 mr-2" />
                          <span className="truncate">{mentor.designation}</span>
                        </div>
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm w-full justify-center">
                          <MapPin className="w-3 h-3 mr-2" />
                          {mentor.organization}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;