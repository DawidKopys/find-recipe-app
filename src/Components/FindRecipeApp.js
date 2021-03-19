import React from 'react';
import './FindRecipeApp.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';

const FindRecipeApp = () => {
  return (
    <div className='recipe-finder-app'>
      <Navbar />
      <Sidebar />
      <RecipesSection />
    </div>
  );
};

export default FindRecipeApp;
