import React from 'react';
import './ResetFiltersButton.css';
import ResetFiltersIcon from 'Assets/icon-refresh.svg';

const ResetFiltersButton = ({ resetFilters }) => {
  return (
    <div className='reset-filters-container filters-bar__item'>
      <button className='reset-filters-btn btn' onClick={resetFilters}>
        <img
          src={ResetFiltersIcon}
          className='reset-filters-btn__img'
          alt='reset filters icon'
          title='Reset Filters'
        />
      </button>
    </div>
  );
};

export default ResetFiltersButton;
