import React from 'react';
import './ChooseCategoryButton.css';
import MenuIcon from 'Assets/icon-arrow-downward.svg';
import { useGlobalContext } from 'GlobalContext';

const ChooseCategoryButton = ({ onClick }) => {
  const { categoryFilter } = useGlobalContext();

  return (
    <div className='choose-category-btn-container filters-bar__item'>
      <button className='choose-category-btn btn' onClick={onClick}>
        <span
          className={`choose-category-btn__text${
            categoryFilter === 'all'
              ? ''
              : ' choose-category-btn__text--highlight'
          }`}
        >{`${
          categoryFilter === 'all' ? 'Choose Category' : categoryFilter
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
