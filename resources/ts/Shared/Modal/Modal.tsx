import React from 'react';




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
      <label htmlFor={name} className="modal bg-sky-900/30 cursor-pointer">
        <label htmlFor="">{children}</label>
      </label>
    </>
  );
}

export default Modal;
