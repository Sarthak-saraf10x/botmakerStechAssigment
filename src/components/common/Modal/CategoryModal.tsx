import React from 'react';
import { X, Trophy, Users, Cpu, Zap, CheckCircle } from 'lucide-react';
import type { CategoryData } from '../../../types/modals';

interface CategoryModalProps {
  category: CategoryData;
  onClose: () => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#100f0f] border border-[#2e2e2e] rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto mx-2 sm:mx-0">
        
        {/* Accent glow top bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: category.accentColor }} />

        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#2e2e2e] flex items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${category.accentColor}18`, border: `1px solid ${category.accentColor}30` }}>
              <img src={category.iconSrc} alt={category.title} className="w-9 h-9 object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: category.accentColor }}>
                ELIGIBILITY GROUP
              </p>
              <h2 className="text-2xl font-extrabold text-white">{category.title}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{category.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors flex-shrink-0 cursor-pointer mt-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* Tagline */}
          <p className="text-sm text-gray-300 leading-relaxed border-l-2 pl-4 italic"
            style={{ borderColor: category.accentColor }}>
            "{category.tagline}"
          </p>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {category.description}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-[#1a1919] border border-[#2e2e2e] rounded-xl p-4 text-center">
              <Users className="w-5 h-5 mx-auto mb-2 text-gray-500" />
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Age Group</p>
              <p className="text-sm font-bold text-white">{category.ageGroup}</p>
            </div>
            <div className="bg-[#1a1919] border border-[#2e2e2e] rounded-xl p-4 text-center">
              <Cpu className="w-5 h-5 mx-auto mb-2 text-gray-500" />
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Team Size</p>
              <p className="text-sm font-bold text-white">{category.teamSize}</p>
            </div>
            <div className="bg-[#1a1919] border border-[#2e2e2e] rounded-xl p-4 text-center">
              <Zap className="w-5 h-5 mx-auto mb-2 text-gray-500" />
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Tech Level</p>
              <p className="text-sm font-bold text-white">{category.techLevel}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              What You'll Compete In
            </h4>
            <ul className="space-y-2">
              {category.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: category.accentColor }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Rules */}
          <div className="bg-[#0c0b0b] border border-[#2e2e2e] rounded-xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Key Rules & Constraints
            </h4>
            <ul className="space-y-1.5">
              {category.rules.map((r, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Prize banner */}
          <div className="flex items-center gap-3 rounded-xl p-4 border"
            style={{ background: `${category.accentColor}0d`, borderColor: `${category.accentColor}30` }}>
            <Trophy className="w-5 h-5 flex-shrink-0" style={{ color: category.accentColor }} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Prize Pool</p>
              <p className="text-sm font-bold text-white">{category.prizes}</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer hover:brightness-110 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${category.accentColor}, ${category.accentColor}99)` }}
          >
            Got It — Register Now
          </button>
        </div>
      </div>
    </div>
  );
};
