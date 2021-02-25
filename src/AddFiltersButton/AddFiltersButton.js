import React from 'react';
import './AddFiltersButton.css';
import MenuIcon from '../assets/icon-filter.svg';

const AddFiltersButton = ({ onClick }) => {
  return (
    <div className='add-filters-container'>
      <button className='btn' id='add-filters-button' onClick={onClick}>
        <img src={MenuIcon} id='add-filters-image' alt='filter icon' />
        <span className='buttontext'>Add Filters</span>
      </button>
    </div>
  );
};

export default AddFiltersButton;
