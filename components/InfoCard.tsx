import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-text mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;