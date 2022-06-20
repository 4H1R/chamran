import React from 'react';

function Modal({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: any;
}) {
  return (
    <>
      <label htmlFor="my-modal " className={className}>
        {title}
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal bg-sky-900/30 cursor-pointer">
        <label htmlFor="">{children}</label>
      </label>
    </>
  );
}

export default Modal;
