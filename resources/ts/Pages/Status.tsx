import React from 'react';

import { usePage } from '@/Hooks';
import Head from '@/Shared/Common/Head';
import Form from '@/Components/Status/Form';
import Result from '@/Components/Status/Result';

export type TStatus = 'Approved' | 'Rejected' | 'Pending';

type TPageProps = {
  status?: TStatus;
};

function Status() {
  const title = 'نتیجه پیش ثبت نام';
  const { status } = usePage<TPageProps>().props;

  return (
    <div className="space-y-4">
      <Head title={title} description={title} />
      {!status && <h1 className="text-center h1">{title}</h1>}
      {status ? <Result status={status} /> : <Form />}
    </div>
  );
}

export default Status;
