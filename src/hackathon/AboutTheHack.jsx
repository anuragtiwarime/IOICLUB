import { Calendar, MapPin, Users } from "lucide-react";

export default function AboutPWHackathon() {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-16 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Content - 2 columns */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title with orange underline */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Hackathon
            </h2>
            <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-gray-900">TechSangam 2025</span> – where innovation meets impact! 
              Organized by the tech minds at PhysicsWallah, TechSangam is not just 
              a hackathon – it's a celebration of creativity, collaboration, and cutting-edge problem solving.
            </p>

            <p>
              At TechSangam, we bring together passionate developers, designers, 
              thinkers, and thinkers to turn bold ideas into reality. Whether you're 
              building with AI, automating with code, or crafting clever solutions to 
              real-world challenges – this is your launchpad.
            </p>
          </div>

          {/* What we stand for */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">What we stand for:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold">Innovation First</span> – Think big, build fast, break barriers.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold">Collaboration Over Competition</span> – It's a Sangam – a confluence – of minds, skills, and spirit.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><span className="font-semibold">Purpose-Driven Creation</span> – Build something that matters.</span>
              </li>
            </ul>
          </div>

          {/* Closing paragraph */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              From beginners to pros, everyone has a place here. With dedicated 
              mentors, powerful workshops, and a buzzing community, <span className="font-semibold text-gray-900">TechSangam 2025</span> is your chance to shine.
            </p>
          </div>
        </div>

        {/* Right Sidebar - Event Details */}
        <div className="lg:col-span-1 mt-10 lg:mt-0">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl border-4 border-black">
            {/* Date */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-500 rounded-xl p-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">June 12-13, 2025</h3>
                <p className="text-blue-200">48-hour Hackathon</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-500 rounded-xl p-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PW Institute of Innovation</h3>
                <p className="text-blue-200">Bengaluru</p>
              </div>
            </div>

            {/* Participants */}
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 rounded-xl p-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">In-Person Event</h3>
                <p className="text-blue-200">Limited to 500 participants</p>
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
