import React from 'react';

type InputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function InputContainer({ children, className = '' }: InputContainerProps) {
  return <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${className}`}>{children}</div>;
}

export default InputContainer;
