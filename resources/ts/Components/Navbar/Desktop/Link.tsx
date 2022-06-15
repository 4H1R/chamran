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
        className={`flex items-center px-4 py-2 text-secondary-600 delay hover:text-secondary-700 ${
          isActive ? 'border-b border-primary-600 text-black' : ''
        }`}
      >
        {children}
      </InertiaLink>
    </li>
  );
}

export default Link;
