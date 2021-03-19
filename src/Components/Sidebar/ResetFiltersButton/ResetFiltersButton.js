import React from 'react';
import './ResetFiltersButton.css';
import ResetFiltersIcon from 'Assets/icon-refresh.svg';
import { useGlobalContext } from 'GlobalContext';

const ResetFiltersButton = () => {
  const {
    resetCustomFilters,
    deleteAllIngredientsFilters,
  } = useGlobalContext();

  return (
    <div className='reset-filters-container filters-bar__item'>
      <button
        className='reset-filters-btn btn'
        onClick={() => {
          resetCustomFilters();
          deleteAllIngredientsFilters();
        }}
      >
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
