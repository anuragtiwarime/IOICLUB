import { Cloud, Code } from "lucide-react";

export default function Navbar() {
  return (
    <div className="relative z-10">
      <nav className="mt-4 mx-4 z-50"> {/* changed from fixed to scrollable */}
        <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg">AWS Hackathon</span>
              </div>
            </div>

            {/* Right side elements */}
            <div className="flex items-center space-x-4">
              {/* Status indicator */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Beta</span>
              </div>

              {/* Code icon */}
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>

              {/* Registration Status */}
              <button className="bg-white/20 hover:bg-white/30 text-white h-10 min-w-[10rem] px-6 rounded-full text-sm font-medium transition-colors border border-white/30 shadow-md hover:shadow-lg">
                Registration Open
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
