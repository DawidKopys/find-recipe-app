import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from 'Assets/icon-arrow-downward.svg';

const ChooseCategoryButton = ({ activeCategory, onClick }) => {
  return (
    <div className='choose-category-btn-container filters-bar__item'>
      <button className='choose-category-btn btn' onClick={onClick}>
        <span
          className={`choose-category-btn__text${
            activeCategory === 'all'
              ? ''
              : ' choose-category-btn__text--highlight'
          }`}
        >{`${
          activeCategory === 'all' ? 'Choose Category' : activeCategory
        }`}</span>
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
