import React from 'react';

import { ISelect } from '@/App/interfaces';

interface SelectProps extends ISelect {
  hasError?: boolean;
}

function Select({ hasError = false, name, options, ...props }: SelectProps) {
  return (
    <select {...props} id={name} className={`rounded ${hasError ? 'border-danger-600' : ''} `}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
