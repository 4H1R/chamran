import React from 'react';
import { Link as InertiaLink } from '@inertiajs/inertia-react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

function Link({ children, href, isActive }: LinkProps) {
  return (
    <li>
      <InertiaLink
        href={href}
        className={`flex py-2 text-secondary-600 hover:text-secondary-700 dark:text-secondary-300 dark:hover:text-secondary-200 ${
          isActive ? 'dark:text-white text-primary-600 font-medium' : ''
        } `}
      >
        {children}
      </InertiaLink>
    </li>
  );
}

export default Link;
