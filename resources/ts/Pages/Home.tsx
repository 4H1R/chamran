import React from 'react';
import { motion } from 'framer-motion';

import { asset } from '@/Utils';
import Head from '@/Shared/Common/Head';
import Actions from '@/Components/Home/Actions';

function Home() {
  const description =
    'هنرستانی با بیش از ۵ دهه اموزش و با بهره مندی از معلیمن با تجربه و محیط جذاب به شما در رشد تحصیلی کمک میکند.';

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${asset('img/bg_img.jpg')})`,
      }}
    >
      <div className="container flex h-full h-full flex-col items-center justify space-y-6 lg:flex-row-reverse lg:space-y-0">
        <Head title="صفحه اصلی" description={description} />
        <motion.img
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="animate-bounce-2 h-80 w-full object-cover sm:w-9/12 md:w-7/12 lg:h-auto lg:w-[55%]"
          src={asset('img/student.png')}
          alt="Student"
        />
        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center lg:text-right"
        >
          <h1 className="h1">هنرستان شهید چمران</h1>
          <p className="text-xl leading-loose text-secondary-600 ">
            {description}
          </p>
          <Actions />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
