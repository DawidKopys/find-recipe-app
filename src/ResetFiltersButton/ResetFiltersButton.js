import React from 'react';
import './ResetFiltersButton.css';
import ResetFiltersIcon from '../../public/icon-refresh.svg';

const ResetFiltersButton = () => {
  return (
    <button id='reset-filters-button'>
      <img
        src={ResetFiltersIcon}
        id='reset-filters-image'
        alt='reset filters icon'
      />
    </button>
  );
};

export default ResetFiltersButton;
