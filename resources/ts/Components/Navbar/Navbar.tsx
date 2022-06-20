import React, { createContext } from 'react';
import { Link } from '@inertiajs/inertia-react';

import navbarLinks from '@/Fixtures/navbarLinks';
import Desktop from './Desktop';
import Mobile from './Mobile';
import Login from './Login';

export const navbarContext = createContext(navbarLinks);

function Navbar() {
  return (
    <navbarContext.Provider value={navbarLinks}>
      <header className="sticky    top-0 z-10 bg-white  ">
        <div className="container flex items-center justify-between h-[4.5rem]">
          <Link className="font-medium" href="/">
            هنرستان شهید چمران
          </Link>
          <Desktop />
          <Mobile />
          <Login className="hidden ml-12   md:block" />
        </div>
      </header>
    </navbarContext.Provider>
  );
}

export default Navbar;
