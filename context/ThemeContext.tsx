import React, { createContext, useState, useEffect, useCallback } from 'react';
import { Theme } from '../types';

// Fix: Add types for the View Transitions API to prevent TypeScript errors.
interface ViewTransition {
  updateCallbackDone: Promise<void>;
  ready: Promise<void>;
  finished: Promise<void>;
  skipTransition: () => void;
}

declare global {
  interface Document {
    startViewTransition?(updateCallback: () => Promise<void> | void): ViewTransition;
  }
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, internalSetTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('fancyfam-theme');
    return (storedTheme as Theme) || Theme.TrueDark;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(Theme.Light, Theme.Dark, Theme.TrueDark);
    root.classList.add(theme);
    localStorage.setItem('fancyfam-theme', theme);
  }, [theme]);
  
  const toggleTheme = useCallback(() => {
    const nextTheme = {
      [Theme.TrueDark]: Theme.Dark,
      [Theme.Dark]: Theme.Light,
      [Theme.Light]: Theme.TrueDark,
    }[theme] || Theme.TrueDark;

    if (!document.startViewTransition) {
        internalSetTheme(nextTheme);
        return;
    }

    document.startViewTransition(() => {
        internalSetTheme(nextTheme);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};