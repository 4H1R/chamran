import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Login({ className = '' }) {
  return (
    <Link href="/login" className={`btn btn-sm btn-primary ${className}`}>
      ورود
    </Link>
  );
}

export default Login;
