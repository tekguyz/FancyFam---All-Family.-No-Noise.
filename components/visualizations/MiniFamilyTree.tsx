import React from 'react';

const MiniFamilyTree: React.FC = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" className="text-text-secondary/70">
    {/* Parent Node */}
    <circle cx="60" cy="15" r="10" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2" />
    
    {/* Lines to Children */}
    <line x1="60" y1="25" x2="60" y2="45" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="45" x2="90" y2="45" stroke="currentColor" strokeWidth="2" />

    {/* Children Nodes */}
    <line x1="30" y1="45" x2="30" y2="65" stroke="currentColor" strokeWidth="2" />
    <circle cx="30" cy="75" r="10" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2" />
    
    <line x1="60" y1="45" x2="60" y2="65" stroke="currentColor" strokeWidth="2" />
    <circle cx="60" cy="75" r="10" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2" />

    <line x1="90" y1="45" x2="90" y2="65" stroke="currentColor" strokeWidth="2" />
    <circle cx="90" cy="75" r="10" fill="var(--color-surface)" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default MiniFamilyTree;