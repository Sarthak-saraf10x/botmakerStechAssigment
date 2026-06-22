import React, { useState } from 'react';
import { MapPin, Calendar, Tag } from 'lucide-react';
import type { EventItem } from '../../types';

interface EventsSectionProps {
  events: EventItem[];
  registeredEvents: string[];
  onRegisterEvent: (id: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ 
  events, 
  registeredEvents, 
  onRegisterEvent 
}) => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'upcoming' | 'completed'>('ongoing');

  const filteredEvents = events.filter(event => event.status === activeTab);

  return (
    <section id="events" className="relative z-10 py-16 md:py-24 border-t border-[#2e2e2e] bg-[#0c0b0b]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 text-left gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase block mb-2">ARENA SHOWDOWNS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">COMPETITIONS & EVENTS</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-[#1a1919] p-1 sm:p-1.5 rounded-lg border border-[#2e2e2e] overflow-x-auto">
            <button 
              onClick={() => setActiveTab('ongoing')}
              className={`flex-1 px-5 py-2 text-xs font-bold tracking-wider rounded transition-all uppercase ${activeTab === 'ongoing' ? 'bg-[#ff4c4c] text-white shadow' : 'text-gray-400 hover:text-white'}`}
            >
              LIVE NOW
            </button>
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 px-5 py-2 text-xs font-bold tracking-wider rounded transition-all uppercase ${activeTab === 'upcoming' ? 'bg-[#ff4c4c] text-white shadow' : 'text-gray-400 hover:text-white'}`}
            >
              UPCOMING
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`flex-1 px-5 py-2 text-xs font-bold tracking-wider rounded transition-all uppercase ${activeTab === 'completed' ? 'bg-[#ff4c4c] text-white shadow' : 'text-gray-400 hover:text-white'}`}
            >
              PAST RESULTS
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              className="group relative border border-[#2e2e2e] bg-[#1a1919]/60 hover:bg-[#1a1919]/90 rounded-xl overflow-hidden transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              {/* Visual Accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#ff4c4c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-6 space-y-6">
                {/* Status & Name */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffc702]">
                    REGIONAL QUALIFIER
                  </span>
                  {event.status === 'ongoing' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#ff4c4c]/10 text-[#ff4c4c] border border-[#ff4c4c]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4c4c] animate-ping" />
                      ONGOING
                    </span>
                  )}
                  {event.status === 'upcoming' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      OPEN
                    </span>
                  )}
                  {event.status === 'completed' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-green-500/10 text-green-400 border border-green-500/20">
                      CLOSED
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold group-hover:text-[#ff4c4c] transition-colors text-left">{event.name}</h3>

                {/* Details List */}
                <div className="space-y-3 pt-2 text-left">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-[#ffc702]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-[#ffc702]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Tag className="w-4 h-4 text-[#ffc702]" />
                    <span>{event.category}</span>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="p-6 pt-0 border-t border-[#2e2e2e]/50 mt-4 flex items-center justify-between">
                {event.status !== 'completed' ? (
                  <button
                    onClick={() => onRegisterEvent(event.id)}
                    className={`w-full py-3 text-xs font-extrabold tracking-widest uppercase rounded transition-all transform hover:scale-[1.01] cursor-pointer ${
                      registeredEvents.includes(event.id) 
                        ? 'bg-[#ffc702] text-black hover:bg-[#e0b000]' 
                        : 'bg-[#ff4c4c] text-white hover:bg-[#e03d3d] shadow-lg shadow-[#ff4c4c]/10'
                    }`}
                  >
                    {registeredEvents.includes(event.id) ? 'REGISTERED ✓' : 'REGISTER NOW'}
                  </button>
                ) : (
                  <button
                    onClick={() => alert('Viewing tournament brackets...')}
                    className="w-full py-3 text-xs font-extrabold tracking-widest uppercase rounded border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all cursor-pointer"
                  >
                    VIEW TOURNAMENT STANDINGS
                  </button>
                )}
              </div>
            </div>
          ))}
          
          {filteredEvents.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              No events currently configured for this category. Check back soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
