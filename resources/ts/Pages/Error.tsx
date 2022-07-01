import React from 'react';
import { Link } from '@inertiajs/inertia-react';

import { asset } from '@/Utils';
import Head from '@/Shared/Common/Head';

type ErrorProps = {
  status: 500 | 503 | 404 | 403 | 405;
};

function Error({ status }: ErrorProps) {
  const { title, desc } = {
    503: {
      title: 'سرویس در دسترس نیست',
      desc: 'با عرض پوزش، ما در حال انجام برخی تعمیرات هستیم. لطفا به زودی دوباره بررسی کنید.',
    },
    500: {
      title: 'خطای سرور',
      desc: 'مشکلی در سرورهای ما رخ داد. لطفا بعدا تلاش کنید.',
    },
    404: {
      title: 'صفحه پیدا نشد',
      desc: 'لطفاً آدرس را در نوار آدرس بررسی کنید و دوباره امتحان کنید',
    },
    403: {
      title: 'خطای دسترسی',
      desc: 'شما دسترسی لازم برای مشاهده این صفحه را ندارید',
    },
    405: {
      title: 'خطای روش درخواست',
      desc: 'روش درخواستی که انجام داده اید در سرور پشتیبانی نمی شود',
    },
  }[status];

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <Head title={title} description={title + ' ' + desc} />
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
          <p className="text-xl text-secondary-600">{desc}</p>
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

Error.layout = (page: React.ReactNode) => <>{page}</>;

export default Error;
