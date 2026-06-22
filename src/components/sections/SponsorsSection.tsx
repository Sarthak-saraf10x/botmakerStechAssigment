import React from 'react';

// Import Sponsor Logos
import sponsor1Img from '../../assets/images/sponsors/sponsor_1.png';
import sponsor2Img from '../../assets/images/sponsors/sponsor_2.png';
import sponsor3Img from '../../assets/images/sponsors/sponsor_3.png';
import sponsor4Img from '../../assets/images/sponsors/sponsor_4.png';
import sponsor5Img from '../../assets/images/sponsors/sponsor_5.png';
import sponsor6Img from '../../assets/images/sponsors/sponsor_6.png';

export const SponsorsSection: React.FC = () => {
  return (
    <section className="relative z-10 py-16 bg-[#0c0b0b] border-b border-[#2e2e2e]">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          SUPPORTED BY ELITE INSTITUTIONS
        </span>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-80">
          <img src={sponsor1Img} alt="Sponsor 1" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          <img src={sponsor2Img} alt="Sponsor 2" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          <img src={sponsor3Img} alt="Sponsor 3" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          <img src={sponsor4Img} alt="Sponsor 4" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          <img src={sponsor5Img} alt="Sponsor 5" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          <img src={sponsor6Img} alt="Sponsor 6" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
        </div>
      </div>
    </section>
  );
};
