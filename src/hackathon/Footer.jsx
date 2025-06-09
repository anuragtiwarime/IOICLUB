import { Mail, Phone, MapPin, Calendar, Youtube, Instagram, Linkedin, Github, ExternalLink, Heart } from "lucide-react";

export default function HackathonFooter() {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full translate-x-40 translate-y-40"></div>
            
            {/* Grid background */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                    AWS Hackathon 2025
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                    Where innovation meets impact! Join us for 15 hours of creativity, collaboration, 
                                    and cutting-edge problem solving at India's premier hackathon.
                                </p>
                            </div>
                            
                            {/* Event Quick Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Calendar className="w-5 h-5 text-orange-400" />
                                    <span>June 12-13, 2025 | 15-hour Hackathon</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <MapPin className="w-5 h-5 text-orange-400" />
                                    <span>PW Institute of Innovation, Bengaluru</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-white border-b border-orange-400/30 pb-2">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "About Hackathon", href: "#about" },
                                    { name: "Registration", href: "#register" },
                                    { name: "Prizes & Awards", href: "#prizes" },
                                    { name: "Schedule", href: "#schedule" },
                                    // { name: "Rules & Guidelines", href: "#rules" },
                                    // { name: "FAQs", href: "#faq" }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.name}
                                            </span>
                                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Support */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-white border-b border-orange-400/30 pb-2">
                                Get in Touch
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-gray-300">Email Support</p>
                                        <a href="mailto:studentsuccess@pwioi.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                                            studentsuccess@pwioi.com
                                        </a>
                                    </div>
                                </div>
                                
                                {/* <div className="flex items-start space-x-3">
                                    <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-gray-300">Phone Support</p>
                                        <a href="tel:+91-1234567890" className="text-orange-400 hover:text-orange-300 transition-colors">
                                            +91-1234-567-890
                                        </a>
                                    </div>
                                </div> */}

                                {/* Emergency Contact */}
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 mt-4">
                                    <p className="text-sm text-orange-300 font-semibold">24/7 Event Support</p>
                                    <p className="text-xs text-gray-400 mt-1">Available during hackathon hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Partners */}
                    <div className="border-t border-gray-700/50 pt-8 mb-4">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                            
                            {/* Social Media */}
                            <div className="space-y-4">
                                <h5 className="text-lg font-semibold text-white">Follow Us</h5>
                                <div className="flex space-x-4">
                                    {[
                                        // { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                                        { icon: Instagram, href: "https://www.instagram.com/pw_ioi?igsh=MTdwajRwa3hjdzN3cQ==", color: "hover:text-pink-400" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/school/pw-ioi/", color: "hover:text-blue-500" },
                                        { icon: Youtube, href: "https://www.youtube.com/@PW-IOI", color: "hover:text-red-500" },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            className={`bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                                <span>© 2025 AWS Hackathon. Made with</span>
                                <Heart className="w-4 h-4 text-red-500 fill-current" />
                                <span>by PWIOI</span>
                            </div>
                            
                            
                        </div>
                            </div>

                            {/* Partner Logos */}
                            <div className="space-y-4">
                                <h5 className="text-lg font-semibold text-white text-center">Organized By</h5>
                                <div className="flex items-center space-x-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <div className="w-24 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-sm px-2"><img src="/pwioilogo.webp" alt="PWIOI" /></span>
                                        </div>
                                    </div>
                                    <div className="text-orange-400 text-2xl font-bold">×</div>
                                    <div className="bg-orange-500/10 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                                        <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                            <span className="text-orange-300 font-bold text-sm px-2"><img src="/aws.png" alt="AWS" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>

                {/* Decorative bottom gradient */}
                <div className="h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400"></div>
            </div>
        </footer>
    );
}