import React, { createContext } from 'react';
import { Link } from '@inertiajs/inertia-react';

import navbarLinks from '@/Fixtures/navbarLinks';
import Desktop from './Desktop';
import Mobile from './Mobile';

export const navbarContext = createContext(navbarLinks);

function Navbar() {
  return (
    <navbarContext.Provider value={navbarLinks}>
      <header className="sticky top-0 z-10 bg-white shadow">
        <div className="container flex items-center justify-between py-4">
          <Link className="font-bold" href="/">
            هنرستان شهید چمران
          </Link>
          <Desktop />
          <Mobile />
        </div>
      </header>
    </navbarContext.Provider>
  );
}

export default Navbar;
