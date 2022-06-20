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
        className={`flex items-center px-4 py-2 text-secondary-500 delay font-bold hover:border-b-2 hover:text-blue-300 transition-all duration-200 border-blue-300  ${
          isActive ? 'border-b border-primary-600 text-gray-500' : ''
        }`}
      >
        {children}
      </InertiaLink>
    </li>
  );
}

export default Link;
