import React from 'react';
import './AddFiltersButton.css';
import MenuIcon from 'Assets/icon-filter.svg';

const AddFiltersButton = ({ numberOfActiveFilters, onClick }) => {
  return (
    <div className='filters-btn-container filters-bar__item'>
      <button className='filters-btn btn' onClick={onClick}>
        <img src={MenuIcon} className='filters-btn__img' alt='filter icon' />
        <span
          className={`filters-btn__text${
            numberOfActiveFilters === 0 ? '' : ' filters-btn__text--highlight'
          }`}
        >{`${
          numberOfActiveFilters === 0
            ? 'Filters'
            : `${numberOfActiveFilters} Active`
        }`}</span>
      </button>
    </div>
  );
};

export default AddFiltersButton;
