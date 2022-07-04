import React from 'react';
import { PageProps } from '@inertiajs/inertia';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface ISelectOption {
  label: string;
  value: string | number;
}

export interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
}

interface IField {
  isRequired: boolean;
  label: string;
  name: string;
  type: string;
  fieldProps: unknown;
}

export interface ISelectField extends IField {
  type: 'select';
  fieldProps: ISelect;
}

export interface IInputField extends IField {
  type: 'input';
  fieldProps: IInput;
}

export interface IMajor {
  id: number;
  name: string;
}

export interface IPageProps extends PageProps {}
