
import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, id, ...props }) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="block px-4 pb-2 pt-6 w-full text-lg text-text bg-surface/50 rounded-lg border-2 border-text-secondary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-lg text-text-secondary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
