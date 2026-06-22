import React from 'react';
import { Target } from 'lucide-react';
import robotModelImg from '../../assets/images/backgrounds/robot_model.png';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative z-10 py-24 bg-[#0c0b0b] border-t border-b border-[#2e2e2e]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative border border-[#2e2e2e] bg-[#1a1919]/60 p-5 rounded-2xl max-w-md w-full shadow-2xl">
            <img 
              src={robotModelImg} 
              alt="Figma BotLeague Droid" 
              className="w-full rounded-xl border border-[#2e2e2e] shadow-md object-cover h-[350px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#ff4c4c] border-2 border-[#100f0f] text-black font-extrabold px-6 py-4 rounded-xl shadow-xl flex items-center gap-3">
              <Target className="w-6 h-6 text-white" />
              <div>
                <div className="text-white text-xs tracking-wider uppercase font-semibold">National Leaderboard</div>
                <div className="text-white font-extrabold text-lg">Verified Stats</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:col-span-7 space-y-10 text-left">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase block mb-2">ABOUT THE ORGANISATION</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">WHAT IS BOTLEAGUE?</h2>
            <p className="text-gray-400 text-sm mt-4">
              We are a unified national governing system and tournament registry built specifically to advance competitive robotics sports. We believe the future of sports combines physical hardware design with advanced programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-lg font-bold text-white">
                <div className="w-8 h-8 rounded bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold text-sm">1</div>
                STRUCTURED EVENTS
              </div>
              <p className="text-xs text-gray-500 pl-11">
                From one-off local college tournaments to a year-round consolidated national competitive season.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-lg font-bold text-white">
                <div className="w-8 h-8 rounded bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold text-sm">2</div>
                DIGITAL IDENTITY
              </div>
              <p className="text-xs text-gray-500 pl-11">
                Your professional robotics portfolio, tracked, verified, and ready to share with top engineering employers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-lg font-bold text-white">
                <div className="w-8 h-8 rounded bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold text-sm">3</div>
                NATIONAL RANKING
              </div>
              <p className="text-xs text-gray-500 pl-11">
                Benchmark your designs, software algorithms, and pilot scores against the best engineers in India.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-lg font-bold text-white">
                <div className="w-8 h-8 rounded bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold text-sm">4</div>
                CAREER PATHWAY
              </div>
              <p className="text-xs text-gray-500 pl-11">
                Turn arena victories into real-world internships, research sponsorships, and industry placements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
