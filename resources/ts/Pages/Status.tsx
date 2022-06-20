import React from 'react';

import { usePage } from '@/Hooks';
import Head from '@/Shared/Common/Head';
import Form from '@/Components/Status/Form';
import Result from '@/Components/Status/Result';
import FormAvatar from '@/Shared/Common/FormAvatar';
import Modal from '@/Components/Modal';

export type TStatus = 'Approved' | 'Rejected' | 'Pending';

type TPageProps = {
  status?: TStatus;
};

function Status({className}:{className:string}) {
  const title = 'نتیجه پیش ثبت نام';
  const { status } = usePage<TPageProps>().props;

  return (
    <Modal title=" نتیجه ثبت نام" className={className}>
      <div className=" relative flex flex-col   border-gray-300/50  border-[3px]  bg-white w-[26rem] h-[25rem] rounded-2xl">
        <FormAvatar />
        <div className="mt-20">
          {!status && <h1 className="text-center h1 mb-9">{title}</h1>}
          {status ? <Result status={status} /> : <Form />}
        </div>
      </div>
    </Modal>
  );
}

export default Status;
