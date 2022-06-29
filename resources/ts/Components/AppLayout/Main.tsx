import React, { memo } from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <main className="py-4">{children}</main>;
}

export default memo(Main);
