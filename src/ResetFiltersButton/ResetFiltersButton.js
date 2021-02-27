import React from 'react';
import './ResetFiltersButton.css';
import ResetFiltersIcon from '../assets/icon-refresh.svg';

const ResetFiltersButton = () => {
  return (
    <div className='reset-filters-container'>
      <button className='reset-filters-btn btn'>
        <img
          src={ResetFiltersIcon}
          className='reset-filters-btn__img'
          alt='reset filters icon'
        />
      </button>
    </div>
  );
};

export default ResetFiltersButton;
