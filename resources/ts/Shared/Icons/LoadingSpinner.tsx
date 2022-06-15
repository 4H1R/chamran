import React from 'react';

function LoadingSpinner() {
  return (
    <div
      style={{ borderTopColor: 'transparent' }}
      className="w-6 h-6 border-2 border-solid rounded-full border-primary-400 animate-spin"
    />
  );
}

export default LoadingSpinner;