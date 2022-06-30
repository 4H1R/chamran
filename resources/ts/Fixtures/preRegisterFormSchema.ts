import { ISelectOption } from './../App/interfaces';
import { IField } from '@/App/interfaces';

export const personal: IField[] = [
  {
    isRequired: true,
    type: 'input',
    name: 'first_name',
    label: 'نام',
    fieldProps: { type: 'text' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'last_name',
    label: 'نام خانوادگی',
    fieldProps: { type: 'text' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'father_name',
    label: 'نام پدر',
    fieldProps: { type: 'text' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'national_code',
    label: 'کد ملی',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'mobile',
    label: 'تلفن همراه',
    fieldProps: { type: 'number', placeholder: '09.........' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'phone',
    label: 'تلفن ثابت',
    fieldProps: { type: 'number', placeholder: '031........' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'address',
    label: 'ادرس',
    fieldProps: { type: 'text' },
  },
];

const scoreOptions: ISelectOption[] = [
  { label: 'عالی', value: 4 },
  { label: 'خیلی خوب', value: 3 },
  { label: 'خوب', value: 2 },
  { label: 'نیاز به تلاش', value: 1 },
];

export const educational: IField[] = [
  {
    isRequired: true,
    type: 'input',
    name: 'seventh_math',
    label: 'ریاضی هفتم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'eighth_math',
    label: 'ریاضی هشتم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'ninth_math',
    label: 'ریاضی نهم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'seventh_science',
    label: 'علوم هفتم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'eighth_science',
    label: 'علوم هشتم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'ninth_science',
    label: 'علوم نهم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'seventh_grade',
    label: 'معدل هفتم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'eighth_grade',
    label: 'معدل هشتم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'ninth_grade',
    label: 'معدل نهم',
    fieldProps: { type: 'number' },
  },
  {
    isRequired: true,
    type: 'select',
    name: 'seventh_discipline',
    label: 'انضباط هفتم',
    fieldProps: { options: scoreOptions },
  },
  {
    isRequired: true,
    type: 'select',
    name: 'eighth_discipline',
    label: 'انضباط هشتم',
    fieldProps: { options: scoreOptions },
  },
  {
    isRequired: true,
    type: 'select',
    name: 'ninth_discipline',
    label: 'انضباط نهم',
    fieldProps: { options: scoreOptions },
  },
];
