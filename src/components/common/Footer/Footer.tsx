import React from 'react';
import { Video, Sparkles } from 'lucide-react';
import logoImg from '../../../assets/images/backgrounds/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 bg-[#0c0b0b] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#2e2e2e] pb-12">
        {/* Logo & Intro */}
        <div className="md:col-span-4 space-y-4 text-left">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="BotLeague Logo" className="h-8 w-auto object-contain" />
            <span className="font-extrabold text-base tracking-wider text-white">
              BOTLEAGUE
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
            The national registry and league system for amateur and professional robotics sports. Standardizing, auditing, and ranking mechanical innovators nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-xs font-bold text-white tracking-widest uppercase">QUICK LINKS</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a href="#events" className="hover:text-white transition-colors">The Arena</a>
            <a href="#journey" className="hover:text-white transition-colors">Episodes</a>
            <a href="#journey" className="hover:text-white transition-colors">National Rankings</a>
            <a href="#categories" className="hover:text-white transition-colors">Programs</a>
            <a href="#disciplines" className="hover:text-white transition-colors">Rulebooks</a>
            <a href="#ecosystem" className="hover:text-white transition-colors">Sponsorships</a>
            <a href="#ecosystem" className="hover:text-white transition-colors">Help Center</a>
            <a href="#ecosystem" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-xs font-bold text-white tracking-widest uppercase">SOCIAL MEDIA</h4>
          <p className="text-xs text-gray-500">Stay up to date with match stream schedules and developer blogs.</p>
          <div className="flex gap-4 pt-2">
            <a href="https://youtube.com" className="w-9 h-9 rounded-full bg-[#1a1919] hover:bg-[#ff4c4c] hover:text-white flex items-center justify-center text-gray-300 transition-colors border border-[#2e2e2e]">
              <Video className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" className="w-9 h-9 rounded-full bg-[#1a1919] hover:bg-[#ff4c4c] hover:text-white flex items-center justify-center text-gray-300 transition-colors border border-[#2e2e2e]">
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
        <p>© {new Date().getFullYear()} BOTLEAGUE Association. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
          <a href="#legal" className="hover:text-gray-400">Legal Disclaimers</a>
        </div>
      </div>
    </footer>
  );
};
