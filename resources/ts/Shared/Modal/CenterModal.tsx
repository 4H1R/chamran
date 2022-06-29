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
  maxWidth = 'max-w-lg',
  modalRef,
}: CenterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            ref={modalRef}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: -100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center overflow-x-hidden overflow-y-auto"
          >
            <div className={`relative mx-auto w-full px-4 ${maxWidth}`}>
              <div className="flex flex-col w-full bg-white border-4 rounded-lg shadow-xl border-gray-300/40">
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
