import React from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
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

  return (
    <button className='btn-scroll-to-top' onClick={smoothScrollToTop}></button>
  );
};

export default ScrollToTopButton;
