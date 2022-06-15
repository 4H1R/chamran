import React from 'react';
import { Head as InertiaHead } from '@inertiajs/inertia-react';

type HeadProps = {
  title: string;
  description: string;
  children?: any;
};

function Head({ title, description, children }: HeadProps) {
  const CustomHead = InertiaHead as any;

  return (
    <CustomHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </CustomHead>
  );
}

export default Head;
