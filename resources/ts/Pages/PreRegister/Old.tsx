import React from 'react';

import { asset } from '@/Utils';
import Card from '@/Components/PreRegister/Card';
import Head from '@/Shared/Common/Head';

function Index() {
  const title = 'پیش ثبت نام';
  const cards = [
    {
      href: '/pre-register/new',
      actionTitle: 'پیش ثبت نام',
      src: asset('svg/preRegister.svg'),
    },
    {
      href: '/pre-register/status',
      actionTitle: 'نتیجه پیش ثبت نام',
      src: asset('svg/checkStatus.svg'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Head title={title} description={title} />
      {cards.map((card) => (
        <Card key={card.href} {...card} />
      ))}
    </div>
  );
}

export default Index;
