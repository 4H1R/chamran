import React from 'react';

import { asset } from '@/Utils';

function FormAvatar() {
  return (
    <div className="absolute h-32 w-32 -translate-y-[4.5rem] self-center overflow-hidden rounded-full border-2 border-gray-300/50 bg-white">
      <img src={asset('img/modalBoy.png')} alt="boy" />
    </div>
  );
}

export default FormAvatar;
