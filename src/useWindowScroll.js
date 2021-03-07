import { useState, useEffect } from 'react';

export const useWindowScroll = ({ debounceTime }) => {
  const [windowScroll, setWindowScroll] = useState(getWindowScroll());

  function getWindowScroll() {
    const position = document.body.getBoundingClientRect();
    return { windowScrollX: position.x, windowScrollY: position.y };
  }

  useEffect(() => {
    let debounceTimerId = null;

    function handleScroll() {
      clearTimeout(debounceTimerId);

      debounceTimerId = setTimeout(() => {
        setWindowScroll(getWindowScroll());
      }, debounceTime);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return windowScroll;
};
