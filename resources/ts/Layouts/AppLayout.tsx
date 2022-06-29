import React, { createContext, useState } from 'react';

import Navbar from '@/Components/Navbar';
import StatusModal from '@/Components/Status/Modal';
import Main from '@/Components/AppLayout/Main';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

type TStatusContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const statusContext = createContext<TStatusContext>({
  isOpen: false,
  setIsOpen: () => {},
});

type AppLayoutProps = {
  children: React.ReactNode;
};
AOS.init();

function AppLayout({ children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <statusContext.Provider value={{ isOpen, setIsOpen }}>
        <StatusModal />
        <Navbar />
        <Main>{children}</Main>
      </statusContext.Provider>
    </div>
  );
}

export default AppLayout;
