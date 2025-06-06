import { Calendar, Clock } from "lucide-react";
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
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
      }}
    >
      {/* Background animation & grid overlay remain the same */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Event Timeline
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Join us for an intensive 2-day AWS Hackathon experience
          </p>
        </div>

        <div className="flex flex-col items-center max-w-5xl mx-auto relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block shadow-lg"
            style={{
              background: "linear-gradient(to bottom, #4d9de6, #00469b)",
            }}
          ></div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full hidden md:block blur-sm opacity-30"
            style={{
              background: "linear-gradient(to bottom, #4d9de6, #00469b)",
            }}
          ></div>

          {/* Day 1 */}
          <div className="flex flex-col md:flex-row items-center w-full mb-12 relative group">
            <div className="w-full md:w-5/12 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
              <div
                className="rounded-xl p-6 border border-black border-2 shadow-2xl relative overflow-hidden"
                style={{ backgroundColor: "#00469b" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-6 -translate-x-6"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-lg font-semibold">
                      Day 1: 12th June
                    </h3>
                    <span className="text-xs text-blue-300 bg-white/10 px-2 py-0.5 rounded-full">
                      Day 1 can be attended online
                    </span>
                  </div>

                  <div className="space-y-3">
                    {scheduleData.day1.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-white/5 rounded-md p-2 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
                      >
                        <Clock className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-blue-200 font-medium text-xs">
                            {item.time}
                          </span>
                          <span className="text-white/90 text-xs ml-1.5">
                            - {item.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center w-2/12 py-6">
              <div className="flex items-center relative">
                <div
                  className="w-10 h-0.5 shadow-lg"
                  style={{
                    backgroundColor: "#4d9de6",
                    boxShadow: "0 0 8px #4d9de6",
                  }}
                ></div>
                <div
                  className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-transparent"
                  style={{
                    borderRightColor: "#4d9de6",
                    filter: "drop-shadow(0 0 3px #4d9de6)",
                  }}
                ></div>
                <div
                  className="w-5 h-5 rounded-full mx-3 border-4 border-white shadow-2xl relative"
                  style={{
                    backgroundColor: "#4d9de6",
                    boxShadow: "0 0 14px #4d9de6",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ backgroundColor: "#4d9de6", opacity: "0.4" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-5/12"></div>
          </div>

          {/* Day 2 */}
          <div className="flex flex-col md:flex-row items-center w-full relative group">
            <div className="hidden md:block w-5/12"></div>
            <div className="hidden md:flex items-center justify-center w-2/12 py-6">
              <div className="flex items-center relative">
                <div
                  className="w-5 h-5 rounded-full mx-3 border-4 border-white shadow-2xl relative"
                  style={{
                    backgroundColor: "#00469b",
                    boxShadow: "0 0 14px #00469b",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ backgroundColor: "#00469b", opacity: "0.4" }}
                  ></div>
                </div>
                <div
                  className="w-10 h-0.5 shadow-lg"
                  style={{
                    backgroundColor: "#00469b",
                    boxShadow: "0 0 8px #00469b",
                  }}
                ></div>
                <div
                  className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-transparent"
                  style={{
                    borderLeftColor: "#00469b",
                    filter: "drop-shadow(0 0 3px #00469b)",
                  }}
                ></div>
              </div>
            </div>

            <div className="w-full md:w-5/12 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
              <div
                className="rounded-xl p-6 border border-black border-2 shadow-2xl relative overflow-hidden"
                style={{ backgroundColor: "#00469b" }}
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-xl"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-8 -translate-x-8"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-white/5 to-transparent rounded-full translate-y-6 translate-x-6"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-lg font-semibold">
                      Day 2: 13th June
                    </h3>
                    <span className="text-xs text-blue-300 bg-white/10 px-2 py-0.5 rounded-full">
                      Day 2 must be attended in person
                    </span>
                  </div>

                  <div className="space-y-3">
                    {scheduleData.day2.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-white/5 rounded-md p-2 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
                      >
                        <Clock className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-blue-200 font-medium text-xs">
                            {item.time}
                          </span>
                          <span className="text-white/90 text-xs ml-1.5">
                            - {item.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
