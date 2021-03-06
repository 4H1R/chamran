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
        className={`btn-nav ${isActive ? 'text-primary-600' : ''}`}
      >
        {children}
      </InertiaLink>
    </li>
  );
}

export default Link;
