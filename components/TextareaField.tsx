import React from 'react';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, id, ...props }) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        className="block px-4 pb-2 pt-6 w-full text-lg text-text bg-surface-tonal rounded-lg border-2 border-text-secondary/50 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer min-h-[120px]"
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

export default TextareaField;