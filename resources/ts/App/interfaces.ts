import React from 'react';
import { PageProps, Page } from '@inertiajs/inertia';

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

export interface IMajor {
  id: number;
  name: string;
}

export interface IPageProps extends PageProps {}
