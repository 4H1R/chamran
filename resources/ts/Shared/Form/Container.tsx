import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  replaceClassName?: boolean;
}

function Container({ children, className = '', replaceClassName, ...props }: ContainerProps) {
  const baseClassName = 'grid  grid-cols-1 gap-6 md:grid-cols-2 ';
  return (
    <div {...props} className={replaceClassName ? className : baseClassName + className}>
      {children}
    </div>
  );
}

export default Container;
