import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import { IField } from '@/App/interfaces';
import { Button, FieldList } from '@/Shared/Form';

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
  const form = useForm({ national_code: '' });
  const { processing, post } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/pre-register/status');
  };

  return (
    <form
      className="flex  flex-col items-center justify-center gap-6 space-y-6"
      onSubmit={handleSubmit}
    >
      <FieldList
        containerProps={{ className: 'w-[85%] max-w-xl', replaceClassName: true }}
        form={form}
        formSchema={formSchema}
      />
      <Button
        isLoading={processing}
        disabled={processing}
        className="button_info px-20"
        type="submit"
      >
        برسی وضعیت
      </Button>
    </form>
  );
}

export default Form;
