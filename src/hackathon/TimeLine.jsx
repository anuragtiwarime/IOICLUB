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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-8" style={{background: 'linear-gradient(135deg, #00469b 0%, #4d9de6 100%)'}}>
      {/* Centered Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">TimeLine</h1>
      </div>

      {/* Vertical Timeline Container */}
      <div className="flex flex-col items-center max-w-4xl mx-auto relative">
        {/* Vertical Line - Full Height */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block" style={{background: 'linear-gradient(to bottom, #4d9de6, #00469b)'}}></div>

        {/* Day 1 Section */}
        <div className="flex flex-col md:flex-row items-center w-full mb-8 relative">
          {/* Day 1 Card - Left Side on Desktop */}
          <div className="w-full md:w-5/12 md:pr-8 mb-4 md:mb-0">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center" style={{color: '#4d9de6'}}>Day 1: 28th May</h2>
              <div className="space-y-3">
                {scheduleData.day1.map((item, index) => (
                  <div key={index} className="text-white/90 text-sm">
                    {item.time} - {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow and Dot for Day 1 - Desktop Only */}
          <div className="hidden md:flex items-center justify-center w-2/12">
            {/* Arrow pointing from center to left */}
            <div className="flex items-center">
              <div className="w-8 h-0.5" style={{backgroundColor: '#4d9de6'}}></div>
              <div className="w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent" style={{borderRightColor: '#4d9de6'}}></div>
            </div>
            {/* Center dot */}
            <div className="w-4 h-4 rounded-full mx-2 border-4 border-white shadow-lg" style={{backgroundColor: '#4d9de6'}}></div>
          </div>

          {/* Empty space on right for Day 1 */}
          <div className="hidden md:block w-5/12"></div>
        </div>

        {/* Day 2 Section */}
        <div className="flex flex-col md:flex-row items-center w-full relative">
          {/* Empty space on left for Day 2 */}
          <div className="hidden md:block w-5/12"></div>

          {/* Arrow and Dot for Day 2 - Desktop Only */}
          <div className="hidden md:flex items-center justify-center w-2/12">
            {/* Center dot */}
            <div className="w-4 h-4 rounded-full mx-2 border-4 border-white shadow-lg" style={{backgroundColor: '#00469b'}}></div>
            {/* Arrow pointing from center to right */}
            <div className="flex items-center">
              <div className="w-8 h-0.5" style={{backgroundColor: '#00469b'}}></div>
              <div className="w-0 h-0 border-t-2 border-b-2 border-l-4 border-transparent" style={{borderLeftColor: '#00469b'}}></div>
            </div>
          </div>

          {/* Day 2 Card - Right Side on Desktop */}
          <div className="w-full md:w-5/12 md:pl-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center" style={{color: '#00469b'}}>Day 2: 29th May</h2>
              <div className="space-y-3">
                {scheduleData.day2.map((item, index) => (
                  <div key={index} className="text-white/90 text-sm">
                    {item.time} - {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}