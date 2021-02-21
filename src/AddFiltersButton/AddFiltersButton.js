import React from 'react';
import './AddFiltersButton.css';
import MenuIcon from '../../public/icon-filter.svg';

const AddFiltersButton = () => {
  return (
    <div className='add-filters-container'>
      <button id='add-filters-button'>
        <img src={MenuIcon} id='add-filters-image' alt='filter icon' />
        Add Filters
      </button>
    </div>
  );
};

export default AddFiltersButton;
