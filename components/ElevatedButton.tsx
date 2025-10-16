import React from 'react';

interface ElevatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const ElevatedButton: React.FC<ElevatedButtonProps> = ({ children, icon, className = '', ...props }) => {
  const baseClasses = 'w-full flex items-center justify-center gap-3 px-6 py-4 font-bold text-lg rounded-2xl bg-surface-tonal text-text shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1';
  
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default ElevatedButton;
