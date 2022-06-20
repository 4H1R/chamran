import React, { useContext } from 'react';

import { usePage } from '@/Hooks';
import { navbarContext } from '../Navbar';
import Link from './Link';
import navbarLinks from '@/Fixtures/navbarLinks';
import Status from '@/Pages/Status';

function Links() {
  const links = useContext(navbarContext);
  const { url } = usePage();

  return (
    <ul className="flex flex-wrap  items-center justify-center flex-grow">
      {links.map(({ href, text }) => (
        <Link isActive={url === href} href={href} key={href}>
          {text}
        </Link>
      ))}
      <Status className=' btn_nav '/>
    </ul>
  );
}

function Desktop() {
  return (
    <nav className="flex-grow hidden md:flex ">
      <Links />
    </nav>
  );
}

export default Desktop;
