import React from 'react';

const MiniMemories: React.FC = () => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
    <div className="relative w-36 h-40 p-2 bg-surface shadow-lg transform rotate-[-3deg] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105 rounded-lg">
      <div className="w-full h-24 bg-primary/20 flex items-center justify-center rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </div>
      <p className="text-center text-sm mt-2 text-text-secondary font-semibold">Summer '23</p>
    </div>
  </div>
);

export default MiniMemories;