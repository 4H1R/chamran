import React from 'react';

import { usePage } from '@/Hooks';
import Form from '@/Components/Status/Form';
import Result from '@/Components/Status/Result';
import Avatar from '@/Components/Status/Avatar';

export type TStatus = 'Approved' | 'Rejected' | 'Pending';

type TData = {
  status: TStatus;
  full_name: string;
};

type TPageProps = {
  flash: {
    data: null | TData;
  };
};

function Status() {
  const {
    flash: { data },
  } = usePage<TPageProps>().props;

  return (
    <div className="relative flex flex-col">
      <Avatar />
      <div className="mt-12 mb-5">
        {data ? (
          <Result status={data.status} fullName={data.full_name} />
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
}

export default Status;
