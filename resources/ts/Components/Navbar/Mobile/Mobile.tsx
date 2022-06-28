import React, { useContext } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { AnimatePresence, motion } from 'framer-motion';

import { usePage } from '@/Hooks';
import { useVisible } from '@/Hooks';
import { navbarContext } from '../Navbar';
import Toggler from './Toggler';
import Link from './Link';
import Login from '../Login';
import OpenStatusModal from '../OpenStatusModal';

function Links() {
  const links = useContext(navbarContext);
  const { url } = usePage();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute left-0 top-full z-20 w-full overflow-hidden"
    >
      <ul className="bg-secondary-200 px-4 py-2">
        {links.map(({ href, text }) => (
          <Link isActive={url === href} href={href} key={href}>
            {text}
          </Link>
        ))}
        <OpenStatusModal className="flex py-2 text-secondary-600 hover:text-secondary-700" />
        <li>
          <Login />
        </li>
      </ul>
    </motion.nav>
  );
}

function Mobile() {
  const [ref, isOpen, setIsOpen] = useVisible(false);

  // close mobile navbar on navigation for good user experience
  Inertia.on('navigate', () => {
    setIsOpen(false);
  });

  return (
    <div className="md:hidden" ref={ref}>
      <Toggler isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>{isOpen && <Links />}</AnimatePresence>
    </div>
  );
}

export default Mobile;
