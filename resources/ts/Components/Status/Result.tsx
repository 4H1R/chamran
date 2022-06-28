import React, { useContext } from 'react';

import { TStatus } from './Status';
import { asset } from '@/Utils';
import { statusContext } from '@/Layouts/AppLayout';

type ResultProps = {
  status: TStatus;
};

function Result({ status }: ResultProps) {
  const { setIsOpen } = useContext(statusContext);
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
    <div className="relative flex h-full w-full flex-col flex-wrap items-center gap-8 ">
      <h1 className="text-center text-2xl font-bold">{text}</h1>
      <img
        className="w-32 object-cover "
        src={asset(`img/${image}.png`)}
        alt={text}
      />
      <button
        onClick={() => setIsOpen(false)}
        type="button"
        className="btn btn-secondary"
      >
        بازگشت
      </button>
    </div>
  );
}

export default Result;
