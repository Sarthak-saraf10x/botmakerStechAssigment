import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import heroBgImg from '../../assets/images/backgrounds/hero_bg.png';

interface HeroProps {
  onWatchLiveClick: () => void;
  onCreateAccountClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchLiveClick, onCreateAccountClick }) => {
  return (
    <section className="relative z-10 pt-16 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column Info */}
      <div className="lg:col-span-7 space-y-8 text-left">
        {/* Live Alert Ticker */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a1919] border border-[#2e2e2e]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4c4c] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff4c4c]"></span>
          </span>
          <span className="text-xs font-semibold text-[#ff4c4c] tracking-wider uppercase">Live Now</span>
          <div className="h-4 w-[1px] bg-[#2e2e2e]" />
          <span className="text-xs text-gray-300 font-medium">Bengaluru Regionals (Episode 14)</span>
          <button 
            onClick={onWatchLiveClick}
            className="text-xs font-bold text-[#ffc702] hover:text-white flex items-center gap-1 transition-colors group ml-2"
          >
            WATCH LIVE 
            <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
          INDIA’S ULTIMATE <br />
          <span className="bg-gradient-to-r from-[#ff4c4c] via-red-500 to-[#ffc702] bg-clip-text text-transparent drop-shadow-md">
            ROBOTICS ARENA
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-xl font-normal leading-relaxed">
          Build. Compete. Rank. The standardized national ecosystem for professional and amateur robotics athletes.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={onCreateAccountClick}
            className="px-8 py-4 text-base font-bold bg-[#ff4c4c] hover:bg-[#e03d3d] rounded-lg shadow-xl shadow-[#ff4c4c]/30 hover:shadow-[#ff4c4c]/50 transition-all flex items-center gap-3 transform hover:-translate-y-0.5 text-white cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-white" />
            CREATE ACCOUNT
          </button>
          <a 
            href="#events" 
            className="px-8 py-4 text-base font-bold border border-[#ff4c4c]/40 hover:border-[#ff4c4c] hover:bg-[#ff4c4c]/5 rounded-lg transition-all flex items-center justify-center transform hover:-translate-y-0.5 text-white"
          >
            EXPLORE EVENTS
          </a>
        </div>
      </div>

      {/* Right Column Banner Graphic */}
      <div className="lg:col-span-5 relative flex justify-center">
        {/* Circular Neon Back-glows */}
        <div className="absolute inset-0 bg-[#ff4c4c]/10 rounded-full blur-3xl animate-pulse" />
        <div className="relative border border-[#2e2e2e] bg-[#1a1919]/55 p-4 rounded-2xl backdrop-blur-sm max-w-md w-full overflow-hidden shadow-2xl shadow-black/80">
          
          <img 
            src={heroBgImg} 
            alt="Figma Arena Banner" 
            className="w-full h-80 object-cover rounded-xl shadow-lg border border-[#2e2e2e] transform hover:scale-[1.02] transition-transform duration-500"
          />
          
          <div className="mt-4 text-left p-2 space-y-2">
            <h3 className="font-bold text-lg text-white">National Tournament Arena</h3>
            <p className="text-xs text-gray-400">
              Official arena design from the Figma template. Complete telemetry trackers monitor live matches on the arena floor.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[#2e2e2e]">
              <span className="text-[10px] text-gray-500 tracking-wider">SPECS: AUTONOMOUS / WIRED</span>
              <span className="text-xs font-bold text-[#ffc702]">98% WIN RATIO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
