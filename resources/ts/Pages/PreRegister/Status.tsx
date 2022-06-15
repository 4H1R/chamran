import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import { Button, FieldList } from '@/Shared/Form';
import Head from '@/Shared/Common/Head';
import { IField } from '@/App/interfaces';

const formSchema: IField[] = [
  {
    isRequired: true,
    name: 'national_code',
    label: 'کد ملی',
    type: 'input',
    fieldProps: { type: 'text' },
  },
];

function Status() {
  const title = 'نتیجه پیش ثبت نام';
  const form = useForm({ national_code: '' });
  const { processing, post } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/pre-register/status');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Head title={title} description={title} />
      <h1 className="h1">{title}</h1>
      <FieldList form={form} formSchema={formSchema} />
      <Button
        isLoading={processing}
        disabled={processing}
        className="btn-sm btn-primary"
        type="submit"
      >
        چک کردن وضعیت
      </Button>
    </form>
  );
}

export default Status;
