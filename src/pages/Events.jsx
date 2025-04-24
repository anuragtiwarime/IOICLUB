// Enhanced Events.jsx with Glassmorphism, Animations, and Visual Upgrades
import React, { useState } from "react";
import {
  Calendar, Globe, MapPin, Clock, ArrowUpRight, UserCheck, Award, Users, Timer, Play,
} from "lucide-react";
import events from "../data/events.json";
import { motion } from "framer-motion";

const Events = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const closeVideo = () => setActiveVideo(null);
  const openVideo = (videoId) => setActiveVideo(videoId);

  const getYouTubeThumbnail = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const highlights = [
    {
      id: "WeBLMxLJQRc",
      title: "24-Hour D2C Innovation Hackathon",
      badge: "D2C Hackathon",
      stats: [
        { icon: <Users className="w-5 h-5" />, text: "250+ Participants" },
        { icon: <Timer className="w-5 h-5" />, text: "24 Hours of Innovation" },
        { icon: <Award className="w-5 h-5" />, text: "₹45,000 in Prizes" },
      ],
      description: "Our latest hackathon brought together talented developers, designers, and innovators."
    },
    {
      id: "rJfGzy8QLVk",
      title: "Startup Sprint: 2-Day Business Challenge",
      badge: "The Last Mile",
      description: "Organized by SOM students, participants had just 2 days to build and market a business — pushing creativity and entrepreneurial spirit to the edge."
    },
    {
      id: "q4CylaxsaGA",
      title: "Cultural Celebrations & Traditions",
      badge: "IOI GOT TALENT 2025",
      description: "We celebrated diversity through music, dance, fashion, and traditions. A vibrant day full of color and unity!"
    },
    {
      id: "suRkuXkJCvc",
      title: "Freshers Party for the 2024 Batch",
      badge: "Vibesta 2025",
      description: "An unforgettable night of dance, music, and memories as we welcomed the new batch with love and energy. A night to remember!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="px-4 pt-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Events</h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join us for exciting events throughout the year. From hackathons to cultural festivals, there's something for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="group bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:underline underline-offset-4 transition-all">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="space-y-2 mb-6">
                  {event.date && <div className="flex items-center text-gray-400"><Calendar className="w-4 h-4 mr-2" />{event.date}</div>}
                  {event.time && <div className="flex items-center text-gray-400"><Clock className="w-4 h-4 mr-2" />{event.time}</div>}
                  {event.location && <div className="flex items-center text-gray-400"><MapPin className="w-4 h-4 mr-2" />{event.location}</div>}
                  {event.allowed && <div className="flex items-center text-gray-400"><UserCheck className="w-4 h-4 mr-2" />{event.allowed}</div>}
                </div>
                {event.website && (
                  <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-2" /> Visit Website <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative py-24 mt-24 bg-black/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent mb-3">Event Highlights</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Relive our most memorable moments from recent campus events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all"
              >
                <div className="relative aspect-video cursor-pointer group" onClick={() => openVideo(highlight.id)}>
                  <img
                    src={getYouTubeThumbnail(highlight.id)}
                    alt={highlight.title}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${highlight.id}/0.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="px-3 py-1 bg-black/70 text-white text-sm font-medium rounded-full inline-block">
                      {highlight.badge}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 mb-4">{highlight.description}</p>
                  {highlight.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      {highlight.stats.map((stat, i) => (
                        <div key={i} className="flex items-center text-purple-300 bg-black/30 border border-purple-600 rounded-lg p-2 shadow-[0_0_10px_#a855f7]">
                          <span className="mr-2">{stat.icon}</span>
                          <span className="text-sm">{stat.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >×</button>
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
