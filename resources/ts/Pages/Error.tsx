import React from 'react';
import { Link } from '@inertiajs/inertia-react';

import { asset } from '@/Utils';
import Head from '@/Shared/Common/Head';

type ErrorProps = {
  status: number;
};

function Error({ status }: ErrorProps) {
  const title = {
    503: 'سرویس در دسترس نیست',
    500: 'خطای سرور',
    404: 'صفحه پیدا نشد',
    403: 'خطای دسترسی',
  }[status];

  const desc = {
    503: 'با عرض پوزش، ما در حال انجام برخی تعمیرات هستیم. لطفا به زودی دوباره بررسی کنید.',
    500: 'مشکلی در سرورهای ما رخ داد. لطفا بعدا تلاش کنید.',
    404: 'لطفاً آدرس را در نوار آدرس بررسی کنید و دوباره امتحان کنید',
    403: 'شما دسترسی لازم برای مشاهده این صفحه را ندارید',
  }[status];

  return (
    <div className="container flex flex-grow flex-col items-center justify-center space-y-4 text-center">
      <Head title={title!} description={title + ' ' + desc} />
      <img
        src={asset('svg/error.svg')}
        className="md:w-1/2"
        alt={`${status} error`}
      />
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col space-y-4">
          <h1 className="h1">
            <span className="text-primary-600">{status}</span> {title}
          </h1>
          <p className="text-2xl text-secondary-600">{desc}</p>
        </div>
      </div>
      {status !== 503 && (
        <Link href="/" className="btn btn-sm btn-primary">
          بازگشت به صفحه اصلی
        </Link>
      )}
    </div>
  );
}

export default Error;
