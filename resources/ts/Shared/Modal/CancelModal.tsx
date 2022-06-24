import React, { Children } from 'react'

function CancelModal({
  className,
  name,
  children,
}: {
  className?: string;
  name: string;
  children:any;
}) {
  return (
    <label htmlFor={name} className={className}>
      {children}
    </label>
  );
}

export default CancelModal