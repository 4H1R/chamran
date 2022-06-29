import React, { useContext } from 'react';
import { useForm } from '@inertiajs/inertia-react';

import { IField } from '@/App/interfaces';
import { Button, FieldList } from '@/Shared/Form';
import { statusContext } from '@/Layouts/AppLayout';

const formSchema: IField[] = [
  {
    isRequired: true,
    name: 'national_code',
    label: 'کد ملی',
    type: 'input',
    fieldProps: { type: 'text', className: 'w-full' },
  },
];

function Form() {
  const { setIsOpen } = useContext(statusContext);
  const form = useForm({ national_code: '' });
  const { processing, post } = form;
  const title = 'نتیجه پیش ثبت نام';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/pre-register/status');
  };

  return (
    <div className="space-y-6">
      <h1 className="h1 text-center text-3xl">{title}</h1>
      <form
        className="container flex flex-col items-center justify-center gap-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <FieldList
          containerProps={{ replaceClassName: true, className: 'w-full' }}
          form={form}
          formSchema={formSchema}
        />
        <div className="flex space-x-4 space-x-reverse">
          <Button
            isLoading={processing}
            disabled={processing}
            className="btn-sm btn-primary"
            type="submit"
          >
            برسی وضعیت
          </Button>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="btn-sm btn-red"
          >
            بازگشت
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
