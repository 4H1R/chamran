import { statusContext } from '@/Layouts/AppLayout';
import React, { useContext } from 'react';

function OpenStatusModal({ className = '' }) {
  const { setIsOpen } = useContext(statusContext);

  return (
    <li>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
        type="button"
      >
        نتیجه پیش ثبت نام
      </button>
    </li>
  );
}

export default OpenStatusModal;
