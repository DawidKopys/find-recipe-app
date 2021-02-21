import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from '../../public/icon-arrow-downward.svg';

const ChooseCategoryButton = () => {
  return (
    <div className='choose-category-container'>
      <button id='choose-category-button'>
        Choose Category
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
