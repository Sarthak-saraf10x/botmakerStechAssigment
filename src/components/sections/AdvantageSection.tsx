import React from 'react';
import advantageImg from '../../assets/images/backgrounds/advantage_img.png';

export const AdvantageSection: React.FC = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-[#100f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-12 text-left">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase block mb-2">THE LEAGUE ADVANTAGE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">WHY REGISTER?</h2>
          </div>

          <div className="space-y-6">
            {/* Advantage 1 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase">FAIR JUDGING</h4>
                <p className="text-xs text-gray-400 mt-1">
                  All matches are governed by certified ref arrays and computerized telemetry sensor boards. No bias, just sports.
                </p>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase">NATIONAL RECOGNITION</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Receive verified academic certificates, national badges, and formal leaderboard scoring on the BotLeague register.
                </p>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase">CAREER OPS</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Bridge the gap between arena victories and top-tier product engineering, microchip maker, and research lab placements.
                </p>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#ff4c4c]/10 text-[#ff4c4c] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase">HIGH - ENERGY ECOSYSTEM</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Join a community of thousands of elite innovators, mechanical athletes, and hardware founders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantage Image Layout */}
        <div className="flex justify-center">
          <div className="relative border border-[#2e2e2e] bg-[#1a1919]/60 p-4 rounded-2xl shadow-xl max-w-lg w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4c4c]/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
            
            <div className="border border-[#2e2e2e] bg-black/80 rounded-xl overflow-hidden relative">
              <img src={advantageImg} alt="Advantage Illustration" className="w-full h-auto max-h-[400px] object-cover" />
            </div>

            <div className="mt-4 text-left p-2">
              <span className="text-[10px] text-gray-500 font-bold block">STANDARDIZED TELEMETRY MATRIX</span>
              <p className="text-xs text-gray-400 mt-1">
                Continuous sensor coverage tracks robot speed, impacts, path accuracy, and pilot control latencies in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
