import React, { useContext } from 'react';
import { Link } from '@inertiajs/inertia-react';

import { asset } from '@/Utils';
import { statusContext } from '@/Layouts/AppLayout';
import Head from '@/Shared/Common/Head';

function Home() {
  const { setIsOpen } = useContext(statusContext);

  return (
    <div className="container flex flex-col items-center justify-center space-y-6 lg:flex-row-reverse lg:space-y-0">
      <Head
        title="صفحه اصلی"
        description="هنرستانی با بیش از ۵ دهه اموزش و با بهره مندی از معلیمن با تجربه و محیط جذاب به شما در رشد تحصیلی کمک میکند."
      />
      <img
        className="animate-bounce-2 lg:max-w-2xl"
        src={asset('img/student.png')}
        alt="Student"
      />
      <div className="space-y-6 text-center lg:text-right">
        <h1 className="h1">هنرستان شهید چمران</h1>
        <p className="text-xl text-secondary-600">
          با بهره مندی از بین تمامی اطلاعات در مورد هنرستان شهید چمران به شما
          کمک میکند.
        </p>
        <div className="flex items-center justify-center space-x-4 space-x-reverse lg:justify-start">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="btn btn-outline-primary"
          >
            نتیجه ثبت نام
          </button>
          <Link href="/pre-register" className="btn btn-primary">
            پیش ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
