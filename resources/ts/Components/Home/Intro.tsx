import React from 'react';

import { IMajor } from '@/App/interfaces';
import { usePage } from '@/Hooks';

type TProps = {
  majors: IMajor[];
};

function Intro() {
  const { majors } = usePage<TProps>().props;

  return (
    <>
      <h1 className="h1">هنرستان شهید چمران</h1>
      <p className="text-lg leading-loose text-secondary-600">
        هنرستان فنی شهید دکتر مصطفی چمران ناحیه ۶ اصفهان با بیش از ۴۰ سال سابقه
        درخشان و توفیق چشمگیر در زمینه تربیت هنرجویانی خلاق و کارآفرین ، با
        بهرمندی از اساتید مجرب ، کارآزموده و مجهزترین کارگاه دروس فنی ، در رشته
        های{' '}
        {majors.map(({ name, id }, i) => (
          <span key={id} className="text-primary-600">
            {name} {i !== majors.length - 1 && '، '}
          </span>
        ))}{' '}
        برای سال تحصیلی ۱۴۰۲-۱۴۰۱ در بین دانش آموزان مستعد ثبت نام می کند
      </p>
    </>
  );
}

export default Intro;
