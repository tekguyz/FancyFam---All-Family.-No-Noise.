import React from 'react';
import Button from './Button';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  action?: {
    text: string;
    onClick: () => void;
  };
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, message, action }) => {
  return (
    <div className="bg-surface rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[384px] animate-fade-in">
      <div className="w-20 h-20 bg-surface-tonal rounded-full flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-text mb-2">{title}</h2>
      <p className="text-text-secondary max-w-sm mb-8">{message}</p>
      {action && (
        <Button onClick={action.onClick} variant="filled">
          {action.text}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
