import React, { createContext } from 'react';
import { Link } from '@inertiajs/inertia-react';

import navbarLinks from '@/Fixtures/navbarLinks';
import Desktop from './Desktop';
import Mobile from './Mobile';

export const navbarContext = createContext(navbarLinks);

function Navbar() {
  return (
    <navbarContext.Provider value={navbarLinks}>
      <header className="sticky top-0 z-10 border-b border-secondary-200 dark:border-secondary-700 bg-opacity-30 backdrop-filter backdrop-blur-lg firefox:bg-opacity-90 firefox:bg-white dark:firefox:bg-secondary-900">
        <div className="container flex items-center justify-between h-20">
          <Link className="font-medium" href="/">
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
