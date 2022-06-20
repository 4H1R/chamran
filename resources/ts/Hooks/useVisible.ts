import { useState } from 'react';

import { useClickOutside } from '@/Hooks';

function useVisible(initialIsVisible = false) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useClickOutside(() => setIsVisible(false));
  return [ref, isVisible, setIsVisible] as const;
}

export default useVisible;
