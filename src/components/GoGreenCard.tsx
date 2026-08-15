import React from 'react';
import plantImage from '../assets/images/african_hands_baobab_seedling_1784842129198.jpg';

export default function GoGreenCard() {
  return (
    <div className="w-[450px] h-[450px] bg-white relative shadow-2xl rounded-[32px] overflow-hidden flex flex-col font-sans">
      
      {/* Photo Container */}
      <div className="absolute top-0 right-0 w-[78%] h-[72%]">
        <div className="w-full h-full rounded-tr-[32px] rounded-bl-[180px] overflow-hidden">
          <img 
            src={plantImage} 
            alt="Seedling" 
            className="w-full h-full object-cover transform scale-105"
          />
        </div>
      </div>

      {/* Top Left Leaf Blob */}
      <div className="absolute top-0 left-0 w-[60%] h-[65%] z-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {/* Darker background leaf (shadow/fold effect) */}
          <path d="M0,0 L90,0 C90,20 100,45 65,65 C25,85 35,100 35,100 L0,100 Z" fill="#245d27" className="opacity-80" />
          {/* Lighter foreground leaf */}
          <path d="M0,0 L75,0 C75,20 85,40 50,60 C10,80 20,100 20,100 L0,100 Z" fill="#3aa346" />
        </svg>
      </div>

      {/* GO GREEN Text */}
      <div className="absolute top-10 left-10 z-20">
        <h2 className="text-white text-5xl font-black leading-[1.05] tracking-tight">
          GO<br />GREEN
        </h2>
      </div>

      {/* Circle Badge */}
      <div className="absolute top-[52%] left-[8%] z-20 w-36 h-36 bg-[#27592d] rounded-full flex flex-col items-center justify-center transform -translate-y-1/2 shadow-xl">
        {/* Leaves Icon */}
        <div className="relative w-12 h-12 mb-1 flex items-center justify-center">
          {/* Left Leaf */}
          <div className="absolute w-5 h-5 bg-[#a4d183] rounded-tl-full rounded-br-full transform -rotate-[75deg] -translate-x-3 translate-y-2 shadow-sm"></div>
          {/* Right Leaf */}
          <div className="absolute w-5 h-5 bg-[#a4d183] rounded-tl-full rounded-br-full transform -rotate-[15deg] translate-x-3 translate-y-2 shadow-sm"></div>
          {/* Center Leaf */}
          <div className="absolute w-7 h-7 bg-[#c3ebaa] rounded-tl-full rounded-br-full transform -rotate-45 -translate-y-1 z-10 shadow-sm"></div>
        </div>
        <span className="text-white text-[13px] font-semibold tracking-[0.15em] mt-2">GREEN</span>
      </div>

      {/* Bottom Text Area */}
      <div className="absolute bottom-0 left-0 w-full p-10 pt-0 bg-white z-10 flex flex-col justify-end h-[35%]">
        <h3 className="text-[32px] font-black uppercase leading-tight mb-3">
          <span className="text-[#3aa346]">Save</span><br />
          <span className="text-[#27592d]">The Planet</span>
        </h3>
        <p className="text-gray-600 text-[11px] leading-relaxed font-medium max-w-[90%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
