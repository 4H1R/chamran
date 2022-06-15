import { useEffect, useRef } from 'react';

function useClickOutside(handleClickOutSide: (event: Event) => void) {
  const ref: any = useRef();

  const handleClick = (event: Event) => {
    if (!ref.current || ref.current.contains(event.target)) return;
    handleClickOutSide(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  });

  return ref;
}

export default useClickOutside;
