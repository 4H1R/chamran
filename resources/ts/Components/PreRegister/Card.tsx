import React from 'react';
import { Link } from '@inertiajs/inertia-react';

type CardProps = {
  src: string;
  href: string;
  actionTitle: string;
};

function Card({ src, href, actionTitle }: CardProps) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} alt={actionTitle} className="max-w-lg" />
      <Link
        href={href}
        className="px-4 py-2 text-lg font-bold text-white rounded shadow-md btn-grad"
      >
        {actionTitle}
      </Link>
    </div>
  );
}

export default Card;
