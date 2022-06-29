import React from 'react';
import { Head as InertiaHead } from '@inertiajs/inertia-react';
import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title: string;
  description: string;
  children?: any;
};

function Head({ title, description, children }: HeadProps) {
  const CustomInertiaHead = InertiaHead as any;

  return (
    <>
      <CustomInertiaHead>
        <title>{title}</title>
      </CustomInertiaHead>
      <Helmet>
        <meta name="description" content={description} />
        {children}
      </Helmet>
    </>
  );
}

export default Head;
