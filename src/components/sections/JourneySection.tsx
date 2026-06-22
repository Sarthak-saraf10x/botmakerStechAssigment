import React from 'react';
import iconToolsSvg from '../../assets/icons/icon_tools.svg';
import iconPalaceSvg from '../../assets/icons/icon_palace.svg';
import iconRankingSvg from '../../assets/icons/icon_ranking.svg';
import iconCommunitySvg from '../../assets/icons/icon_community.svg';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative z-10 py-24 bg-[#100f0f]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase px-3 py-1 rounded bg-[#ff4c4c]/10 border border-[#ff4c4c]/20 inline-block mb-3">
          USER JOURNEY
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">YOUR PATH TO THE LEAGUE</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-16 text-sm">
          Step-by-step roadmap from forming a regional crew to winning national rankings and launching career opportunities.
        </p>

        {/* Timeline Circles Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Horizontal Connector Line for Medium/Large Screens */}
          <div className="hidden md:block absolute top-[94px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-red-500/20 via-yellow-500/30 to-red-500/20 z-0" />

          {/* Step 1 */}
          <div className="group relative z-10 flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center relative p-3 transition-transform group-hover:scale-105 duration-300">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#ff4c4c]/30 group-hover:border-[#ff4c4c]/60 transition-colors" />
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner">
                <img src={iconToolsSvg} alt="Tools Icon" className="w-12 h-12 object-contain" />
              </div>
              <div className="absolute bottom-2 bg-[#ff4c4c] text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded text-white">
                STEP 1
              </div>
            </div>
            <h3 className="mt-6 text-lg font-bold uppercase tracking-wider text-white">BUILD YOUR TEAM</h3>
            <p className="text-xs text-gray-500 max-w-[200px] mt-2">
              Assemble engineers, coders, and pilots. Design, build, and run diagnostics on your battle droid or speed crawler.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative z-10 flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center relative p-3 transition-transform group-hover:scale-105 duration-300">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#ff4c4c]/30 group-hover:border-[#ff4c4c]/60 transition-colors" />
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner">
                <img src={iconPalaceSvg} alt="Palace Icon" className="w-12 h-12 object-contain" />
              </div>
              <div className="absolute bottom-2 bg-[#ff4c4c] text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded text-white">
                STEP 2
              </div>
            </div>
            <h3 className="mt-6 text-lg font-bold uppercase tracking-wider text-white">COMPETE ACROSS INDIA</h3>
            <p className="text-xs text-gray-500 max-w-[200px] mt-2">
              Qualify in local regionals and showcase your robotics supremacy in major tech arenas across the country.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative z-10 flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center relative p-3 transition-transform group-hover:scale-105 duration-300">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#ffc702]/30 group-hover:border-[#ffc702]/60 transition-colors" />
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner">
                <img src={iconRankingSvg} alt="Ranking Icon" className="w-12 h-12 object-contain" />
              </div>
              <div className="absolute bottom-2 bg-[#ff4c4c] text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded text-white">
                STEP 3
              </div>
            </div>
            <h3 className="mt-6 text-lg font-bold uppercase tracking-wider text-white">EARN NATIONAL RANKING</h3>
            <p className="text-xs text-gray-500 max-w-[200px] mt-2">
              Gain competitive points, track scores, and place your crew on India's official, unified bot leaderboard.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group relative z-10 flex flex-col items-center">
            <div className="w-[188px] h-[188px] rounded-full bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center relative p-3 transition-transform group-hover:scale-105 duration-300">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#ff4c4c]/30 group-hover:border-[#ff4c4c]/60 transition-colors" />
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner">
                <img src={iconCommunitySvg} alt="Community Icon" className="w-12 h-12 object-contain" />
              </div>
              <div className="absolute bottom-2 bg-[#ff4c4c] text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded text-white">
                STEP 4
              </div>
            </div>
            <h3 className="mt-6 text-lg font-bold uppercase tracking-wider text-white">JOIN THE LEAGUE</h3>
            <p className="text-xs text-gray-500 max-w-[200px] mt-2">
              Establish professional status, unlock sponsorships, and gain high-profile recruitment by top hardware makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
