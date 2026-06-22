import React, { useState } from 'react';
import { DisciplineModal } from '../common/Modal/DisciplineModal';
import type { DisciplineData } from '../../types/modals';

// Import Discipline Thumbnails
import sportRoboraceImg from '../../assets/images/sports/sport_roborace.png';
import sportLinefollowerImg from '../../assets/images/sports/sport_linefollower.png';
import sportRcracingImg from '../../assets/images/sports/sport_rcracing.png';
import sportFpvdroneImg from '../../assets/images/sports/sport_fpvdrone.png';
import sportRobohockeyImg from '../../assets/images/sports/sport_robohockey.png';
import sportRobowarImg from '../../assets/images/sports/sport_robowar.png';

const DISCIPLINES: DisciplineData[] = [
  {
    id: 'robo-race',
    title: 'Robo Race',
    imageSrc: sportRoboraceImg,
    accentColor: '#ff4c4c',
    tagline: 'Speed is engineered, not gifted.',
    description:
      'Custom-designed speed crawlers race head-to-head on complex obstacle tracks featuring ramps, tunnels, and narrow bridges. The fastest bot to complete three laps without disqualification wins. Robo Race demands both mechanical precision and driver mastery.',
    format: 'Elimination Brackets',
    duration: '3 min / heat',
    teamSize: '2 – 4 members',
    difficulty: '★★★☆☆',
    rules: [
      'Bot must fit within 30cm × 30cm footprint.',
      'Maximum speed: unrestricted — but must remain on-track.',
      'Deliberate ramming of opponents results in disqualification.',
      'Bots must complete the full course without skipping sections.',
    ],
    allowedTech: ['DC Motors', 'Servo Drive', 'Arduino', 'ESP32', 'RC Controller', 'LiPo Battery'],
    prizes: '₹80,000 Pool · Speed Record Trophy',
  },
  {
    id: 'line-follower',
    title: 'Line Follower',
    imageSrc: sportLinefollowerImg,
    accentColor: '#ffc702',
    tagline: 'Autonomy at its purest.',
    description:
      'Autonomous pathfinder bots race on high-contrast line tracks featuring sharp bends, intersections, gaps, and decision junctions. No human control allowed mid-race — all logic must be pre-programmed. The bot with the fastest clean run wins.',
    format: 'Time Trial',
    duration: '2 min / run',
    teamSize: '1 – 3 members',
    difficulty: '★★★★☆',
    rules: [
      'No wireless communication or remote override during the run.',
      'Bot must detect and follow the line using onboard sensors only.',
      'Maximum 3 restarts allowed; time penalties apply after 1st restart.',
      'Bot must weigh under 500g.',
    ],
    allowedTech: ['IR Sensors', 'PID Controller', 'Arduino Nano', 'STM32', 'Li-ion Cell', 'Encoder Motors'],
    prizes: '₹60,000 Pool · Precision Engineering Award',
  },
  {
    id: 'rc-racing',
    title: 'RC Racing',
    imageSrc: sportRcracingImg,
    accentColor: '#ff4c4c',
    tagline: 'Dirt, speed, and pure driver instinct.',
    description:
      'Remote-controlled high-speed off-road crawlers tackle dirt circuits, banked loops, wall-ride sections, and jump ramps. RC Racing is the purest test of driver skill and vehicle suspension tuning. Head-to-head heat format with a championship final.',
    format: 'Head-to-Head Heats',
    duration: '5 min / heat',
    teamSize: '1 – 2 members',
    difficulty: '★★☆☆☆',
    rules: [
      'Bot must use approved RC frequency bands (2.4 GHz only).',
      'No bot-to-bot contact permitted — tracks are wide enough for clean racing.',
      'Vehicle modifications must be completed in the pit area only.',
      'All vehicles must pass a pre-race technical inspection.',
    ],
    allowedTech: ['Standard RC Controller', 'Brushless Motors', 'ESC', 'LiPo 3S/4S', 'Suspension Chassis'],
    prizes: '₹75,000 Pool · Circuit Champion Title',
  },
  {
    id: 'fpv-drone',
    title: 'FPV Drone Racing & Aeromodelling',
    imageSrc: sportFpvdroneImg,
    accentColor: '#ffc702',
    tagline: 'See through the machine. Fly at the edge.',
    description:
      'High-speed quadcopters maneuver through 3D ring tunnels, barrel rolls, and vertical obstacle courses at full throttle. Pilots wear FPV goggles for an immersive first-person view. Aeromodelling sub-events include precision hovering and payload drop challenges.',
    format: 'Time Trial + Freestyle',
    duration: '4 min / run',
    teamSize: '1 – 2 members',
    difficulty: '★★★★★',
    rules: [
      'Max drone weight: 250g for indoor, 500g for outdoor events.',
      'FPV goggles must be worn during all timed runs.',
      'Propeller guards mandatory for all indoor flights.',
      'Pilots must hold a valid DGCA UAS registration or event waiver.',
    ],
    allowedTech: ['FPV Goggles', '4S LiPo', 'FC + ESC Stack', 'Digital VTX', 'Racing Props', 'GPS Module'],
    prizes: '₹1,20,000 Pool · Sky Ace Trophy + Pro Circuit Invite',
  },
  {
    id: 'robo-hockey',
    title: 'Robo Hockey',
    imageSrc: sportRobohockeyImg,
    accentColor: '#ff4c4c',
    tagline: 'Team strategy meets mechanical horsepower.',
    description:
      'Team-based robotic puck matching on a miniature hockey rink. Teams of two bots each compete to score the most goals in a timed match. Robo Hockey showcases manual drive coordination, team strategy, and on-the-fly engineering adjustments between periods.',
    format: '2v2 League Matches',
    duration: '10 min / match',
    teamSize: '3 – 5 members',
    difficulty: '★★★☆☆',
    rules: [
      'Bots may not physically block the opponent\'s goal zone permanently.',
      'Each team deploys exactly 2 bots simultaneously on the arena.',
      'Contact between bots is allowed; lifting or flipping is not.',
      'All bots must fit within a 20cm × 20cm footprint.',
    ],
    allowedTech: ['Omni Wheels', 'Mecanum Drive', 'RC Controller', 'H-Bridge', 'Arduino Mega', 'LiPo 2S'],
    prizes: '₹90,000 Pool · Team MVP Trophy + League Ranking',
  },
  {
    id: 'robo-war',
    title: 'Robo War',
    imageSrc: sportRobowarImg,
    accentColor: '#ffc702',
    tagline: 'Last bot standing wins everything.',
    description:
      'Heavyweight armored combat bots fight inside protective containment cages until one bot is immobilized, destroyed, or driven out of bounds. The crowd favorite — Robo War demands extreme structural engineering, powerful weapon systems, and nerves of steel.',
    format: 'Single Elimination',
    duration: '3 min / bout',
    teamSize: '3 – 6 members',
    difficulty: '★★★★★',
    rules: [
      'Bot weight class: Featherweight (13 kg) or Middleweight (27 kg).',
      'All energy weapons (flamethrowers, explosive devices) strictly prohibited.',
      'Bot must have a functioning safety lock accessible by referees.',
      'Bots that are immobile for 10 consecutive seconds are declared KO.',
    ],
    allowedTech: ['Hardened Steel Armor', 'Spinning Weapons', 'Flipper Arms', 'High-Torque Motors', 'LiPo 6S', 'Full-Bridge ESC'],
    prizes: '₹2,00,000 Pool · Gladiator Cup + BotLeague Combat License',
  },
];

export const DisciplinesSection: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineData | null>(null);

  return (
    <>
      <section id="disciplines" className="relative z-10 py-24 bg-[#0c0b0b] border-t border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-left space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff4c4c] uppercase px-3 py-1 rounded bg-[#ff4c4c]/10 border border-[#ff4c4c]/20 inline-block">
              SPORTS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">COMPETITION DISCIPLINES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISCIPLINES.map((discipline) => (
              <div
                key={discipline.id}
                onClick={() => setActiveDiscipline(discipline)}
                className="group relative rounded-xl border border-[#2e2e2e] bg-[#1a1919]/60 hover:bg-black/40 overflow-hidden transition-all duration-300 cursor-pointer hover:border-[#ff4c4c]/40 hover:shadow-lg hover:shadow-black/50"
              >
                <div className="h-[200px] w-full bg-[#151414] overflow-hidden relative">
                  <img
                    src={discipline.imageSrc}
                    alt={`${discipline.title} Thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#ff4c4c]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Click hint badge */}
                  <div className="absolute top-3 right-3 bg-black/60 border border-white/10 text-[10px] text-gray-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                    View Details
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff4c4c] transition-colors">
                    {discipline.title}
                  </h3>
                  <p className="text-xs text-gray-500">{discipline.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeDiscipline && (
        <DisciplineModal
          discipline={activeDiscipline}
          onClose={() => setActiveDiscipline(null)}
        />
      )}
    </>
  );
};
