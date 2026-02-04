
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Proposal from './components/Proposal';

const memories = [
  "Goddess Ji Me Tamne Dekhi Che Tya Thi Dil Ma Something Somthing Thai Che 🤌🏻",
  "Madam Ji Tame Mane Roj J Selfie Ane Videos Moklo Cho Ea Mara Mate Savthi Important Moment Hoye Che 😁🤌🏻",
  "Goddess Ji Tame Mara Mate Bv J Special Cho 😌",
  "Goddess Ji Mane Tamari Care Krvi Che Ne Tamne Proper Goddess Tretment Aapvi Che Ne Tamne Nana Baby Ni Jem Pamper Krvi Che Ne Tamne Spoil Bhi Krvi Che 🤌🏻😌"
];

const App: React.FC = () => {
  const [chapter, setChapter] = useState(1);
  const [reasonIdx, setReasonIdx] = useState(0);

  const nextReason = () => {
    if (reasonIdx < memories.length - 1) {
      setReasonIdx(prev => prev + 1);
    } else {
      setChapter(3);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden relative flex items-center justify-center p-2 md:p-4">
      <FloatingHearts />
      
      {/* Chapter 1: The Greeting Envelope */}
      <div className={`chapter-transition absolute inset-0 flex items-center justify-center ${chapter === 1 ? 'opacity-100 scale-100 z-30' : 'opacity-0 scale-90 -z-10'}`}>
        <div 
          onClick={() => setChapter(2)}
          className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl border-4 border-dashed border-purple-300 text-center cursor-pointer hover:rotate-2 transition-transform group"
        >
          <div className="text-5xl md:text-8xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
          <h1 className="text-xl md:text-3xl font-romantic text-purple-600">Madam Ji, Zara Yeh Open To Kijiye...</h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Click to Open</p>
        </div>
      </div>

      {/* Chapter 2: The Reasons */}
      <div className={`chapter-transition absolute inset-0 flex flex-col items-center justify-center ${chapter === 2 ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 translate-y-10 -z-10'}`}>
        <div className="bg-white p-4 md:p-6 rounded shadow-2xl transform -rotate-2 max-w-xs md:max-w-sm w-full border-b-[20px] md:border-b-[40px] border-white">
          <div className="bg-purple-100 h-48 md:h-64 w-full flex items-center justify-center rounded overflow-hidden relative">
             <img src={`./components/images/memory${reasonIdx + 1}.jpg`} alt="Memory" className="w-full h-full object-cover" onError={(e) => {
               // Fallback to placeholder if image not found
               e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="%23ddd"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
             }} />
             <div className="absolute inset-0 bg-purple-500/10"></div>
          </div>
          <p className="mt-4 md:mt-6 font-romantic text-base md:text-2xl text-center text-purple-700 leading-relaxed">
            "{memories[reasonIdx]}"
          </p>
        </div>
        <button 
          onClick={nextReason}
          className="mt-6 md:mt-10 bg-purple-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
        >
          Aur Batao! <span className="text-xl">👉</span>
        </button>
        <div className="mt-3 md:mt-4 text-purple-400 font-bold text-sm md:text-base">
          {reasonIdx + 1} / {memories.length}
        </div>
      </div>

      {/* Chapter 3: The Proposal */}
      <div className={`chapter-transition absolute inset-0 flex items-center justify-center ${chapter === 3 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 -z-10'}`}>
        <Proposal />
      </div>

      {/* Footer Info (Hidden when proposal accepted) */}
      <div className="absolute bottom-2 md:bottom-6 left-0 right-0 text-center text-purple-300 pointer-events-none opacity-40 text-xs md:text-sm">
        Handcrafted for a Special Someone ✨
      </div>
    </div>
  );
};

export default App;
