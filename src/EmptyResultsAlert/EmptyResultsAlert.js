import React from 'react';
import './EmptyResultsAlert.css';

const EmptyResultsAlert = () => {
  return (
    <main className='empty-results-message recipe-finder-app__empty-results-message'>
      <h2 className='empty-results-message__header'>No results found :-(</h2>
      <h4 className='empty-results-message__sub-header'>
        Try changing or removing some filters.
      </h4>
    </main>
  );
};

export default EmptyResultsAlert;
