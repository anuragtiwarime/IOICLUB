import { Calendar, Globe, MapPin, Clock, ArrowUpRight,UserCheck } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "D2C Hackathon 2024",
      date: "Dec 27-28, 2024",
      location: "PWIOI Campus",
      time: "24 Hours",
      description: "Join us for an exciting hackathon focused on Direct-to-Consumer innovations. Build the next generation of D2C solutions and compete for amazing prizes!",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740",
      website: "https://d2c-hackathon.dev",
      status: "Completed",
      allowed:"Only PWIOI Sudents"
    },
    {
      title: "D2C Hackathon 2024",
      date: "Dec 27-28, 2024",
      location: "PWIOI Campus",
      time: "24 Hours",
      description: "Join us for an exciting hackathon focused on Direct-to-Consumer innovations. Build the next generation of D2C solutions and compete for amazing prizes!",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740",
      website: "https://d2c-hackathon.dev",
      status: "Upcoming",
      allowed:"Only PWIOI Sudents"
    },
    {
      title: "D2C Hackathon 2024",
      date: "Dec 27-28, 2024",
      location: "PWIOI Campus",
      time: "24 Hours",
      description: "Join us for an exciting hackathon focused on Direct-to-Consumer innovations. Build the next generation of D2C solutions and compete for amazing prizes!",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740",
      website: "https://d2c-hackathon.dev",
      status: "Completed",
      allowed:"Only PWIOI Sudents"
    },
    // {
    //   title: "Tech Summit 2024",
    //   date: "April 15, 2024",
    //   location: "Innovation Center",
    //   time: "9:00 AM - 6:00 PM",
    //   description: "Experience the future of technology with industry leaders. Featuring keynotes, workshops, and networking opportunities.",
    //   image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1740",
    //   website: "https://techsummit2024.dev",
    //   status: "Upcoming"
    // },
    // {
    //   title: "AI & ML Conference",
    //   date: "May 10, 2024",
    //   location: "Tech Hub Arena",
    //   time: "10:00 AM - 5:00 PM",
    //   description: "Dive deep into the world of Artificial Intelligence and Machine Learning. Learn from experts and discover the latest trends.",
    //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1740",
    //   website: "https://aiml-conf.dev",
    //   status: "Upcoming"
    // }
  ];

  return (
    <>
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold text-white mb-3">
          Events
        </h1>
        <div className="w-24 h-1 bg-black mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <UserCheck className="w-4 h-4 mr-2" />
                    <span>{event.allowed}</span>
                  </div>
                </div>
                
                <a
                  href={event.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;