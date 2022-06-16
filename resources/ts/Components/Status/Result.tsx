import React from 'react';

import { TStatus } from '@/Pages/Status';
import { asset } from '@/Utils';

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
    <div
      className={`flex items-center flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 space-x-reverse justify-center p-4 ${color}`}
    >
      <h1 className="h2">{text}</h1>
      <img src={asset(`img/${image}.png`)} alt={text} />
    </div>
  );
}

export default Result;
