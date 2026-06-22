import React, { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import robotModelImg from '../../../assets/images/backgrounds/robot_model.png';

interface LiveStreamModalProps {
  onClose: () => void;
}

export const LiveStreamModal: React.FC<LiveStreamModalProps> = ({ onClose }) => {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
      <div className="bg-[#100f0f] border border-[#2e2e2e] rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl relative">
        <div className="p-4 border-b border-[#2e2e2e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4c4c] animate-pulse" />
            <span className="font-extrabold text-sm uppercase tracking-wider text-white">LIVE STREAM: BENGALURU ARENA</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm font-bold uppercase transition-colors cursor-pointer"
          >
            CLOSE [X]
          </button>
        </div>

        <div className="aspect-video w-full bg-black relative flex flex-col items-center justify-center p-6 border-b border-[#2e2e2e]">
          {/* Simulated video playback screen */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm pointer-events-none" style={{ backgroundImage: `url(${robotModelImg})` }} />
          
          <div className="z-10 text-center space-y-4 max-w-md">
            <div className="w-16 h-16 rounded-full bg-[#ff4c4c]/90 text-white flex items-center justify-center mx-auto shadow-lg shadow-[#ff4c4c]/30 hover:scale-105 cursor-pointer transition-transform">
              <Play className="w-6 h-6 fill-current text-white translate-x-0.5" />
            </div>
            <h4 className="text-xl font-bold text-white">STREAM BUFFERING...</h4>
            <p className="text-xs text-gray-400">
              Qualifying Match: Crew Alpha (Battle Crawler) vs. Crew Delta (Saw Blade Droid). High torque transmission active.
            </p>
            
            {/* Audio Toggle */}
            <button 
              onClick={() => setSoundOn(!soundOn)}
              className="px-4 py-2 bg-[#1a1919] border border-[#2e2e2e] rounded text-xs text-gray-300 hover:text-white flex items-center gap-2 mx-auto cursor-pointer"
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#ffc702]" />
                  MUTE AUDIO
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-gray-500" />
                  UNMUTE AUDIO
                </>
              )}
            </button>
          </div>

          {/* Status bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] text-gray-500 bg-black/60 px-3 py-1.5 rounded">
            <span>FPS: 60.0 | BITRATE: 6800kbps | REGION: IN-SOUTH-1</span>
            <span>AUDIENCE: 14,299 SPECTATORS</span>
          </div>
        </div>
        
        <div className="p-4 bg-[#0c0b0b] text-left text-xs text-gray-500">
          Disclaimer: The live stream feed is simulated using offline telemetry renders from the Bengaluru Arena.
        </div>
      </div>
    </div>
  );
};
