import { usePage } from '@inertiajs/inertia-react';
import React, { useContext } from 'react';
import { navbarContext } from '../Navbar';

import Link from './Link';

function Links() {
  const links = useContext(navbarContext);
  const { url } = usePage();

  return (
    <ul className="flex flex-wrap items-center justify-end flex-grow">
      {links.map(({ href, text }) => (
        <Link isActive={url === href} href={href} key={href}>
          {text}
        </Link>
      ))}
    </ul>
  );
}

function Desktop() {
  return (
    <nav className="flex-grow hidden lg:flex">
      <Links />
    </nav>
  );
}

export default Desktop;
