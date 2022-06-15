import React from 'react';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export interface IField {
  isRequired: boolean;
  type: 'input' | 'select';
  label: string;
  name: string;
  fieldProps: IInput | ISelect;
}
