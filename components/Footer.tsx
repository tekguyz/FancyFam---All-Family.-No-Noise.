
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-6 mt-16">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} FancyFam.com</p>
        <p>info@fancyfam.com</p>
      </div>
    </footer>
  );
};

export default Footer;
