import React from 'react';

const MiniAI: React.FC = () => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
    <div className="relative w-48 bg-surface rounded-lg shadow-lg p-4 font-sans transform transition-transform duration-300 group-hover:scale-105">
      <div className="flex items-center text-primary mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <p className="font-bold text-md">AI Summary</p>
      </div>
      <div className="space-y-1.5 text-left">
        <div className="w-full h-2 rounded-full bg-text-secondary/20"></div>
        <div className="w-5/6 h-2 rounded-full bg-text-secondary/20"></div>
        <div className="w-full h-2 rounded-full bg-text-secondary/20"></div>
          <div className="w-3/4 h-2 rounded-full bg-text-secondary/20"></div>
      </div>
    </div>
  </div>
);

export default MiniAI;
