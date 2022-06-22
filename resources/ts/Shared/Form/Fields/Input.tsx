import React from 'react';

import { IInput } from '@/App/interfaces';

interface InputProps extends IInput {
  hasError?: boolean;
}

function Input({ type = 'text', hasError = false, name, className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      type={type}
      id={name}
      className={` input-info ${hasError ? 'border-danger-600' : ''} ${className}`}
    />
  );
}

export default Input;
