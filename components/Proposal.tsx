
import React, { useState, useRef } from 'react';

const Proposal: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  const handleNoHover = () => {
    const maxX = 200;
    const maxY = 200;
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;
    setNoButtonPos({ x: newX, y: newY });
    setNoCount(prev => prev + 1);
  };

  const getNoText = () => {
    const texts = ["Nahin", "Soch lo...", "Sach mein?", "Dil mat todo 🥺", "Abhi bhi nahin?", "Maan jaao na", "Madam Ji Hve Tamara પગ Pakdish To Haa Bolso"];
    return texts[Math.min(noCount, texts.length - 1)];
  };

  if (accepted) {
    return (
      <div className="text-center animate-fade-in flex flex-col items-center px-2">
        <h1 className="text-2xl md:text-6xl lg:text-8xl font-romantic text-pink-600 mb-4 md:mb-6 drop-shadow-lg">Hve Thi Tame Mara Forever Wala Madam Ji 😌</h1>
        <div className="relative">
          <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-30 animate-pulse rounded-full"></div>
          <img 
            src="/ezgif-5c8972bf17bb7aab.gif" 
            alt="Love" 
            className="relative z-10 w-40 h-40 md:w-72 md:h-72 rounded-full border-4 md:border-8 border-white shadow-2xl object-cover"
          />
        </div>
        <p className="mt-4 md:mt-8 text-lg md:text-2xl text-pink-500 font-bold bg-white/50 px-4 md:px-6 py-2 rounded-full backdrop-blur-sm">
          Ab Hum Forever Saath Hain ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-xl p-4 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(236,72,153,0.5)] border-4 border-pink-100 text-center max-w-[95vw] md:max-w-xl mx-auto transform">
      <div className="text-4xl md:text-6xl mb-4 md:mb-6">💍</div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-romantic text-pink-600 mb-4 md:mb-6 leading-tight">
        Mara Forever Wala Madam Ji Banso? 😁👉🏻👈🏻
      </h1>
      <p className="text-pink-400 mb-8 md:mb-12 text-sm md:text-lg italic font-medium">I promise to be your favorite distraction forever! 😁👉🏻👈🏻</p>
      
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-6 justify-center items-center px-2">
        <button
          onClick={() => setAccepted(true)}
          className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-black py-3 md:py-5 px-8 md:px-14 rounded-full transition-all transform hover:scale-125 hover:-rotate-2 shadow-[0_10px_20px_rgba(236,72,153,0.4)] active:scale-95"
        >
          HAAN! ❤️
        </button>
        
        <button
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          style={{ 
            transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
          }}
          className="w-full sm:w-auto bg-gray-100 text-gray-400 font-bold py-3 md:py-4 px-4 md:px-6 rounded-full transition-all duration-300 shadow-inner cursor-not-allowed text-sm md:text-base max-w-[200px] sm:max-w-none"
        >
          {getNoText()}
        </button>
      </div>
    </div>
  );
};

export default Proposal;
