import React, { useState } from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import filters from './filters';
import Sidebar from './Sidebar/Sidebar';
import RecipesList from './RecipesList/RecipesList';

const FindRecipeApp = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilters, setActiveFilters] = useState(
    filters.reduce((o, key) => ({ ...o, [key]: false }), {})
  );

  const toggleFilter = (filter) => {
    if (activeFilters[filter] === true) {
      setActiveFilters({ ...activeFilters, [filter]: false });
    } else {
      setActiveFilters({ ...activeFilters, [filter]: true });
    }
  };

  return (
    <div className='recipe-finder-app'>
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filters={filters}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
      />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default FindRecipeApp;
