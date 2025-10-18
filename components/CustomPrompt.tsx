import React, { useState, useEffect } from 'react';
import Dialog from './Dialog';
import TextField from './TextField';
import Button from './Button';

interface FieldConfig {
  id: string;
  label: string;
  initialValue?: string;
  required?: boolean;
}

interface CustomPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, string>) => void;
  title: string;
  fields: FieldConfig[];
  submitText?: string;
}

const CustomPrompt: React.FC<CustomPromptProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  fields,
  submitText = 'OK',
}) => {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      // Initialize form values when the prompt opens
      const initialValues = fields.reduce((acc, field) => {
        acc[field.id] = field.initialValue || '';
        return acc;
      }, {} as Record<string, string>);
      setValues(initialValues);
    }
  }, [isOpen, fields]);

  const handleChange = (id: string, value: string) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
    onClose();
  };

  const isSubmitDisabled = fields.some(field => field.required && !values[field.id]?.trim());

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {fields.map((field, index) => (
            <TextField
              key={field.id}
              id={field.id}
              label={field.label}
              value={values[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
              required={field.required}
              autoFocus={index === 0} // Autofocus on the first field
            />
          ))}
        </div>
        <div className="flex justify-end items-center gap-4 mt-8">
          <Button type="button" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="filled" disabled={isSubmitDisabled}>
            {submitText}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default CustomPrompt;
