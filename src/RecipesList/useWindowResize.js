import { useState, useEffect } from 'react';

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useEffect(() => {
    let debounceTimerId = null;

    function handleResize() {
      clearTimeout(debounceTimerId);

      debounceTimerId = setTimeout(() => {
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }, 150);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
