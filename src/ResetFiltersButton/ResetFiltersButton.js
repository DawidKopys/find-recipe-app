import React from 'react';
import './ResetFiltersButton.css';
import ResetFiltersIcon from '../assets/icon-refresh.svg';

const ResetFiltersButton = () => {
  return (
    <div className='reset-filters-container'>
      <button className='btn' id='reset-filters-button'>
        <img
          src={ResetFiltersIcon}
          id='reset-filters-image'
          alt='reset filters icon'
        />
      </button>
    </div>
  );
};

export default ResetFiltersButton;
