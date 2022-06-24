import React from "react";

export function OpenModal({
  name,
  className,
  children,
}: {
  name: string;
  className: string;
  children: any;
}) {
  return (
    <label htmlFor={name} className={className}>
      {children}
    </label>
  );
}

export default OpenModal