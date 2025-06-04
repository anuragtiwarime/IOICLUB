import { Trophy, Award, Medal, Star } from "lucide-react";

export default function PrizesComponent() {
    return (
        <div id="prizes" className="relative pt-10 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-10 -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-200 to-blue-300 rounded-full opacity-10 translate-x-40 translate-y-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-4">
                        <Star className="w-8 h-8 text-orange-500" />
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
                            Prizes & Recognition
                        </h2>
                        <Star className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Compete for amazing prizes and recognition! Winners will be celebrated for their innovation,
                        creativity, and technical excellence.
                    </p>
                </div>

                {/* Prizes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* 1st Prize */}
                    <div className="group relative order-1 md:order-2 md:-mt-7 z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>

                        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg">
                                    <Trophy className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="text-center mt-6 mb-6">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 mb-2">
                                    1st
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Winner</h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto"></div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-4xl font-black text-gray-900 mb-2">₹50,000</div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Prize */}
                    <div className="group relative order-2 md:order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>

                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-gray-400 to-gray-600 rounded-full p-4 shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="text-center mt-6 mb-6">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mb-2">
                                    2nd
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Runner Up</h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mx-auto"></div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-4xl font-black text-gray-900 mb-2">₹30,000</div>
                            </div>
                        </div>
                    </div>

                    {/* 3rd Prize */}
                    <div className="group relative order-3 md:order-3">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>

                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full p-4 shadow-lg">
                                    <Medal className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="text-center mt-6 mb-6">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2">
                                    3rd
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">2nd Runner Up</h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto"></div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-4xl font-black text-gray-900 mb-2">₹20,000</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
