import React, { useState, useEffect } from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import filters from './filters';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';

function isRecipeApplicable(recipeTags, filters) {
  /* Check if recipe tags contains all set filters */
  for (const filter in filters) {
    if (filters[filter] === true) {
      if (!recipeTags.includes(filter)) {
        return false;
      }
    }
  }
  return true;
}

const FindRecipeApp = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [activeCategory, setActiveCategory] = useState('all');
  const [nameFilter, setNameFilter] = useState('');
  const [activeFilters, setActiveFilters] = useState(
    filters.reduce((o, filter) => ({ ...o, [filter.filterName]: false }), {})
  );

  const toggleFilter = (filter) => {
    if (activeFilters[filter] === true) {
      setActiveFilters({ ...activeFilters, [filter]: false });
    } else {
      setActiveFilters({ ...activeFilters, [filter]: true });
    }
  };

  const resetFilters = () => {
    let newActiveFilters = { ...activeFilters };
    for (const filterName in newActiveFilters) {
      newActiveFilters[filterName] = false;
    }
    setActiveFilters(newActiveFilters);
  };

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredRecipes(
        recipes.filter(
          (recipe) =>
            isRecipeApplicable(recipe.tags, activeFilters) &&
            recipe.name.toLowerCase().includes(nameFilter)
        )
      );
    } else {
      setFilteredRecipes(
        recipes.filter(
          (recipe) =>
            recipe.category === activeCategory &&
            recipe.name.toLowerCase().includes(nameFilter) &&
            isRecipeApplicable(recipe.tags, activeFilters)
        )
      );
    }
  }, [activeCategory, activeFilters, nameFilter]);

  return (
    <div className='recipe-finder-app'>
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filters={filters}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        resetFilters={resetFilters}
        setNameFilter={setNameFilter}
      />
      <RecipesSection recipes={filteredRecipes} />
    </div>
  );
};

export default FindRecipeApp;
