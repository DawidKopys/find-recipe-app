import { useEffect } from 'react';

export const useOnClickOutside = (ref, clickOutsideHandler) => {
  useEffect(() => {
    const clickOutsideListener = (e) => {
      /* Call handler if clicked outside of the ref element */
      if (ref.current && !ref.current.contains(e.target)) {
        clickOutsideHandler();
      }
    };

    document.addEventListener('mousedown', clickOutsideListener);
    document.addEventListener('touchstart', clickOutsideListener);
    return () => {
      document.removeEventListener('mousedown', clickOutsideListener);
      document.removeEventListener('touchstart', clickOutsideListener);
    };
  }, [ref, clickOutsideHandler]);
};
