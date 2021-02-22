import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from '../assets/icon-arrow-downward.svg';

const ChooseCategoryButton = () => {
  return (
    <div className='choose-category-container'>
      <button id='choose-category-button'>
        <span className='buttontext'>Choose Category</span>
        <img
          src={MenuIcon}
          id='choose-category-image'
          alt='drowdown menu icon'
        />
      </button>
    </div>
  );
};

export default ChooseCategoryButton;
