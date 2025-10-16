import React, { useState, useRef, useEffect } from 'react';
import { FamilyMember } from '../types';

interface FamilyMemberNodeProps {
  member: FamilyMember;
  hasChildren: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onAddChild: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

// Icons for the actions
const AddIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>;
const OptionsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>;
const ChevronIcon: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;


const FamilyMemberNode: React.FC<FamilyMemberNodeProps> = ({ member, hasChildren, isExpanded, onToggleExpand, onAddChild, onEdit, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // FIX: Corrected typo from `menu-ref` to `menuRef`.
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <div className="relative group bg-surface rounded-2xl p-4 min-w-[220px] text-center shadow-lg border-2 border-transparent hover:border-primary/50 transition-all duration-300">
      
      {/* Main Content */}
      <p className="font-bold text-xl text-text">{member.name}</p>
      {member.spouse && (
        <p className="font-semibold text-lg text-primary">&amp; {member.spouse}</p>
      )}

      {/* Action Buttons (visible on hover) */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
        <button onClick={onAddChild} aria-label={`Add child to ${member.name}`} className="p-1.5 rounded-full bg-surface-tonal hover:bg-primary hover:text-white text-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            <AddIcon />
        </button>
        <div className="relative" ref={menuRef}>
            <button onClick={() => setIsMenuOpen(prev => !prev)} aria-label={`More options for ${member.name}`} className="p-1.5 rounded-full bg-surface-tonal hover:bg-primary hover:text-white text-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                <OptionsIcon />
            </button>
            {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-background rounded-lg shadow-2xl z-10 py-1 animate-fade-in">
                    <button onClick={() => { onEdit(); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-text hover:bg-surface-tonal focus:outline-none focus:bg-surface-tonal">Edit</button>
                    <button onClick={() => { onDelete(); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-surface-tonal focus:outline-none focus:bg-surface-tonal">Delete</button>
                </div>
            )}
        </div>
      </div>
      
      {/* Expand/Collapse Toggle */}
      {hasChildren && (
        <button onClick={onToggleExpand} aria-label={isExpanded ? "Collapse branch" : "Expand branch"} className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 flex items-center justify-center bg-surface border-2 border-text-secondary/50 rounded-full text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            <ChevronIcon isExpanded={isExpanded} />
        </button>
      )}

    </div>
  );
};

export default FamilyMemberNode;