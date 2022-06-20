import React from 'react';

type FieldProps = {
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ name, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col space-y-2 ">
      <label className="text-base text-secondary-700 font-bold" htmlFor={name}>
        {label}
        <sup className="font-medium text-danger-700">*</sup>
      </label>
      {children}
      {error && <p className="text-sm text-danger-600">{error} </p>}
    </div>
  );
}

export default Field;
