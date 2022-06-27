import React, { useContext } from 'react';
import { usePage } from '@/Hooks';
import { navbarContext } from '../Navbar';
import Link from './Link';
import OpenModal from '@/Shared/Modal/OpenModal';



function Links() {
  const links = useContext(navbarContext);
  const { url } = usePage();

  return (
    <ul className=" flex-wrap  hidden md:flex  items-center justify-center flex-grow">
      {links.map(({ href, text }) => (
        <Link isActive={url === href} href={href} key={href}>
          {text}
        </Link>
      ))}
      <OpenModal className='btn_nav' name='status' >
        نتیجه ثبت نام
      </OpenModal>
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
