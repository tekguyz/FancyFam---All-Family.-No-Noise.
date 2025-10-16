import React from 'react';

const MiniInvite: React.FC = () => (
  <div className="w-48 h-32 flex items-center justify-center">
    {/* The modal/share window */}
    <div className="w-44 bg-surface rounded-lg shadow-lg p-3 flex flex-col font-sans text-xs text-center">
      
      {/* Header */}
      <div className="mb-2">
        <p className="font-bold text-sm text-text">Share Invite Link</p>
        <p className="text-text-secondary mt-1">This link is private to your family.</p>
      </div>

      {/* The link box */}
      <div className="mt-auto bg-background rounded p-2 text-primary font-mono text-left truncate">
        fancy.fam/iNVi7e...
      </div>
    </div>
  </div>
);

export default MiniInvite;