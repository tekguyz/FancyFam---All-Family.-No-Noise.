import React, { useEffect, useRef, useCallback } from 'react';

export const useFocusTrap = <T extends HTMLElement>(isOpen: boolean) => {
  const containerRef = useRef<T>(null);

  const handleFocus = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // If Shift+Tab is pressed on the first element, move focus to the last
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      // If Tab is pressed on the last element, move focus to the first
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleFocus);
      // Focus the first element in the trap when it opens
      const firstFocusable = containerRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else {
      document.removeEventListener('keydown', handleFocus);
    }

    return () => {
      document.removeEventListener('keydown', handleFocus);
    };
  }, [isOpen, handleFocus]);

  return containerRef;
};