import React from "react";
import { Calendar, Globe, MapPin, Clock, ArrowUpRight, UserCheck, Award, Users, Timer } from "lucide-react";
import events from "../data/events.json";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pb-16 px-4 max-w-7xl mx-auto">
        <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">Events</h1>
            <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join us for exciting events throughout the year. From hackathons to cultural festivals, there's something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-sm hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    {event.date && (
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                    )}
                    {event.time && (
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    {event.allowed && (
                      <div className="flex items-center text-gray-300">
                        <UserCheck className="w-4 h-4 mr-2" />
                        <span>{event.allowed}</span>
                      </div>
                    )}
                  </div>

                  {event.website && (
                    <a
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-black/40 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-xl">
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/WeBLMxLJQRc?si=CyV99WdkLGGxSxpj" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full">
                <Award className="w-4 h-4 mr-2" />
                Recent Event Highlight
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">24-Hour D2C Innovation Hackathon</h2>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  <span>250+ Participants</span>
                </div>
                <div className="flex items-center">
                  <Timer className="w-5 h-5 mr-3" />
                  <span>24 Hours of Innovation</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3" />
                  <span>₹45,000 in Prizes</span>
                </div>
              </div>
              
              <p className="text-gray-300">
                Our latest hackathon brought together talented developers, designers, and innovators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
