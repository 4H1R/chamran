import React from 'react';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface IField {
  isRequired: boolean;
  type: 'input';
  label: string;
  name: string;
  fieldProps: IInput;
}
