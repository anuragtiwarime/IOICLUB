import { Calendar, MapPin, Users } from "lucide-react";

export default function AboutPWHackathon() {
  return (
    <div
      id="about"
      className="relative max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-16 bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Content - 2 columns */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title with orange underline */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About the Hackathon
            </h2>
            <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to the{" "}
              <span className="font-semibold text-gray-900">
                AWS Hackathon - “Build with PartyRock”
              </span>{" "}
              at IOI Campus, Bangalore! This in-person event offers a hands-on
              introduction to AWS&apos;s PartyRock platform, guided by AWS mentors.
            </p>

            <p>
              Kick things off with a platform briefing, enjoy a fun quiz, and
              dive into problem-solving once the challenge goes live. After an
              overnight build session, teams will submit by 6:00 AM and prep
              offline for presentations.
            </p>

            <p>
              It's a chance to learn, build, and collaborate — all in a
              high-energy, innovation-driven environment.
            </p>
          </div>

          {/* Objective */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Objective:</h3>
            <p className="text-gray-700">
              To outline the step-by-step flow of the AWS Hackathon, enabling
              seamless execution by all operations and support teams.
            </p>
          </div>

          {/* Timeline Summary */}
          {/* <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Event Flow:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Day 1 – 12th June 2025:</strong></li>
              <li>• 11:00 AM – Welcome & Orientation</li>
              <li>• 11:30 AM – Deep Dive: PartyRock with AWS Mentor</li>
              <li>• 1:30 PM – Quiz on PartyRock</li>
              <li>• 3:00 PM – Team Formation (via quiz scores)</li>
              <li>• 6:00 PM – Problem Statement Release & Hackathon Start</li>
              <li>• Overnight – Build using PartyRock</li>
              <li>• 5:00 AM (13th June) – Submission Deadline</li>

              <li className="mt-4"><strong>Day 2 – 13th June 2025:</strong></li>
              <li>• 7:00 AM – Shortlisting & Result Announcement</li>
              <li>• 10:30 AM – Final Presentations at IOI Campus</li>
              <li>• 2:00 PM – Winner Announcement & Felicitation</li>
            </ul>
          </div> */}

          {/* Closing paragraph */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              Join us for this dynamic in-person experience where you'll
              collaborate, innovate, and compete in a friendly, high-energy
              environment. This is your moment to build with purpose, powered by
              AWS.
            </p>
          </div>
        </div>

        {/* Right Sidebar - Event Details */}
        <div className="lg:col-span-1 mt-10 lg:mt-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl border-4 border-black">
            {/* Date */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-500 rounded-xl p-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">June 12-13, 2025</h3>
                <p className="text-blue-200">15-hour Hackathon</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-500 rounded-xl p-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IOI Campus</h3>
                <p className="text-blue-200">Bangalore</p>
              </div>
            </div>

            {/* Participants */}
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 rounded-xl p-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">In-Person Event</h3>
                <p className="text-blue-200">All students welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 w-20 h-20 bg-green-200 rounded-full opacity-20 -mr-6 -mb-6 pointer-events-none"></div>
    </div>
  );
}
