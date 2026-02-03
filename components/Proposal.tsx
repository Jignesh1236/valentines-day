
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
    const texts = ["Nahin", "Soch lo...", "Sach mein?", "Dil mat todo 🥺", "Abhi bhi nahin?", "Pakka?", "Madam Ji Hve Tamara પગ Pakdish To Haa Bolso"];
    return texts[Math.min(noCount, texts.length - 1)];
  };

  if (accepted) {
    return (
      <div className="text-center animate-fade-in flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-romantic text-pink-600 mb-6 drop-shadow-lg">Hve Thi Tame Mara Forever Wala Madam Ji 😌</h1>
        <div className="relative">
          <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-30 animate-pulse rounded-full"></div>
          <img 
            src="https://github.com/Jignesh1236/valentines-day/blob/main/components/ezgif-5c8972bf17bb7aab.gif" 
            alt="Love" 
            className="relative z-10 w-72 h-72 rounded-full border-8 border-white shadow-2xl object-cover"
          />
        </div>
        <p className="mt-8 text-2xl text-pink-500 font-bold bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
          Ab Hum Forever Saath Hain ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(255,182,193,0.5)] border-4 border-pink-100 text-center max-w-xl mx-4 transform">
      <div className="text-6xl mb-6">💍</div>
      <h1 className="text-4xl md:text-6xl font-romantic text-pink-600 mb-6 leading-tight">
        Hve Thi Tame Mara Forever Wala Madam Ji 😌
      </h1>
      <p className="text-pink-400 mb-12 text-lg italic font-medium">I promise to be your favorite distraction forever! 😁👉🏻👈🏻</p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          onClick={() => setAccepted(true)}
          className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-125 hover:-rotate-2 shadow-[0_10px_20px_rgba(236,72,153,0.4)] active:scale-95"
        >
          HAAN! ❤️
        </button>
        
        <button
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          style={{ 
            transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
          }}
          className="w-full sm:w-auto bg-gray-100 text-gray-400 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-inner whitespace-nowrap cursor-not-allowed"
        >
          {getNoText()}
        </button>
      </div>
    </div>
  );
};

export default Proposal;
