import React from 'react';
import arenaMapImg from '../../assets/images/backgrounds/arena_map.png';

export const ArenaMapSection: React.FC = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-[#0c0b0b] border-t border-b border-[#2e2e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Left Text */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase block">ARENA DIAGRAM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">THE CHAMPIONSHIP STAGE</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Below is the official arena blueprints design straight from the Figma document. It details the active combat cage, perimeter grids, collision barriers, and referee sensor arrays used to monitor competitor scores.
          </p>
          <div className="pt-4 border-t border-[#2e2e2e] grid grid-cols-3 gap-3">
            <div className="text-left">
              <span className="block text-xl sm:text-2xl font-black text-[#ff4c4c]">40m x 20m</span>
              <span className="text-[9px] sm:text-[10px] uppercase text-gray-500 font-bold">TOTAL ARENA SIZE</span>
            </div>
            <div className="text-left">
              <span className="block text-xl sm:text-2xl font-black text-[#ffc702]">12 Sensors</span>
              <span className="text-[9px] sm:text-[10px] uppercase text-gray-500 font-bold">TELEMETRY ANCHORS</span>
            </div>
            <div className="text-left">
              <span className="block text-xl sm:text-2xl font-black text-green-500">60 FPS</span>
              <span className="text-[9px] sm:text-[10px] uppercase text-gray-500 font-bold">TRACKING LATENCY</span>
            </div>
          </div>
        </div>

        {/* Right Blueprint Image */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="border border-[#2e2e2e] bg-[#1a1919]/60 p-4 rounded-xl max-w-lg w-full">
            <img src={arenaMapImg} alt="Arena Map Blueprint" className="w-full h-auto rounded border border-[#2e2e2e] object-contain bg-[#100f0f]" />
          </div>
        </div>
      </div>
    </section>
  );
};
