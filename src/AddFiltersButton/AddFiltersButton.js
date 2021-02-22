import React from 'react';
import './AddFiltersButton.css';
import MenuIcon from '../assets/icon-filter.svg';

const AddFiltersButton = () => {
  return (
    <div className='add-filters-container'>
      <button id='add-filters-button'>
        <img src={MenuIcon} id='add-filters-image' alt='filter icon' />
        <span className='buttontext'>Add Filters</span>
      </button>
    </div>
  );
};

export default AddFiltersButton;
