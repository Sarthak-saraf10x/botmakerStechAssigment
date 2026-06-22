import React from 'react';
import { X, Clock, Users, Shield, Trophy, ChevronRight } from 'lucide-react';
import type { DisciplineData } from '../../../types/modals';

interface DisciplineModalProps {
  discipline: DisciplineData;
  onClose: () => void;
}

export const DisciplineModal: React.FC<DisciplineModalProps> = ({ discipline, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#100f0f] border border-[#2e2e2e] rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto mx-2 sm:mx-0">

        {/* Hero image */}
        <div className="relative h-36 sm:h-44 md:h-52 w-full bg-[#0c0b0b] overflow-hidden flex-shrink-0">
          <img
            src={discipline.imageSrc}
            alt={discipline.title}
            className="w-full h-full object-cover opacity-70"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#100f0f] via-[#100f0f]/40 to-transparent" />
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: discipline.accentColor }} />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 rounded-full p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          {/* Title overlay */}
          <div className="absolute bottom-4 left-5">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: discipline.accentColor }}>
              COMPETITION DISCIPLINE
            </p>
            <h2 className="text-2xl font-extrabold text-white drop-shadow">{discipline.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* Tagline */}
          <p className="text-sm text-gray-300 italic border-l-2 pl-4 leading-relaxed"
            style={{ borderColor: discipline.accentColor }}>
            "{discipline.tagline}"
          </p>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">{discipline.description}</p>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Clock, label: 'Match Duration', value: discipline.duration },
              { icon: Users, label: 'Team Size', value: discipline.teamSize },
              { icon: Shield, label: 'Difficulty', value: discipline.difficulty },
              { icon: ChevronRight, label: 'Format', value: discipline.format },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#1a1919] border border-[#2e2e2e] rounded-xl p-4 flex items-center gap-3">
                <Icon className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-bold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Competition Rules</h4>
            <ul className="space-y-1.5">
              {discipline.rules.map((r, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                  <span style={{ color: discipline.accentColor }} className="mt-0.5 font-bold">{i + 1}.</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Allowed Tech */}
          <div className="bg-[#0c0b0b] border border-[#2e2e2e] rounded-xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Allowed Technology</h4>
            <div className="flex flex-wrap gap-2">
              {discipline.allowedTech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border font-medium"
                  style={{ borderColor: `${discipline.accentColor}40`, color: discipline.accentColor, background: `${discipline.accentColor}10` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prize */}
          <div className="flex items-center gap-3 rounded-xl p-4 border"
            style={{ background: `${discipline.accentColor}0d`, borderColor: `${discipline.accentColor}30` }}>
            <Trophy className="w-5 h-5 flex-shrink-0" style={{ color: discipline.accentColor }} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Prize Pool</p>
              <p className="text-sm font-bold text-white">{discipline.prizes}</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer hover:brightness-110 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${discipline.accentColor}, ${discipline.accentColor}99)` }}
          >
            Register for This Discipline
          </button>
        </div>
      </div>
    </div>
  );
};
