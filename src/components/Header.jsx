import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 flex items-center z-50 backdrop-blur-md bg-white/10">
      <div className="flex items-center gap-3">
        {/* Logo Icon */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
          <span className="relative text-white text-xl font-bold drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
            IV
          </span>
        </div>
        
        {/* Brand Text */}
        <div className="flex flex-col">
          <div className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
              IndiVillage
            </span>
          </div>
          <div className="text-xs text-white/80 font-medium tracking-wide">
            Gamified Onboarding Experience
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </header>
  );
}