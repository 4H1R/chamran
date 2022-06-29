import React from 'react';
import { motion } from 'framer-motion';

import { asset } from '@/Utils';
import Head from '@/Shared/Common/Head';
import Actions from '@/Components/Home/Actions';
import Intro from '@/Components/Home/Intro';

function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 lg:flex-row-reverse lg:space-y-0">
      <Head
        title="صفحه اصلی"
        description="هنرستانی با بیش از ۵ دهه آموزش و با بهره مندی از اساتید با تجربه و محیط جذاب به شما در رشد تحصیلی کمک میکند."
      />
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
        className="space-y-4 text-center lg:text-right"
      >
        <Intro />
        <Actions />
      </motion.div>
    </div>
  );
}

export default Home;
