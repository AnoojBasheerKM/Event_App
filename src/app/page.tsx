'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const events = [
  {
    id: 1,
    city: "Mumbai",
    date: "12 Aug 2024",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    city: "Delhi",
    date: "18 Aug 2024",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    city: "Chennai",
    date: "25 Aug 2024",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    city: "Kochi",
    date: "2 Sep 2024",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    city: "Kolkata",
    date: "9 Sep 2024",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    city: "Bengaluru",
    date: "16 Sep 2024",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Shiny Black Background with Stars */}
      <div className="fixed inset-0 z-0">
        {/* Base shiny black gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Shiny overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30" />
        
        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large stars */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-twinkle opacity-60" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-twinkle-delayed opacity-80" />
          <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-twinkle opacity-70" />
          <div className="absolute top-80 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle-delayed opacity-90" />
          
          {/* Medium stars */}
          <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-twinkle opacity-50" />
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white rounded-full animate-twinkle-delayed opacity-60" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle opacity-70" />
          <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-white rounded-full animate-twinkle-delayed opacity-80" />
          
          {/* Small stars */}
          <div className="absolute top-1/4 left-3/4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-40" />
          <div className="absolute top-1/2 right-1/6 w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delayed opacity-50" />
          <div className="absolute top-3/5 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-60" />
          <div className="absolute top-4/5 right-1/2 w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delayed opacity-70" />
          
          {/* Additional stars for density */}
          <div className="absolute top-1/6 left-1/8 w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-30" />
          <div className="absolute top-1/3 right-1/8 w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delayed opacity-40" />
          <div className="absolute top-2/3 left-5/6 w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-50" />
          <div className="absolute top-5/6 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delayed opacity-60" />
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      {/* Hero Section with Event Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80"
            alt="Event Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 drop-shadow-lg animate-fade-in-up">
            Discover Amazing Events
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Find, create, and join incredible events in your city. Your one-stop platform for all things events!
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg">
              Explore Events
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black/80 to-black">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Popular Event Locations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover events happening in these amazing cities across India
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={event.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              data-id={event.id}
              className={`group bg-zinc-900/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-800/50 hover:scale-105 hover:shadow-indigo-500/25 transition-all duration-700 backdrop-blur-sm transform ${
                visibleCards.has(event.id) 
                  ? 'opacity-100 translate-y-0 shadow-lg' 
                  : 'opacity-0 translate-y-20 shadow-none'
              }`}
              style={{ 
                transitionDelay: `${idx * 0.1}s`,
                transform: visibleCards.has(event.id) ? 'translateY(0)' : 'translateY(20px)',
                boxShadow: visibleCards.has(event.id) 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
                  : 'none'
              }}
            >
              {/* Card Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.city + ' event'}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* City Badge */}
                <div className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {event.city}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors duration-300">
                    {event.city} Events
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    Join us for an unforgettable experience in {event.city} with great people, food, and fun activities!
                  </p>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 flex items-center justify-between text-sm mb-4">
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {event.city}
                  </span>
                  <span className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {event.date}
                  </span>
                </div>

                {/* Hover Action Button - Centered at bottom */}
                <div className="relative z-10 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>

              {/* Card Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <div className="text-gray-500 text-sm">© 2024 EventHub. All rights reserved.</div>
      </footer>
    </div>
  );
}
