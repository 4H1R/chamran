import React, { createContext } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { motion } from 'framer-motion';

import navbarLinks from '@/Fixtures/navbarLinks';
import Desktop from './Desktop';
import Mobile from './Mobile';

export const navbarContext = createContext(navbarLinks);

function Navbar() {
  return (
    <navbarContext.Provider value={navbarLinks}>
      <motion.header
        transition={{ duration: 0.6 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 z-10 w-full bg-white shadow"
      >
        <div className="container flex items-center justify-between py-4">
          <Link className="font-bold" href="/">
            هنرستان شهید چمران
          </Link>
          <Desktop />
          <Mobile />
        </div>
      </motion.header>
    </navbarContext.Provider>
  );
}

export default Navbar;
