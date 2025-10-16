import React from 'react';

const MiniSecurity: React.FC = () => (
  <div className="relative w-28 h-28">
    <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
    <div className="absolute inset-2 rounded-full bg-primary/30 animate-pulse [animation-delay:200ms]"></div>
    <div className="absolute inset-4 rounded-full bg-surface flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083A12.02 12.02 0 0017.618 7.984z" /></svg>
    </div>
  </div>
);

export default MiniSecurity;