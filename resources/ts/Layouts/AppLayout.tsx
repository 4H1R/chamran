import Navbar from '@/Components/Navbar';
import React from 'react';



type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {

  return (
    <div className="flex flex-col min-h-screen " style={{ 
      backgroundImage: `url(http://www.upsara.com/images/j780580_.jpg)` 
    }}>
      <Navbar />
      <main className=''>{children}</main>
    </div>
  );
}

export default AppLayout;
