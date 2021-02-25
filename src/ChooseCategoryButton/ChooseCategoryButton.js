import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from '../assets/icon-arrow-downward.svg';

const ChooseCategoryButton = ({ onClick }) => {
  return (
    <div className='choose-category-btn-container'>
      <button className='btn' id='choose-category-btn' onClick={onClick}>
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
