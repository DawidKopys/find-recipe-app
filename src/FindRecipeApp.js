import React, { useState, useEffect, useRef } from 'react';
import './FindRecipeApp.css';
import filters from './filters';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';
import 'regenerator-runtime/runtime';

function isRecipeApplicable(
  recipeTags,
  customFilters,
  recipeIngredients,
  ingredientsFilters
) {
  /* Check if recipe tags array contain all set filters */
  for (const filter in customFilters) {
    if (customFilters[filter] === true) {
      if (!recipeTags.includes(filter)) {
        return false;
      }
    }
  }
  /* Check if recipe ingredients array contains all set ingredients */
  for (const ingredient of ingredientsFilters) {
    if (!recipeIngredients.includes(ingredient.ingredientName)) {
      return false;
    }
  }

  return true;
}

const recipesURL = process.env.API_URL;

const FindRecipeApp = () => {
  const allRecipes = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [nameFilter, setNameFilter] = useState('');
  const [customFilters, setCustomFilters] = useState(
    filters.reduce((o, filter) => ({ ...o, [filter.filterName]: false }), {})
  );
  const [ingredientsFilters, setIngredientsFilters] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await fetch(recipesURL, {
        headers: {
          'X-Master-Key': process.env.API_KEY,
        },
      });
      const responseJSON = await response.json();
      allRecipes.current = responseJSON.record;
      setIsLoading(false);
      setFilteredRecipes(allRecipes.current);
    } catch (error) {
      console.log('reject:', error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const toggleFilter = (filter) => {
    if (customFilters[filter] === true) {
      setCustomFilters({ ...customFilters, [filter]: false });
    } else {
      setCustomFilters({ ...customFilters, [filter]: true });
    }
  };

  const resetFilters = () => {
    let newActiveFilters = { ...customFilters };
    for (const filterName in newActiveFilters) {
      newActiveFilters[filterName] = false;
    }
    setCustomFilters(newActiveFilters);
  };

  const addIngredientsFilter = (ingredient) => {
    setIngredientsFilters([
      ...ingredientsFilters,
      { id: Date.now(), ingredientName: ingredient.toLowerCase() },
    ]);
  };

  const deleteIngredientsFilter = (ingredient) => {
    setIngredientsFilters(
      ingredientsFilters.filter(
        (currentIngredient) => currentIngredient.ingredientName !== ingredient
      )
    );
  };

  useEffect(() => {
    setFilteredRecipes(
      allRecipes.current.filter(
        (recipe) =>
          (activeCategory === 'all' || recipe.category === activeCategory) &&
          recipe.name.toLowerCase().includes(nameFilter) &&
          isRecipeApplicable(
            recipe.tags,
            customFilters,
            recipe.ingredients,
            ingredientsFilters
          )
      )
    );
  }, [activeCategory, customFilters, nameFilter, ingredientsFilters]);

  return (
    <div className='recipe-finder-app'>
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filters={filters}
        activeFilters={customFilters}
        toggleFilter={toggleFilter}
        resetFilters={resetFilters}
        setNameFilter={setNameFilter}
        ingredientsFilter={ingredientsFilters}
        addIngredientsFilter={addIngredientsFilter}
        deleteIngredientsFilter={deleteIngredientsFilter}
      />
      <RecipesSection isLoading={isLoading} recipes={filteredRecipes} />
    </div>
  );
};

export default FindRecipeApp;
