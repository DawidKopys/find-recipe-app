import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from 'Assets/icon-arrow-downward.svg';

const ChooseCategoryButton = ({ onClick }) => {
  return (
    <div className='choose-category-btn-container filters-bar__item'>
      <button className='choose-category-btn btn' onClick={onClick}>
        <span className='choose-category-btn__text'>Choose Category</span>
        <img
          src={MenuIcon}
          className='choose-category-btn__img'
          alt='drowdown menu icon'
        />
      </button>
    </div>
  );
};

export default ChooseCategoryButton;
