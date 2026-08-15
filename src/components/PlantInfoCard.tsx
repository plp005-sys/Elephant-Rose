import React from 'react';
import { Sun, Wind, Droplet, Maximize2, Plus, ChevronRight } from 'lucide-react';

export default function PlantInfoCard() {
  return (
    <div className="w-[450px] h-[580px] bg-gradient-to-br from-[#1b5038] to-[#0e301f] relative shadow-2xl rounded-[32px] p-5 flex flex-col font-sans overflow-hidden border border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/20 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Main Plant Area */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Aloe Vera SVG */}
        <div className="relative w-56 h-72 mt-8 z-10 drop-shadow-2xl">
          <svg viewBox="0 0 200 250" className="w-full h-full">
            {/* Back leaves */}
            <path d="M 100 180 Q 50 100, 20 40 Q 60 110, 85 180" fill="#2d6e35" />
            <path d="M 100 180 Q 150 100, 180 40 Q 140 110, 115 180" fill="#2a6631" />
            <path d="M 95 180 Q 30 130, 10 90 Q 50 140, 80 180" fill="#265e2c" />
            <path d="M 105 180 Q 170 130, 190 90 Q 150 140, 120 180" fill="#265e2c" />
            
            {/* Middle leaves */}
            <path d="M 95 180 Q 60 80, 40 10 Q 75 90, 95 180" fill="#3b8c43" />
            <path d="M 105 180 Q 140 80, 160 10 Q 125 90, 105 180" fill="#3b8c43" />
            <path d="M 90 180 Q 40 140, 15 110 Q 60 150, 85 180" fill="#357d3d" />
            <path d="M 110 180 Q 160 140, 185 110 Q 140 150, 115 180" fill="#357d3d" />
            
            {/* Front leaf */}
            <path d="M 90 185 Q 100 60, 100 0 Q 110 60, 110 185" fill="#4fb358" />
            <path d="M 85 185 Q 80 100, 70 50 Q 90 110, 95 185" fill="#46a34f" />
            <path d="M 115 185 Q 120 100, 130 50 Q 110 110, 105 185" fill="#46a34f" />

            {/* Thorns/Spikes on front leaf */}
            <path d="M 93 140 L 90 138 L 94 135 Z" fill="#c3ebaa" />
            <path d="M 94 110 L 91 108 L 95 105 Z" fill="#c3ebaa" />
            <path d="M 95 80 L 92 78 L 96 75 Z" fill="#c3ebaa" />
            <path d="M 97 50 L 94 48 L 98 45 Z" fill="#c3ebaa" />
            
            <path d="M 107 140 L 110 138 L 106 135 Z" fill="#c3ebaa" />
            <path d="M 106 110 L 109 108 L 105 105 Z" fill="#c3ebaa" />
            <path d="M 105 80 L 108 78 L 104 75 Z" fill="#c3ebaa" />
            <path d="M 103 50 L 106 48 L 102 45 Z" fill="#c3ebaa" />

            {/* Dots on leaves */}
            <circle cx="100" cy="150" r="1.5" fill="#e0fce0" />
            <circle cx="98" cy="120" r="1.5" fill="#e0fce0" />
            <circle cx="102" cy="90" r="1.5" fill="#e0fce0" />
            
            <circle cx="85" cy="160" r="1.5" fill="#e0fce0" />
            <circle cx="78" cy="130" r="1.5" fill="#e0fce0" />
            <circle cx="75" cy="95" r="1.5" fill="#e0fce0" />
            
            <circle cx="115" cy="160" r="1.5" fill="#e0fce0" />
            <circle cx="122" cy="130" r="1.5" fill="#e0fce0" />
            <circle cx="125" cy="95" r="1.5" fill="#e0fce0" />
            
            {/* Pot */}
            <path d="M 50 185 C 50 240, 65 250, 100 250 C 135 250, 150 240, 150 185 Z" fill="#587d46" />
            <path d="M 50 185 C 50 235, 60 250, 100 250 C 140 250, 150 235, 150 185 Z" fill="url(#potGradient)" />
            <ellipse cx="100" cy="185" rx="50" ry="8" fill="#3c572f" />
            
            <defs>
              <linearGradient id="potGradient" x1="50" y1="217.5" x2="150" y2="217.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#436334"/>
                <stop offset="0.5" stopColor="#638c4f"/>
                <stop offset="1" stopColor="#37522a"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Labels */}
        
        {/* Atmosphere Sunny */}
        <div className="absolute top-[8%] right-[10%] z-20">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-1.5 px-3 shadow-lg">
            <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
              <Sun className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-[10px] font-semibold tracking-wide">Atmosphere Sunny</span>
          </div>
          {/* Connecting line */}
          <div className="absolute top-4 -left-6 w-8 h-[1px] bg-white/60 rotate-[-20deg] origin-right"></div>
          <div className="absolute top-[8px] -left-6 w-1.5 h-1.5 rounded-full bg-white border border-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        </div>

        {/* Humidity 32% */}
        <div className="absolute top-[35%] left-[2%] z-20">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-1.5 px-3 shadow-lg">
            <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center shrink-0">
              <Wind className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-[10px] font-semibold tracking-wide">Humidity 32%</span>
          </div>
          {/* Connecting line */}
          <div className="absolute top-1/2 -right-8 w-8 h-[1px] bg-white/60 rotate-12 origin-left"></div>
          <div className="absolute top-[16px] -right-8 w-1.5 h-1.5 rounded-full bg-white border border-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        </div>

        {/* Water Level 450ml */}
        <div className="absolute top-[38%] right-[-2%] z-20">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-1.5 px-3 shadow-lg">
            <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center shrink-0">
              <Droplet className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-[10px] font-semibold tracking-wide">Water Level 450ml</span>
          </div>
          {/* Connecting line */}
          <div className="absolute top-1/2 -left-8 w-8 h-[1px] bg-white/60 -rotate-[15deg] origin-right"></div>
          <div className="absolute top-[10px] -left-[32px] w-1.5 h-1.5 rounded-full bg-white border border-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        </div>

        {/* Size Small */}
        <div className="absolute bottom-[22%] right-[5%] z-20">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full py-1.5 px-3 shadow-lg">
            <div className="w-5 h-5 rounded-full bg-fuchsia-500 flex items-center justify-center shrink-0">
              <Maximize2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-[10px] font-semibold tracking-wide">Size Small</span>
          </div>
          {/* Connecting line */}
          <div className="absolute top-1/2 -left-12 w-12 h-[1px] bg-white/60 rotate-[20deg] origin-right"></div>
          <div className="absolute top-[20px] -left-[48px] w-1.5 h-1.5 rounded-full bg-white border border-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>

      {/* Bottom Cards Area */}
      <div className="flex gap-3 h-[130px] w-full relative z-20 mt-4">
        {/* Card 1 */}
        <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/15 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
               <span className="text-3xl">🪴</span>
            </div>
            <div className="pt-0.5">
              <h4 className="text-white text-[12px] font-bold leading-tight">Monstera Deliciosa</h4>
              <p className="text-white/70 text-[9px] leading-tight mt-1 line-clamp-3">
                Excellent decorative plant but also helps purify the air.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 pl-1">
            <span className="text-white font-bold text-lg">$400</span>
            <button className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition-colors">
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/15 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shrink-0 shadow-inner pt-2">
               <span className="text-3xl">🌿</span>
            </div>
            <div className="pt-0.5">
              <h4 className="text-white text-[12px] font-bold leading-tight">Sansevieria</h4>
              <p className="text-white/70 text-[9px] leading-tight mt-1 line-clamp-3">
                Absorb toxins and improve indoor air quality. CO2 to oxygen.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 pl-1">
            <span className="text-white font-bold text-lg">$500</span>
            <button className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-green-900 transition-colors">
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
        
        {/* Right Arrow Navigation */}
        <button className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shadow-lg border border-white/40 hover:bg-green-300 transition-colors z-30">
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

    </div>
  );
}
