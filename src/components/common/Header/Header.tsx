import React from 'react';
import logoImg from '../../../assets/images/backgrounds/logo.png';

interface HeaderProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegisterClick, onLoginClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#100f0f]/85 backdrop-blur-md border-b border-[#2e2e2e] transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="BotLeague Logo" className="h-10 w-auto object-contain" />
          <div className="hidden sm:block text-left">
            <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              BOTLEAGUE
            </span>
            <span className="block text-[8px] text-[#ff4c4c] tracking-widest uppercase font-semibold">
              Robo Sports Arena
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#events" className="text-sm font-medium text-gray-300 hover:text-[#ff4c4c] transition-colors relative group py-2">
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c4c] transition-all group-hover:w-full" />
          </a>
          <a href="#journey" className="text-sm font-medium text-gray-300 hover:text-[#ff4c4c] transition-colors relative group py-2">
            Programs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c4c] transition-all group-hover:w-full" />
          </a>
          <a href="#categories" className="text-sm font-medium text-gray-300 hover:text-[#ff4c4c] transition-colors relative group py-2">
            Categories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c4c] transition-all group-hover:w-full" />
          </a>
          <a href="#disciplines" className="text-sm font-medium text-gray-300 hover:text-[#ff4c4c] transition-colors relative group py-2">
            Disciplines
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c4c] transition-all group-hover:w-full" />
          </a>
          <a href="#ecosystem" className="text-sm font-medium text-gray-300 hover:text-[#ff4c4c] transition-colors relative group py-2">
            Community
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c4c] transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onLoginClick}
            className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors hover:bg-white/5 rounded-md"
          >
            LOGIN
          </button>
          <button 
            onClick={onRegisterClick}
            className="px-5 py-2 text-sm font-semibold bg-[#ff4c4c] hover:bg-[#e03d3d] text-white rounded-md shadow-lg shadow-[#ff4c4c]/20 hover:shadow-[#ff4c4c]/40 transition-all transform hover:-translate-y-0.5"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </header>
  );
};
