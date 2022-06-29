import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type CenterModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  modalRef?: any;
  maxWidth?: string;
};

function CenterModal({
  children,
  isOpen,
  maxWidth = 'max-w-xl',
  modalRef,
}: CenterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center overflow-x-hidden overflow-y-auto"
          >
            <div className={`relative mx-auto my-6 w-full px-4 ${maxWidth}`}>
              <div className="flex flex-col w-full bg-white rounded shadow-xl">
                <div className="p-3 md:p-5">{children}</div>
              </div>
            </div>
          </motion.div>
          <div className="fixed inset-0 z-20 bg-black opacity-50" />
        </>
      )}
    </AnimatePresence>
  );
}

export default CenterModal;
