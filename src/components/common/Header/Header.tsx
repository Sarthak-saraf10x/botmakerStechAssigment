import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../../assets/images/backgrounds/logo.png';

interface HeaderProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

const NAV_LINKS = [
  { href: '#events', label: 'Events' },
  { href: '#journey', label: 'Programs' },
  { href: '#categories', label: 'Categories' },
  { href: '#disciplines', label: 'Disciplines' },
  { href: '#ecosystem', label: 'Community' },
];

export const Header: React.FC<HeaderProps> = ({ onRegisterClick, onLoginClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#100f0f]/90 backdrop-blur-md border-b border-[#2e2e2e] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <img src={logoImg} alt="BotLeague Logo" className="h-9 w-auto object-contain" />
          <div className="hidden xs:block text-left">
            <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              BOTLEAGUE
            </span>
            <span className="block text-[8px] text-[#ff4c4c] tracking-widest uppercase font-semibold">
              Robo Sports Arena
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-300 hover:text-[#ff4c4c] transition-colors relative group py-2"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c4c] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors hover:bg-white/5 rounded-md"
          >
            LOGIN
          </button>
          <button
            onClick={onRegisterClick}
            className="px-4 py-2 text-sm font-semibold bg-[#ff4c4c] hover:bg-[#e03d3d] text-white rounded-md shadow-lg shadow-[#ff4c4c]/20 hover:shadow-[#ff4c4c]/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            REGISTER NOW
          </button>
        </div>

        {/* Mobile: Register button + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onRegisterClick}
            className="px-3 py-1.5 text-xs font-bold bg-[#ff4c4c] text-white rounded-md"
          >
            REGISTER
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2e2e2e] bg-[#100f0f]/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className="py-3 px-3 text-sm font-medium text-gray-300 hover:text-[#ff4c4c] hover:bg-white/5 rounded-lg transition-colors border-b border-[#2e2e2e]/50 last:border-0"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => { onLoginClick(); handleNavClick(); }}
              className="mt-2 py-3 px-3 text-sm font-semibold text-gray-300 hover:text-white text-left hover:bg-white/5 rounded-lg transition-colors"
            >
              LOGIN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
