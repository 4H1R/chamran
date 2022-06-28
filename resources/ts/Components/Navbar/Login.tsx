import React from 'react';

function Login({ className = '' }) {
  return (
    <a
      href="/admin/login"
      className={`btn-sm delay btn-outline-primary rounded ${className}`}
    >
      ورود
    </a>
  );
}

export default Login;
