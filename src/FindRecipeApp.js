import React, { useState } from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import Sidebar from './Sidebar/Sidebar';
import RecipesList from './RecipesList/RecipesList';

const FindRecipeApp = () => {
  return (
    <div className='recipe-finder-app'>
      <Sidebar />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default FindRecipeApp;
