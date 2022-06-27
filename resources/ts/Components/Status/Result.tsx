import React from 'react';

import { TStatus } from '@/Pages/Status';
import { asset } from '@/Utils';
import CancelModal from '@/Shared/Modal/CancelModal';

type ResultProps = {
  status: TStatus;
};

function Result({ status }: ResultProps) {
  const { text, image, color } = {
    Approved: {
      text: 'شما تایید شدید',
      image: 'approved',
      color: 'bg-success-200',
    },
    Rejected: {
      text: 'شما رد شدید',
      image: 'rejected',
      color: 'bg-danger-200',
    },
    Pending: {
      text: 'شما در انتظار تایید هستید',
      image: 'pending',
      color: 'bg-warning-200',
    },
  }[status!];

  return (
    <div className="relative flex h-full w-full flex-col flex-wrap items-center  gap-8 ">
      <h1 className="text-center text-2xl font-bold">{text}</h1>
      <img className="w-32 object-cover " src={asset(`img/${image}.png`)} alt={text} />
      <CancelModal name="status" className="button_info cursor-pointer px-9">
        بازگشت
      </CancelModal>
    </div>
  );
}

export default Result;
