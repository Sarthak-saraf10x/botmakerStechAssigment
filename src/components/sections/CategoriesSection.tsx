import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import iconMakerbotSvg from '../../assets/icons/icon_makerbot.svg';
import iconIdeaSvg from '../../assets/icons/icon_idea.svg';
import iconEngineeringSvg from '../../assets/icons/icon_engineering.svg';
import iconBitcoinMindSvg from '../../assets/icons/icon_bitcoin_mind.svg';
import { CategoryModal } from '../common/Modal/CategoryModal';
import type { CategoryData } from '../../types/modals';

const CATEGORIES: CategoryData[] = [
  {
    id: 'mini-makers',
    title: 'MINI MAKERS',
    subtitle: 'Where Creativity Meets Logic',
    iconSrc: iconMakerbotSvg,
    accentColor: '#ffc702',
    tagline: 'The first spark of robotics genius starts here.',
    description:
      'Mini Makers is designed for younger robotics enthusiasts who are taking their first steps into competitive robotics. Participants build Lego-based or basic electronic systems and compete in structured beginner challenges. The category fosters problem-solving, teamwork, and a love for engineering in a fun, low-pressure environment.',
    ageGroup: '8 – 13 yrs',
    teamSize: '2 – 4 members',
    techLevel: 'Beginner',
    highlights: [
      'Lego Mindstorms or Scratch-programmable bots',
      'Simple obstacle navigation and maze challenges',
      'Object retrieval and color-sorting tasks',
      'Beginner-friendly judging rubric with mentor support',
    ],
    rules: [
      'Bots must use standard Lego or approved maker kits only.',
      'No custom PCBs or soldering allowed.',
      'Maximum bot weight: 500g.',
      'All code must be written during the event or pre-loaded before the match.',
    ],
    prizes: '₹50,000 Pool · Medals + Certificates for Top 3 Teams',
  },
  {
    id: 'junior-innovators',
    title: 'JUNIOR INNOVATORS',
    subtitle: 'Engineering & Strategy Fundamentals',
    iconSrc: iconIdeaSvg,
    accentColor: '#ff4c4c',
    tagline: 'Build smart, race smarter.',
    description:
      'Junior Innovators is for students who have graduated beyond basic kits and are ready to engage with custom chassis designs, basic sensor arrays, and manual controllers. This category bridges the gap between hobby robotics and competitive engineering, emphasizing both design and driver skill.',
    ageGroup: '13 – 17 yrs',
    teamSize: '3 – 5 members',
    techLevel: 'Intermediate',
    highlights: [
      'Custom chassis allowed (within weight/size constraints)',
      'Basic sensor integration: IR, ultrasonic, light sensors',
      'Manual RC control with driver skill scoring',
      'Strategy rounds and pit-stop engineering challenges',
    ],
    rules: [
      'Bot weight must not exceed 3 kg.',
      'Operating frequency must be within approved RC bands.',
      'No autonomous modes permitted — full manual control required.',
      'Bots must pass a safety inspection before each match.',
    ],
    prizes: '₹1,00,000 Pool · Trophy + BotLeague Junior Ranking Points',
  },
  {
    id: 'young-engineers',
    title: 'YOUNG ENGINEERS',
    subtitle: 'Elite Professional Sports & Robotics',
    iconSrc: iconEngineeringSvg,
    accentColor: '#ffc702',
    tagline: 'Where high school meets high performance.',
    description:
      'Young Engineers is the advanced tier for serious student competitors. Participants work with high-end microcontrollers, complex multi-sensor setups, and custom PCB designs. Competitions involve precision tasks, speed challenges, and head-to-head elimination brackets that mirror professional robotics leagues.',
    ageGroup: '16 – 22 yrs',
    teamSize: '4 – 6 members',
    techLevel: 'Advanced',
    highlights: [
      'Microcontroller freedom: Arduino, STM32, Raspberry Pi, ESP32',
      'Autonomous + manual hybrid modes supported',
      'Complex arena layouts with dynamic obstacles',
      'Live telemetry data displayed on arena screens',
    ],
    rules: [
      'Bot footprint must not exceed 40cm × 40cm.',
      'Maximum power budget: 24V, 20A continuous draw.',
      'Custom PCBs must be submitted for review 48 hours before the event.',
      'Wireless communication limited to approved 2.4 GHz / 5 GHz bands.',
    ],
    prizes: '₹2,50,000 Pool · National Ranking Points + Industry Internship Opportunities',
  },
  {
    id: 'robo-minds',
    title: 'ROBO MINDS',
    subtitle: 'Advanced Wireless & Autonomous Control',
    iconSrc: iconBitcoinMindSvg,
    accentColor: '#ff4c4c',
    tagline: 'The future of combat is code.',
    description:
      'Robo Minds is the pinnacle category for college-level and open-division teams. Competitors deploy full AI-driven autonomous systems, computer vision pipelines, ROS-based architectures, and even autonomous drones. This is where machine learning meets metal — and only the most sophisticated systems survive.',
    ageGroup: '18 + / Open',
    teamSize: '4 – 8 members',
    techLevel: 'Expert / Pro',
    highlights: [
      'Full autonomous operation using CV, SLAM, and ML inference',
      'ROS / ROS2 integration allowed and encouraged',
      'Drone and ground bot hybrid missions',
      'Real-time strategy adaptation judged by AI scoring panel',
    ],
    rules: [
      'All onboard compute must run without cloud dependency during the match.',
      'Bot weight cap: 15 kg for ground units, 2 kg for aerial units.',
      'Safety kill-switch mandatory — must be accessible by referees at all times.',
      'Open-source frameworks encouraged; proprietary models must be disclosed.',
    ],
    prizes: '₹5,00,000 Pool · Pro Circuit Entry + BotLeague Pro License',
  },
];

export const CategoriesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryData | null>(null);

  return (
    <>
      <section id="categories" className="relative z-10 py-24 bg-[#100f0f]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase block mb-2">ELIGIBILITY GROUPS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">CATEGORIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group border border-[#2e2e2e] bg-[#1a1919]/60 hover:bg-[#1a1919]/90 hover:border-[#ff4c4c]/40 rounded-xl p-6 text-left space-y-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{ background: `${cat.accentColor}18` }}
                  >
                    <img src={cat.iconSrc} alt={cat.title} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-gray-400">{cat.subtitle}. {cat.description.slice(0, 80)}...</p>
                </div>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className="text-xs font-bold text-[#ff4c4c] hover:text-[#ffc702] flex items-center gap-1.5 transition-colors group/btn pt-4 border-t border-[#2e2e2e]/50 cursor-pointer w-full text-left"
                >
                  LEARN MORE
                  <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCategory && (
        <CategoryModal
          category={activeCategory}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </>
  );
};
