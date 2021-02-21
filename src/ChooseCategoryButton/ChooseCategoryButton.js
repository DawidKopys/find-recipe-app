import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from '../../public/icon-arrow-downward.svg';

const ChooseCategoryButton = () => {
  return (
    <button id='choose-category-button'>
      Choose Category
      <img src={MenuIcon} id='choose-category-image' alt='drowdown menu icon' />
    </button>
  );
};

export default ChooseCategoryButton;
