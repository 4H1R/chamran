import React, { useContext } from 'react';

import { statusContext } from '@/Layouts/AppLayout';
import Status from './Status';
import CenterModal from '@/Shared/Modal/CenterModal';

function Modal() {
  const { isOpen } = useContext(statusContext);

  return (
    <CenterModal isOpen={isOpen}>
      <Status />
    </CenterModal>
  );
}

export default Modal;
