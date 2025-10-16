import React from 'react';
import { NavLink } from 'react-router-dom';
import { WallIcon, EventsIcon, MediaIcon, RootsIcon, ProfileIcon } from './NavIcons';

const navItems = [
  { to: '/wall', label: 'Wall', icon: WallIcon },
  { to: '/events', label: 'Events', icon: EventsIcon },
  { to: '/media', label: 'Media', icon: MediaIcon },
  { to: '/roots', label: 'Roots', icon: RootsIcon },
  { to: '/profile', label: 'Profile', icon: ProfileIcon },
];

const MobileNavBar: React.FC = () => {
  const linkClasses = "flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/80";
  const activeClasses = "text-primary";
  const inactiveClasses = "text-text-secondary hover:text-text";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-sm border-t border-text-secondary/20 z-50">
      <div className="flex justify-around">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavBar;