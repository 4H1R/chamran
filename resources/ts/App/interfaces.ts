import React from 'react';
import { PageProps, Page } from '@inertiajs/inertia';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface ISelectOption {
  label: string;
  value: string | number;
}
export interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
}

export interface IField {
  isRequired: boolean;
  type: 'input' | 'select';
  label: string;
  name: string;
  fieldProps: IInput | ISelect;
}

export interface IMajor {
  id: number;
  name: string;
}

export interface IPageProps extends PageProps {}
