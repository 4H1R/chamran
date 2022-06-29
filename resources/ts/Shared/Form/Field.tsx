import React from 'react';

type FieldProps = {
  isRequired: boolean;
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ isRequired, name, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-base font-bold text-secondary-700" htmlFor={name}>
        {label}
        {isRequired && <sup className="font-medium text-danger-700">*</sup>}
      </label>
      {children}
      {error && <p className="text-sm text-danger-600">{error} </p>}
    </div>
  );
}

export default Field;
