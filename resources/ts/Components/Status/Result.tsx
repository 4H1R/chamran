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
      text: 'پیش ثبت نام شما مورد تایید قرار گرفت',
      description:
        'جهت تکمیل ثبت نام حداکثر ظرف یک هفته به هنرستان فنی شهید چمران مراجعه کنید در صورت عدم مراجعه این هنرستان تعهدی به ثبت نام شما ندارد.',
      image: 'approved',
    },
    Rejected: {
      text: 'متاسفانه پیش ثبت نام شما مورد تایید قرار نگرفت',
      image: 'rejected',
    },
    Pending: {
      text: 'پیش ثبت نام شما در انتظار تایید هستید',
      image: 'pending',
    },
  }[status];
  return (
    <div className="relative flex h-full w-full flex-col flex-wrap items-center space-y-4 text-center">
      <h1 className="h1 text-2xl">
        جناب آقای <span className="text-primary-600">{fullName}</span> {text}
      </h1>
      {description && (
        <p className="text-lg text-secondary-600">{description}</p>
      )}
      <img
        className="w-32  object-cover"
        src={asset(`img/${image}.png`)}
        alt={text}
      />
      <button
        onClick={() => {
          setIsOpen(false);
          Inertia.visit('/');
        }}
        type="button"
        className=" btn-red mt-11 rounded-lg px-16 py-3  "
      >
        بازگشت
      </button>
    </div>
  );
}

export default Result;
