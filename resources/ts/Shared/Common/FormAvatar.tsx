import React from 'react';

import { asset } from '@/Utils';

function FormAvatar() {
  return (
    <div className="w-32 h-32 absolute  self-center  rounded-full overflow-hidden bg-white border-gray-300/50 -translate-y-[4.5rem]  border-2  ">
      <img src={asset('img/Employee.png')} alt="boy" />
    </div>
  );
}

export default FormAvatar;
