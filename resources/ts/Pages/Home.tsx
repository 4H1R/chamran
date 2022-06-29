import React from 'react';

import { asset } from '@/Utils';
import Head from '@/Shared/Common/Head';
import Actions from '@/Components/Home/Actions';

function Home() {
  const description =
    'هنرستانی با بیش از ۵ دهه اموزش و با بهره مندی از معلیمن با تجربه و محیط جذاب به شما در رشد تحصیلی کمک میکند.';

  return (
    <div className="container flex flex-col items-center justify-center space-y-6 lg:flex-row-reverse lg:space-y-0">
      <Head title="صفحه اصلی" description={description} />
      <img
        className="animate-bounce-2 lg:max-w-2xl"
        src={asset('img/student.png')}
        alt="Student"
      />
      <div className="space-y-6 text-center lg:text-right">
        <h1 className="h1">هنرستان شهید چمران</h1>
        <p className="text-xl text-secondary-600">{description}</p>
        <Actions />
      </div>
    </div>
  );
}

export default Home;
