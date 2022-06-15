import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

type TogglerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toggler({ isOpen, setIsOpen }: TogglerProps) {
  const iconClassName = 'w-6 h-6 text-secondary-600 delay hover:text-secondary-700';

  const handleToggleNavbar = () => {
    setIsOpen((isOpenState) => !isOpenState);
  };

  return (
    <>
      {isOpen && (
        <motion.button
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          aria-label="بستن منو موبایل"
          onClick={handleToggleNavbar}
        >
          <XIcon className={iconClassName} />
        </motion.button>
      )}
      {!isOpen && (
        <motion.button
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          aria-label="باز کردن منو موبایل"
          onClick={handleToggleNavbar}
        >
          <MenuIcon className={iconClassName} />
        </motion.button>
      )}
    </>
  );
}

export default Toggler;
