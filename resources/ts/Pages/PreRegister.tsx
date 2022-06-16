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
    <div className="space-y-6">
      <Head title={title} description={title} />
      <h1 className="text-center h1">{title}</h1>
      <p className="text-center text-secondary-600">
        بعد از چند روز میتوانید نتیجه پیش ثبت نام خود را در بخش نتیجه پیش ثبت نام سایت ببینید
      </p>
      <Form majors={majors} />
    </div>
  );
}

export default PreRegister;
