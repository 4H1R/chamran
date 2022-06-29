import React from 'react';

import { ISelect } from '@/App/interfaces';

interface SelectProps extends ISelect {
  hasError?: boolean;
}

function Select({
  hasError = false,
  className = '',
  name,
  options,
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      id={name}
      className={`${hasError ? 'border-danger-600' : ''} ${className}`}
    >
      <option value="none">انتخاب کنید</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
