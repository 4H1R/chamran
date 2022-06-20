import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Login({ className = '' }) {
  return (
    <Link href="/login" className={` btn bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-white hover:border-none  text-base transition-all duration-200  border-info   rounded-lg ${className}`}>
      ورود
    </Link>
  );
}

export default Login;
