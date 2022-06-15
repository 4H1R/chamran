import React, { ButtonHTMLAttributes } from 'react';

function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

export default Button;
