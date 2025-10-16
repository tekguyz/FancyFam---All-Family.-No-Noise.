import React, { useCallback } from 'react';
import { Link, To, useNavigate } from 'react-router-dom';

interface TransitionLinkProps {
  to: To;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ to, children, className }) => {
  const navigate = useNavigate();

  const handleTransition = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Fix: Removed @ts-ignore comments now that View Transition API types are globally available.
    if (!document.startViewTransition) {
      navigate(to);
      return;
    }

    document.startViewTransition(() => {
      navigate(to);
    });
  }, [navigate, to]);


  return (
    <Link to={to} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};

export default TransitionLink;
