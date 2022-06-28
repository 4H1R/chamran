import React, { useContext } from 'react';
import { Inertia } from '@inertiajs/inertia';

import { TStatus } from './Status';
import { asset } from '@/Utils';
import { statusContext } from '@/Layouts/AppLayout';

type ResultProps = {
  status: TStatus;
  fullName: string;
};

function Result({ status, fullName }: ResultProps) {
  const { setIsOpen } = useContext(statusContext);
  const { text, image, description } = {
    Approved: {
      text: 'شما تایید شدید',
      description:
        'پیش ثبت نام شما مورد تأیید قرار گرفت جهت تکمیل ثبت نام حداکثر ظرف یک هفته به هنرستان فنی شهید چمران مراجعه کنید در صورت عدم مراجعه این هنرستان نعهدی به ثبت نام شما ندارد.',
      image: 'approved',
    },
    Rejected: {
      text: 'شما رد شدید',
      image: 'rejected',
    },
    Pending: {
      text: 'شما در انتظار تایید هستید',
      image: 'pending',
    },
  }[status];
  const title = `جناب آقای ${fullName} ${text}`;

  return (
    <div className="relative flex flex-col flex-wrap items-center w-full h-full space-y-4 text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && (
        <p className="text-lg text-secondary-600">{description}</p>
      )}
      <img
        className="object-cover w-32"
        src={asset(`img/${image}.png`)}
        alt={text}
      />
      <button
        onClick={() => {
          setIsOpen(false);
          Inertia.visit('/');
        }}
        type="button"
        className="btn btn-secondary"
      >
        بازگشت
      </button>
    </div>
  );
}

export default Result;
