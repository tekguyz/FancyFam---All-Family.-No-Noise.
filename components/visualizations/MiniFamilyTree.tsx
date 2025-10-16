import React from 'react';

const Node: React.FC<{ cx: number; cy: number; r: number; isHighlighted?: boolean }> = ({ cx, cy, r, isHighlighted }) => (
    <circle 
        cx={cx} 
        cy={cy} 
        r={r} 
        className={isHighlighted ? 'fill-primary/80 stroke-primary' : 'fill-surface stroke-current'}
        strokeWidth="2" 
    />
);

const MiniFamilyTree: React.FC = () => (
  <svg width="150" height="120" viewBox="0 0 150 120" className="text-text-secondary/80">
    <g className="animate-fade-in">
        {/* Top Level */}
        <Node cx="75" cy="12" r="10" />

        {/* Mid Level */}
        <line x1="75" y1="22" x2="75" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="1.5" />

        <line x1="40" y1="40" x2="40" y2="58" stroke="currentColor" strokeWidth="1.5" />
        <Node cx="40" cy="68" r="10" />

        <line x1="110" y1="40" x2="110" y2="58" stroke="currentColor" strokeWidth="1.5" />
        <Node cx="110" cy="68" r="10" />

        {/* Bottom Level (from left node) */}
        <line x1="40" y1="78" x2="40" y2="90" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="90" x2="60" y2="90" stroke="currentColor" strokeWidth="1.5" />
        
        <line x1="20" y1="90" x2="20" y2="100" stroke="currentColor" strokeWidth="1.5" />
        <Node cx="20" cy="110" r="8" />

        <line x1="60" y1="90" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" />
        <Node cx="60" cy="110" r="8" isHighlighted={true} />
    </g>
  </svg>
);

export default MiniFamilyTree;