
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'filled', className = '', ...props }) => {
  const baseClasses = 'px-8 py-3 font-bold text-lg rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50';
  
  const variantClasses = variant === 'filled'
    ? 'bg-primary text-black hover:bg-opacity-90 shadow-lg hover:shadow-primary/40'
    : 'border-2 border-primary text-primary hover:bg-primary hover:text-black';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
