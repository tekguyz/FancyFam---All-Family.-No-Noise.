import React from 'react';

const MiniEvents: React.FC = () => (
  <div className="w-48 bg-surface rounded-lg shadow-lg p-4 font-sans">
    <p className="font-bold text-center text-primary text-md">Party Prep</p>
    <div className="space-y-2 mt-3 text-left">
      <div className="flex items-center text-text">
        <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="line-through text-text-secondary">Send Invites</span>
      </div>
      <div className="flex items-center text-text">
        <div className="w-5 h-5 rounded-md border-2 border-text-secondary mr-2"></div>
        <span>Order Cake</span>
      </div>
      <div className="flex items-center text-text">
        <div className="w-5 h-5 rounded-md border-2 border-text-secondary mr-2"></div>
        <span>Decorate</span>
      </div>
    </div>
  </div>
);

export default MiniEvents;