import React from 'react';
import ErrorMessage from './ErrorMessage';

type FieldProps = {
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ name, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="space-x-3 space-x-reverse text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
        <sup className="font-medium text-danger-700">*</sup>
      </label>
      {children}
      {error && <ErrorMessage error={error} />}
    </div>
  );
}

export default Field;
