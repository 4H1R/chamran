import React from 'react';

import { IMajor } from '@/App/interfaces';
import { usePage } from '@/Hooks';
import Head from '@/Shared/Common/Head';
import Form from '@/Components/PreRegister/Form';

type TPageProps = {
  majors: IMajor[];
};

function PreRegister() {
  const title = 'پیش ثبت نام';
  const { majors } = usePage<TPageProps>().props;

  return (
    <div className="mb-8  space-y-6 px-4">
      <Head title={title} description={title} />
      <h1 className="h1 text-center">{title}</h1>
      <Form majors={majors} />
    </div>
  );
}

export default PreRegister;
