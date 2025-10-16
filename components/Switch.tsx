
import React from 'react';

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, onChange }) => {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary ${
        checked ? 'bg-primary' : 'bg-surface-tonal'
      }`}
    >
      <span
        className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
          checked ? 'translate-x-7' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default Switch;
