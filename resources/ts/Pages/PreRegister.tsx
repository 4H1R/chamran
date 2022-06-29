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
    <div className="container mt-28 py-3 space-y-6">
      <Head title={title} description={title} />
      <Form majors={majors} />
    </div>
  );
}

export default PreRegister;
