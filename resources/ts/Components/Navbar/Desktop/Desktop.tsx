import React, { useContext } from 'react';
import { usePage } from '@/Hooks';
import { navbarContext } from '../Navbar';
import Link from './Link';
import Login from '../Login';
import OpenStatusModal from '../OpenStatusModal';

function Links() {
  const links = useContext(navbarContext);
  const { url } = usePage();

  return (
    <ul className="hidden flex-grow flex-wrap items-center justify-center md:flex">
      {links.map(({ href, text }) => (
        <Link isActive={url === href} href={href} key={href}>
          {text}
        </Link>
      ))}
      <OpenStatusModal className="btn-nav" />
    </ul>
  );
}

function Desktop() {
  return (
    <nav className="hidden flex-grow md:flex">
      <Links />
      <Login />
    </nav>
  );
}

export default Desktop;
