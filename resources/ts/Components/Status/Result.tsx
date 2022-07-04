import React, { useContext } from 'react';

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
      text: 'پیش ثبت نام شما در انتظار تایید است',
      image: 'pending',
    },
    Reserved: {
      text: 'پیش ثبت نام شما در لیست رزرو قرار گرفته است',
      description:
        'اعلام نتیجه ثبت نام دانش آموزان رزرو در تاریخ ۱۵ و ۳۰ هر ماه مشخص می گردد',
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
        onClick={() => setIsOpen(false)}
        type="button"
        className="btn-sm btn-secondary"
      >
        بازگشت
      </button>
    </div>
  );
}

export default Result;
