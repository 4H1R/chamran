import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Action({ className = '' }) {
  return (
    <Link
      href="/pre-register"
      className={`btn-sm btn-outline-primary ${className}`}
    >
      پیش ثبت نام
    </Link>
  );
}

export default Action;
