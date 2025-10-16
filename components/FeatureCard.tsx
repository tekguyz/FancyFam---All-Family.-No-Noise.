import React from 'react';
import { To } from 'react-router-dom';
import TransitionLink from './TransitionLink';

interface FeatureCardProps {
  headline: string;
  description: string;
  icon: React.ReactNode;
  visualization: React.ReactNode;
  to?: To;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ headline, description, icon, visualization, to }) => {
  const cardContent = (
    <div className="bg-surface rounded-2xl p-6 shadow-lg h-full flex flex-col text-center hover:shadow-primary/30 transition-shadow duration-300">
      <div className="text-primary mx-auto mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{headline}</h3>
      <div className="flex-grow flex items-center justify-center my-3 min-h-[120px]">
        {visualization}
      </div>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );

  if (to) {
    return (
      <TransitionLink to={to} className="block transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        {cardContent}
      </TransitionLink>
    );
  }

  return (
    <div className="transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        {cardContent}
    </div>
  );
};

export default FeatureCard;