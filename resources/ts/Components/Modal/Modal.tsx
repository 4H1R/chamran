import React from 'react';


export function OpenModal({
  name,
  className,
  children,
}: {
  name: string;
  className: string;
  children: any;
}) {
  return (
    <label htmlFor={name} className={className}>
      {children}
    </label>
  );
}


function Modal({
  children,
  name,
}: {

  name: string;
  children: React.ReactNode;
}) {
  return (
    <>

      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal bg-primary-900/30 cursor-pointer">
        <label htmlFor="">{children}</label>
      </label>
    </>
  );
}

export default Modal;
