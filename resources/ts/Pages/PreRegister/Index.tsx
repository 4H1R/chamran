import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import { IField } from '@/App/interfaces';
import { Button, Form } from '@/Shared/Form';
import Head from '@/Shared/Common/Head';

const formSchema: IField[] = [
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
    fieldProps: { type: 'text' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'mobile',
    label: 'تلفن ثابت',
    fieldProps: { type: 'text' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'phone',
    label: 'تلفن همراه',
    fieldProps: { type: 'text' },
  },
  {
    isRequired: true,
    type: 'input',
    name: 'address',
    label: 'ادرس',
    fieldProps: { type: 'text' },
  },
];

function PreRegister() {
  const title = 'پیش ثبت نام';
  const initialValues = formSchema.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as any);
  const form = useForm(initialValues);

  const handleSubmit = () => {
    form.post('/pre-register');
  };

  return (
    <div className="py-4 space-y-4">
      <Head title={title} description={title} />
      <h1 className="h1">اطلاعات شخصی</h1>
      <Form formSchema={formSchema} form={form} onSubmit={handleSubmit} />
      <h1 className="h1">نمرات</h1>
      <Button type="submit" className="btn-sm btn-primary" onClick={handleSubmit}>
        ثبت اطلاعات
      </Button>
    </div>
  );
}

export default PreRegister;
