import React, { ButtonHTMLAttributes } from 'react';

import LoadingSpinner from '@/Shared/Icons/LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({
  children,
  isLoading,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={`gap-2 ${className}`}>
      {children}
      {isLoading && <LoadingSpinner />}
    </button>
  );
}

export default Button;
