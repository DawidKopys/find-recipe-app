import React, { useState, useEffect, useRef } from 'react';
import './FindRecipeApp.css';
import filters from './filters';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';
import 'regenerator-runtime/runtime';

const checkRecipeNameFilter = (recipeName, nameFilter) => {
  return recipeName.toLowerCase().includes(nameFilter);
};

const checkRecipeCategoryFilter = (recipeCategory, categoryFilter) => {
  return categoryFilter === 'all' || recipeCategory === categoryFilter;
};

const checkRecipeCustomFilters = (recipeTags, customFilters) => {
  /* Check if recipe tags array contain all set filters */
  for (const filter in customFilters) {
    if (customFilters[filter] === true) {
      /* recipe is not applicable if a filter is set and the recipe does not have appropriate tag */
      if (!recipeTags.includes(filter)) {
        return false;
      }
    }
  }
  return true;
};

const checkRecipeIngredientsFilters = (
  recipeIngredients,
  ingredientsFilters
) => {
  /* Check if recipe ingredients array contains all set ingredients */
  for (const ingredient of ingredientsFilters) {
    if (!recipeIngredients.includes(ingredient.ingredientName)) {
      return false;
    }
  }
  return true;
};

const recipesURL = process.env.API_URL;

const FindRecipeApp = () => {
  const allRecipes = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
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
          checkRecipeCategoryFilter(recipe.category, categoryFilter) &&
          checkRecipeNameFilter(recipe.name, nameFilter) &&
          checkRecipeCustomFilters(recipe.tags, customFilters) &&
          checkRecipeIngredientsFilters(recipe.ingredients, ingredientsFilters)
      )
    );
  }, [categoryFilter, customFilters, nameFilter, ingredientsFilters]);

  return (
    <div className='recipe-finder-app'>
      <Sidebar
        activeCategory={categoryFilter}
        setActiveCategory={setCategoryFilter}
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
