import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

function Input({ type = 'text', hasError = false, name, ...props }: Props) {
  return (
    <input
      {...props}
      type={type}
      id={name}
      className={`rounded ${hasError ? 'border-danger-600' : ''} `}
    />
  );
}

export default Input;
