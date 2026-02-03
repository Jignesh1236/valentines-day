
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Proposal from './components/Proposal';

const memories = [
  "Goddess Ji Me Tamne Dekhi Che Tya Thi Dil Ma Something Somthing Thai Che 🤌🏻",
  "Madam Ji Tame Mane Roj J Selfie Ane Videos Moklo Cho Ea Mara Mate Savthi Important Moment Hoye Che 😁🤌🏻",
  "Goddess Ji Tame Mara Mate Bv J Special Cho 😌",
  "Goddess Ji Mane Tamari Care Krvi Che Ne Tamne Proper Goddess Tretment Aapvi Che 🤌🏻"
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
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center p-4">
      <FloatingHearts />
      
      {/* Chapter 1: The Greeting Envelope */}
      <div className={`chapter-transition absolute inset-0 flex items-center justify-center ${chapter === 1 ? 'opacity-100 scale-100 z-30' : 'opacity-0 scale-90 -z-10'}`}>
        <div 
          onClick={() => setChapter(2)}
          className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl border-4 border-dashed border-pink-300 text-center cursor-pointer hover:rotate-2 transition-transform group"
        >
          <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
          <h1 className="text-3xl font-romantic text-pink-600">Madam Ji Jara Yeh Open To Karo...</h1>
          <p className="text-gray-400 mt-2">Click to Open</p>
        </div>
      </div>

      {/* Chapter 2: The Reasons */}
      <div className={`chapter-transition absolute inset-0 flex flex-col items-center justify-center ${chapter === 2 ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 translate-y-10 -z-10'}`}>
        <div className="bg-white p-6 rounded shadow-2xl transform -rotate-2 max-w-sm w-full border-b-[40px] border-white">
          <div className="bg-pink-100 h-64 w-full flex items-center justify-center rounded overflow-hidden relative">
             <img src={`https://picsum.photos/400/400?random=${reasonIdx}`} alt="Memory" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-pink-500/10"></div>
          </div>
          <p className="mt-6 font-romantic text-2xl text-center text-pink-700 leading-relaxed">
            "{memories[reasonIdx]}"
          </p>
        </div>
        <button 
          onClick={nextReason}
          className="mt-10 bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
        >
          Aur Batao! <span className="text-xl">👉</span>
        </button>
        <div className="mt-4 text-pink-400 font-bold">
          {reasonIdx + 1} / {memories.length}
        </div>
      </div>

      {/* Chapter 3: The Proposal */}
      <div className={`chapter-transition absolute inset-0 flex items-center justify-center ${chapter === 3 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 -z-10'}`}>
        <Proposal />
      </div>

      {/* Footer Info (Hidden when proposal accepted) */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-pink-300 pointer-events-none opacity-40">
        Handcrafted for a Special Someone ✨
      </div>
    </div>
  );
};

export default App;
