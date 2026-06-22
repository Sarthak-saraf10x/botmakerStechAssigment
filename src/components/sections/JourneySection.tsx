import React from 'react';
import iconToolsSvg from '../../assets/icons/icon_tools.svg';
import iconPalaceSvg from '../../assets/icons/icon_palace.svg';
import iconRankingSvg from '../../assets/icons/icon_ranking.svg';
import iconCommunitySvg from '../../assets/icons/icon_community.svg';

const STEPS = [
  {
    icon: iconToolsSvg,
    alt: 'Tools Icon',
    step: 'STEP 1',
    title: 'BUILD YOUR TEAM',
    desc: 'Assemble engineers, coders, and pilots. Design, build, and run diagnostics on your battle droid or speed crawler.',
    accent: '#ff4c4c',
  },
  {
    icon: iconPalaceSvg,
    alt: 'Palace Icon',
    step: 'STEP 2',
    title: 'COMPETE ACROSS INDIA',
    desc: 'Qualify in local regionals and showcase your robotics supremacy in major tech arenas across the country.',
    accent: '#ff4c4c',
  },
  {
    icon: iconRankingSvg,
    alt: 'Ranking Icon',
    step: 'STEP 3',
    title: 'EARN NATIONAL RANKING',
    desc: 'Gain competitive points, track scores, and place your crew on India\'s official, unified bot leaderboard.',
    accent: '#ffc702',
  },
  {
    icon: iconCommunitySvg,
    alt: 'Community Icon',
    step: 'STEP 4',
    title: 'JOIN THE LEAGUE',
    desc: 'Establish professional status, unlock sponsorships, and gain high-profile recruitment by top hardware makers.',
    accent: '#ff4c4c',
  },
];

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative z-10 py-16 md:py-24 bg-[#100f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase px-3 py-1 rounded bg-[#ff4c4c]/10 border border-[#ff4c4c]/20 inline-block mb-3">
          USER JOURNEY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">YOUR PATH TO THE LEAGUE</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 md:mb-16 text-sm px-2">
          Step-by-step roadmap from forming a regional crew to winning national rankings and launching career opportunities.
        </p>

        {/* 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Horizontal connector — desktop only */}
          <div className="hidden md:block absolute top-[74px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-red-500/20 via-yellow-500/30 to-red-500/20 z-0" />

          {STEPS.map(({ icon, alt, step, title, desc, accent }) => (
            <div key={step} className="group relative z-10 flex flex-col items-center">
              {/* Circle — smaller on mobile */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-[160px] md:h-[160px] rounded-full bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center relative p-2 transition-transform group-hover:scale-105 duration-300">
                <div
                  className="absolute inset-1.5 rounded-full border border-dashed transition-colors"
                  style={{ borderColor: `${accent}40` }}
                />
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner">
                  <img src={icon} alt={alt} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" />
                </div>
                <div className="absolute bottom-1.5 bg-[#ff4c4c] text-[9px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 rounded text-white">
                  {step}
                </div>
              </div>
              <h3 className="mt-4 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide text-white leading-tight">{title}</h3>
              <p className="text-[11px] sm:text-xs text-gray-500 max-w-[160px] mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
