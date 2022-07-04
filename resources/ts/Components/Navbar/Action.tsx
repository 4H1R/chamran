import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Action({ className = '' }) {
  return (
    <Link
      href="/pre-register"
      className={`btn-sm delay btn-outline-primary rounded ${className}`}
    >
      پیش ثبت نام
    </Link>
  );
}

export default Action;
