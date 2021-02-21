import React from 'react';
import './FindRecipeApp.css';
import SearchBar from './SearchBar/SearchBar';
import ChooseCategoryButton from './ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from './AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from './ResetFiltersButton/ResetFiltersButton';

const FindRecipeApp = () => {
  return (
    <>
      <SearchBar />
      <div className='filters-bar'>
        <ChooseCategoryButton />
        <AddFiltersButton />
        <ResetFiltersButton />
      </div>
    </>
  );
};

export default FindRecipeApp;
