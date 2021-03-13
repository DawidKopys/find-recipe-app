import React, { useState, useEffect } from 'react';
import './FindRecipeApp.css';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';

const FindRecipeApp = () => {
  return (
    <div className='recipe-finder-app'>
      <Sidebar />
      <RecipesSection />
    </div>
  );
};

export default FindRecipeApp;
