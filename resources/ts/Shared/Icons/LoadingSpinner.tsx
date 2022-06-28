import React from 'react';

function LoadingSpinner() {
  return (
    <div
      style={{ borderTopColor: 'transparent' }}
      className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-white"
    />
  );
}

export default LoadingSpinner;
