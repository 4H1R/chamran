import React from 'react';

import { usePage } from '@/Hooks';
import Form from '@/Components/Status/Form';
import Result from '@/Components/Status/Result';
import FormAvatar from '@/Shared/Common/FormAvatar';

export type TStatus = 'Approved' | 'Rejected' | 'Pending';

type TPageProps = {
  status?: TStatus;
  full_name?: string;
};

function Status() {
  const { status, full_name } = usePage<TPageProps>().props;

  return (
    <div className="relative flex flex-col">
      <FormAvatar />
      <div className="mt-20">
        {status ? <Result status={status} fullName={full_name!} /> : <Form />}
      </div>
    </div>
  );
}

export default Status;
