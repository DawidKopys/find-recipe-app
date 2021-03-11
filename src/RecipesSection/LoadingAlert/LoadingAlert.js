import React from 'react';
import './LoadingAlert.css';

const LoadingAlert = () => {
  return (
    <main className='loading-message recipe-finder-app__loading-message'>
      <h2 className='loading-message__header'>Loading ...</h2>
      <h4 className='loading-message__sub-header'>
        This will take just a moment
      </h4>
    </main>
  );
};

export default LoadingAlert;
