import React from 'react';

import { usePage } from '@/Hooks';
import Head from '@/Shared/Common/Head';
import Form from '@/Components/Status/Form';
import Result from '@/Components/Status/Result';
import FormAvatar from '@/Shared/Common/FormAvatar';
import Modal from '@/Components/Modal/Modal';

export type TStatus = 'Approved' | 'Rejected' | 'Pending';

type TPageProps = {
  status?: TStatus;
};

function Status() {
  const title = 'نتیجه پیش ثبت نام';
  const { status } = usePage<TPageProps>().props;

  return (
    <Modal name="status">
      <div className=" relative flex h-[25rem]   w-[23.5rem]  flex-col  rounded-2xl border-[3px] border-gray-300/50 bg-white md:w-[26rem]">
        <FormAvatar />
        <div className="mt-20">
          {!status && <h1 className="mb-9 text-center text-3xl font-bold">{title}</h1>}
          {status ? <Result status={status} /> : <Form />}
        </div>
      </div>
    </Modal>
  );
}

export default Status;
