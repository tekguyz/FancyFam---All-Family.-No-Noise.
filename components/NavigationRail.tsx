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

const NavigationRail: React.FC = () => {
  const linkClasses = "flex flex-col items-center justify-center p-3 rounded-xl transition-colors duration-200 w-full";
  const activeClasses = "bg-primary/20 text-primary";
  const inactiveClasses = "text-text-secondary hover:bg-surface hover:text-text";

  return (
    <nav className="fixed top-24 w-[68px]">
      <div className="bg-surface rounded-2xl p-2 flex flex-col items-center space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            title={label}
            className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            <Icon className="h-7 w-7" />
            <span className="text-xs mt-1 sr-only sm:not-sr-only">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavigationRail;
