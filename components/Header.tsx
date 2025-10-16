import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../types';
import TransitionLink from './TransitionLink';
import HelpCenterModal from './HelpCenterModal';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const AbstractThemeIcon: React.FC<{ theme: Theme }> = ({ theme }) => {
  const rotationClass = {
    [Theme.TrueDark]: 'rotate-0',
    [Theme.Dark]: 'rotate-[180deg]',
    [Theme.Light]: 'rotate-90',
  }[theme];

  return (
    <div className={`transition-transform duration-700 ease-in-out ${rotationClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 0 0 20V2z" fill="currentColor" />
      </svg>
    </div>
  );
};

const SettingsIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HelpIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>;


const Header: React.FC<{ showAuthControls?: boolean }> = ({ showAuthControls = false }) => {
  const { theme, toggleTheme } = useTheme();
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetUrl = showAuthControls ? '/wall' : '/landing';
    if (!document.startViewTransition) {
      navigate(targetUrl);
      return;
    }
    document.startViewTransition(() => {
      navigate(targetUrl);
    });
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href={showAuthControls ? "/wall" : "/landing"} onClick={handleLogoClick} className="flex items-center gap-2 text-2xl font-bold text-text">
              <Logo className="w-8 h-auto" />
              <span>FancyFam</span>
          </a>
          
          <div className="flex items-center gap-4">
            {showAuthControls ? (
                <>
                    <TransitionLink
                        to="/settings"
                        className="p-2 rounded-full text-text-secondary hover:text-text hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                        aria-label="Open settings"
                    >
                        <SettingsIcon />
                    </TransitionLink>
                    <button
                        onClick={() => setIsHelpModalOpen(true)}
                        className="p-2 rounded-full text-text-secondary hover:text-text hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                        aria-label="Open help center"
                    >
                        <HelpIcon />
                    </button>
                </>
            ) : (
              null
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-secondary hover:text-text hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle theme"
            >
              <AbstractThemeIcon theme={theme} />
            </button>
          </div>
        </div>
      </header>
      {showAuthControls && <HelpCenterModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />}
    </>
  );
};

export default Header;