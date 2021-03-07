import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import { useWindowScroll } from '../../useWindowScroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { windowScrollY } = useWindowScroll({ debounceTime: 250 });

  const smoothScrollToTop = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      document.body.scrollTop =
        currentScroll - currentScroll / 5; /* For Safari */
      document.documentElement.scrollTop =
        currentScroll -
        currentScroll / 5; /* For Chrome, Firefox, IE and Opera */
    }
  };

  useEffect(() => {
    if (windowScrollY < -100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [windowScrollY]);

  return (
    <button
      className={`btn-scroll-to-top${
        isVisible ? ' btn-scroll-to-top--visible' : ''
      }`}
      onClick={smoothScrollToTop}
      disabled={isVisible ? false : true}
    ></button>
  );
};

export default ScrollToTopButton;
