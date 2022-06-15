import React, { Fragment, useMemo } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';

import { IField } from '@/App/interfaces';
import { Button, FieldList } from '@/Shared/Form';
import Head from '@/Shared/Common/Head';

export type TForm = {
  title: string;
  formSchema: IField[];
};

function PreRegister() {
  const title = 'پیش ثبت نام';
  const { majors } = usePage().props;

  const formSchema: TForm[] = useMemo(
    () => [
      {
        title: 'اطلاعات شخصی',
        formSchema: [
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
          {
            isRequired: true,
            type: 'select',
            name: 'major_id',
            label: 'رشته مورد نظر',
            fieldProps: { options: majors as any },
          },
        ],
      },
      {
        title: 'نمرات',
        formSchema: [
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
            name: 'seventh_discipline',
            label: 'انظباط هفتم',
            fieldProps: { type: 'number' },
          },
          {
            isRequired: true,
            type: 'input',
            name: 'eighth_discipline',
            label: 'انظباط هشتم',
            fieldProps: { type: 'number' },
          },
          {
            isRequired: true,
            type: 'input',
            name: 'ninth_discipline',
            label: 'علوم نهم',
            fieldProps: { type: 'number' },
          },
        ],
      },
    ],
    [majors],
  );

  const initialValues = formSchema.reduce((acc, forms) => {
    return {
      ...acc,
      ...forms.formSchema.reduce((acc, field) => {
        return { ...acc, [field.name]: '' };
      }, {}),
    };
  }, {} as any);

  const form = useForm(initialValues);
  const { processing, post } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/pre-register');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Head title={title} description={title} />
      {formSchema.map(({ title, formSchema }) => (
        <Fragment key={title}>
          <h1 className="h1">{title}</h1>
          <FieldList formSchema={formSchema} form={form} />
        </Fragment>
      ))}
      <Button
        isLoading={processing}
        disabled={processing}
        type="submit"
        className="btn-sm btn-primary"
      >
        ثبت اطلاعات
      </Button>
    </form>
  );
}

export default PreRegister;
