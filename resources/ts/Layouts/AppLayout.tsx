import Navbar from '@/Components/Navbar';
import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-secondary-50 dark:bg-secondary-900">
      <Navbar />
      <main className="container flex-grow">{children}</main>
    </div>
  );
}

export default AppLayout;
