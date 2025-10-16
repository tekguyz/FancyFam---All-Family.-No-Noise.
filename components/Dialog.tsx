import React, { useEffect, useId } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  const containerRef = useFocusTrap<HTMLDivElement>(isOpen);
  const titleId = useId();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby={titleId}
    >
      <div
        ref={containerRef}
        className="bg-surface rounded-3xl w-full max-w-md shadow-2xl flex flex-col max-h-[80vh] animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b border-text-secondary/20 flex justify-between items-center">
          <h2 id={titleId} className="text-2xl font-bold text-primary">{title}</h2>
          <button onClick={onClose} aria-label="Close dialog" className="text-text-secondary hover:text-text p-1 rounded-full hover:bg-surface-tonal focus:outline-none focus:ring-2 focus:ring-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <div className="flex-grow p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;