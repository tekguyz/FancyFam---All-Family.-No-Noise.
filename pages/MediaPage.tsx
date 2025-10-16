import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center justify-center h-96 bg-surface rounded-2xl">
      <h1 className="text-4xl font-bold text-text-secondary">{title}</h1>
    </div>
  );

const MediaPage: React.FC = () => {
    return <PlaceholderPage title="Media" />;
};

export default MediaPage;
