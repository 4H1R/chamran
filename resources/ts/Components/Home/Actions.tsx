import React, { useContext } from 'react';
import { Link } from '@inertiajs/inertia-react';

import { statusContext } from '@/Layouts/AppLayout';

function Actions() {
  const { setIsOpen } = useContext(statusContext);

  return (
    <div

      className="flex items-center justify-center space-x-4 space-x-reverse lg:justify-start"
    >
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="btn btn-outline-primary"
      >
        نتیجه ثبت نام
      </button>
      <Link href="/pre-register" className="btn btn-primary">
        پیش ثبت نام
      </Link>
    </div>
  );
}

export default Actions;
