import React from 'react';

type ErrorMessageProps = {
  error: string;
};

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-sm text-danger-600">{error}</p>;
}

export default ErrorMessage;
