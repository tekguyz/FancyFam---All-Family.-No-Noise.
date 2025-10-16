import React from 'react';

const GooglePhotosIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.1838 2H14.8162C15.4216 2 15.961 2.40421 16.1462 2.96947L17 5.5H12V2Z" fill="#FBC02D"/>
        <path d="M21.0305 7.85379C21.5958 8.03895 22 8.57842 22 9.1838V14.8162C22 15.4216 21.5958 15.961 21.0305 16.1462L18.5 17V7L21.0305 7.85379Z" fill="#4CAF50"/>
        <path d="M14.8162 22H9.1838C8.57842 22 8.03895 21.5958 7.85379 21.0305L7 18.5H17L14.8162 22Z" fill="#2196F3"/>
        <path d="M2.96947 16.1462C2.40421 15.961 2 15.4216 2 14.8162V9.1838C2 8.57842 2.40421 8.03895 2.96947 7.85379L5.5 7V17L2.96947 16.1462Z" fill="#E53935"/>
        <circle cx="12" cy="12" r="4.5" fill="var(--color-surface)" fillOpacity="0.75" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.99 3.863 9.08 8.75 9.82V14.75H8.25V12h2.5V9.75c0-2.49 1.533-3.83 3.863-3.83 1.14 0 2.225.19 2.225.19v2.36h-1.27c-1.211 0-1.48.7-1.48 1.45V12h2.57l-.4 2.75h-2.17v7.16C18.137 21.08 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);


const MiniIntegrations: React.FC = () => (
  <div className="w-48 h-32 flex items-center justify-center p-2">
    <div className="flex items-center justify-between w-full">
        <FacebookIcon />
        <div className="flex-grow border-b-2 border-dashed border-text-secondary/40 mx-2"></div>
         <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-black font-bold text-sm">
            FF
         </div>
        <div className="flex-grow border-b-2 border-dashed border-text-secondary/40 mx-2"></div>
        <GooglePhotosIcon />
    </div>
  </div>
);

export default MiniIntegrations;