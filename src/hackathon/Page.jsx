import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

export default function GridSmallBackgroundDemo() {
    return (
        <div className="relative w-full min-h-[50rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-black overflow-hidden">
            {/* Grid background */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:90px_50px]",
                    "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
                )}
            />
            
            {/* Radial overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:from-blue-800 dark:via-blue-900 dark:to-black" />
            
            {/* Animated floating particles */}
            <div className="absolute top-16 left-16 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse"></div>
            
            {/* Decorative stars with glow */}
            <div className="absolute top-20 left-10 text-orange-400 text-3xl animate-pulse drop-shadow-lg">✦</div>
            <div className="absolute bottom-40 right-20 text-orange-400 text-2xl animate-pulse drop-shadow-lg">✦</div>
            <div className="absolute top-40 right-40 text-yellow-300 text-xl animate-pulse drop-shadow-lg">✧</div>
            
            {/* Orange accent corner with glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-400 via-orange-500 to-transparent opacity-70 blur-sm"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-400 to-transparent opacity-90"></div>
            
            {/* Navbar */}
            <div className="relative z-40">
                <Navbar />
            </div>
            
            {/* Main Content */}
            <div className="relative z-30 flex flex-col items-center text-center px-4 mt-12">
                {/* Welcome text with modern styling */}
                <div className="mb-6">
                    <p className="text-2xl font-light text-white/90 tracking-wide uppercase text-shadow-lg mb-2 animate-fade-in">
                        Welcome to
                    </p>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                </div>
                
                {/* Main heading with dramatic styling */}
                <h1 className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-orange-200 leading-none tracking-tight max-w-5xl mb-4 drop-shadow-2xl">
                    <span className="relative text-white">
                        AWS Hackathon
                        {/* Glow effect behind text */}
                        <div className="absolute inset-0 text-white/20 blur-xl font-black text-5xl md:text-7xl -z-10">
                            AWS Hackathon
                        </div>
                    </span>
                </h1>
                
                {/* Subtitle with enhanced styling */}
                <div className="relative mb-16">
                    <p className="text-2xl md:text-3xl font-bold text-orange-300 tracking-wider drop-shadow-lg">
                        "Build with PartyRock"
                    </p>
                    {/* Underline accent */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                </div>
                
                {/* Logos with enhanced presentation */}
                <div className="flex flex-row justify-center items-center space-x-16 mb-12">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110">
                            <img src="/pwioilogo.webp" alt="PWI Logo" height="160px" width="160px" className="drop-shadow-xl" />
                        </div>
                    </div>
                    
                    <div className="relative group">
                        <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl group-hover:bg-orange-400/30 transition-all duration-300"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-110">
                            <img src="/aws.png" alt="AWS Logo" height="100px" width="100px" className="drop-shadow-xl" />
                        </div>
                    </div>
                </div>
                
                {/* Enhanced button */}
                <div className="relative group">
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                    
                    <button className="relative bg-gradient-to-r from-white to-gray-100 text-gray-800 px-12 py-5 rounded-full text-xl font-black shadow-2xl hover:shadow-orange-400/25 transform hover:scale-110 transition-all duration-300 hover:from-orange-50 hover:to-white border-2 border-white/50 hover:border-orange-200">
                        <span className="relative z-10 tracking-wide">
                            🚀 REGISTRATION OPEN
                        </span>
                        {/* Button inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
                
                {/* Additional call-to-action text */}
                <p className="mt-8 text-lg text-white/80 font-medium tracking-wide animate-bounce">
                    Join the Innovation Revolution ⚡
                </p>
            </div>
            
            

            
        </div>
    );
}