import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

const scheduleData = {
  day1: [
    { time: "10:00 AM", title: "Registrations" },
    { time: "10:00 - 10:20", title: "Introduction" },
    { time: "10:20 - 12:30", title: "Cloud overview session" },
    { time: "12:30 - 12:45", title: "Quiz" },
    { time: "12:45 - 13:30", title: "Break for lunch" },
    { time: "13:30 - 14:30", title: "Industry session" },
    { time: "14:30 - 15:15", title: "Deep-dive session" },
    { time: "15:15 - 15:45", title: "Hackathon overview" },
    { time: "15:45 - 16:00", title: "Final Q&A and group picture" },
    { time: "16:00 onward", title: "Hack overnight" },
  ],
  day2: [
    { time: "5:00 AM", title: "Solution submission" },
    { time: "7:30 AM", title: "Results announcement" },
    { time: "10:00 AM", title: "Final briefing" },
    { time: "10:00 - 12:45", title: "Evaluations" },
    { time: "10:00 - 12:45", title: "Training of Trainers" },
    { time: "12:45 - 13:30", title: "Break for lunch" },
    { time: "13:30 - 14:30", title: "Valedictory session" },
    { time: "14:30 - 14:45", title: "Final Q&A and group picture" },
  ],
};

export default function TimeLine() {
  return (
    <div
      id="schedule"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
          Event Timeline
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join us for an intensive 2-day AWS Hackathon experience filled with learning, innovation, and collaboration
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">Day 1</h3>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Online Available</span>
                    </div>
                  </div>
                  <p className="text-blue-100 text-lg font-medium">June 12th, 2024</p>
                </div>
              </div>

              {/* Schedule Items */}
              <div className="p-6 space-y-4">
                {scheduleData.day1.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                      index % 2 === 0 
                        ? 'bg-blue-50 hover:bg-blue-100' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index % 2 === 0 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-600 text-white'
                      }`}>
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className={`text-sm font-semibold mb-1 ${
                        index % 2 === 0 ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        {item.time}
                      </div>
                      <div className="text-gray-800 font-medium">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">Day 2</h3>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Campus Required</span>
                    </div>
                  </div>
                  <p className="text-indigo-100 text-lg font-medium">June 13th, 2024</p>
                </div>
              </div>

              {/* Schedule Items */}
              <div className="p-6 space-y-4">
                {scheduleData.day2.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                      index % 2 === 0 
                        ? 'bg-indigo-50 hover:bg-indigo-100' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index % 2 === 0 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-gray-600 text-white'
                      }`}>
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className={`text-sm font-semibold mb-1 ${
                        index % 2 === 0 ? 'text-indigo-700' : 'text-gray-700'
                      }`}>
                        {item.time}
                      </div>
                      <div className="text-gray-800 font-medium">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Connection Line for Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg"></div>
      </div>
    </div>
  );
}