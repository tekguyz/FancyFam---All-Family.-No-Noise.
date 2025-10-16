import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Parent 1 (Primary - Hot Pink) */}
            <g style={{ fill: '#F67280', stroke: '#F67280' }} strokeWidth="6" strokeLinecap="round">
                <circle cx="20" cy="20" r="10" style={{ stroke: 'none' }}/>
                <line x1="20" y1="30" x2="20" y2="70" />
                <line x1="5" y1="45" x2="35" y2="45" />
                <line x1="20" y1="70" x2="5" y2="95" />
                <line x1="20" y1="70" x2="35" y2="95" />
            </g>
            {/* Parent 2 (Purple) */}
            <g style={{ fill: '#C06C84', stroke: '#C06C84' }} strokeWidth="6" strokeLinecap="round">
                <circle cx="50" cy="25" r="10" style={{ stroke: 'none' }}/>
                <line x1="50" y1="35" x2="50" y2="75" />
                <line x1="35" y1="50" x2="65" y2="50" />
                <line x1="50" y1="75" x2="35" y2="95" />
                <line x1="50" y1="75" x2="65" y2="95" />
            </g>
            {/* Child 1 (Blue) */}
            <g style={{ fill: '#6C5B7B', stroke: '#6C5B7B' }} strokeWidth="5" strokeLinecap="round">
                <circle cx="75" cy="40" r="8" style={{ stroke: 'none' }}/>
                <line x1="75" y1="48" x2="75" y2="75" />
                <line x1="65" y1="60" x2="85" y2="60" />
                <line x1="75" y1="75" x2="65" y2="95" />
                <line x1="75" y1="75" x2="85" y2="95" />
            </g>
            {/* Child 2 (Dark Teal) */}
            <g style={{ fill: '#355C7D', stroke: '#355C7D', opacity: 0.9 }} strokeWidth="4" strokeLinecap="round">
                <circle cx="98" cy="50" r="6" style={{ stroke: 'none' }}/>
                <line x1="98" y1="56" x2="98" y2="80" />
                <line x1="90" y1="65" x2="106" y2="65" />
                <line x1="98" y1="80" x2="90" y2="95" />
                <line x1="98" y1="80" x2="106" y2="95" />
            </g>
        </svg>
    );
};

export default Logo;
