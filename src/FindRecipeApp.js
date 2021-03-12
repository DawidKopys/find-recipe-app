import React, { useState, useEffect } from 'react';
import './FindRecipeApp.css';
import filters from './filters';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';
import 'regenerator-runtime/runtime';

const recipesURL = process.env.API_URL;

const FindRecipeApp = () => {
  const {
    isLoading,
    filteredRecipes,
    categoryFilter,
    customFilters,
    ingredientsFilters,
    setCategoryFilter,
    setNameFilter,
    toggleCustomFilter,
    resetCustomFilters,
    addIngredientsFilter,
    deleteIngredientsFilter,
  } = useFilterRecipes();

  return (
    <div className='recipe-finder-app'>
      <Sidebar
        activeCategory={categoryFilter}
        setActiveCategory={setCategoryFilter}
        filters={filters}
        activeFilters={customFilters}
        toggleFilter={toggleCustomFilter}
        resetFilters={resetCustomFilters}
        setNameFilter={setNameFilter}
        ingredientsFilter={ingredientsFilters}
        addIngredientsFilter={addIngredientsFilter}
        deleteIngredientsFilter={deleteIngredientsFilter}
      />
      <RecipesSection isLoading={isLoading} recipes={filteredRecipes} />
    </div>
  );
};

const useFilterRecipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState([]);
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
      const responseRecipes = responseJSON.record;
      setAllRecipes(responseRecipes);
      setIsLoading(false);
    } catch (error) {
      console.log('reject:', error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    setFilteredRecipes(
      allRecipes.filter(
        (recipe) =>
          checkRecipeCategoryFilter(recipe.category) &&
          checkRecipeNameFilter(recipe.name) &&
          checkRecipeCustomFilters(recipe.tags) &&
          checkRecipeIngredientsFilters(recipe.ingredients)
      )
    );
  }, [
    allRecipes,
    categoryFilter,
    customFilters,
    nameFilter,
    ingredientsFilters,
  ]);

  const checkRecipeNameFilter = (recipeName) => {
    return recipeName.toLowerCase().includes(nameFilter);
  };

  const checkRecipeCategoryFilter = (recipeCategory) => {
    return categoryFilter === 'all' || recipeCategory === categoryFilter;
  };

  const checkRecipeCustomFilters = (recipeTags) => {
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

  const checkRecipeIngredientsFilters = (recipeIngredients) => {
    /* Check if recipe ingredients array contains all set ingredients */
    for (const ingredient of ingredientsFilters) {
      if (!recipeIngredients.includes(ingredient.ingredientName)) {
        return false;
      }
    }
    return true;
  };

  const toggleCustomFilter = (filter) => {
    if (customFilters[filter] === true) {
      setCustomFilters({ ...customFilters, [filter]: false });
    } else {
      setCustomFilters({ ...customFilters, [filter]: true });
    }
  };

  const resetCustomFilters = () => {
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

  return {
    isLoading,
    filteredRecipes,
    categoryFilter,
    customFilters,
    ingredientsFilters,
    setCategoryFilter,
    setNameFilter,
    toggleCustomFilter,
    resetCustomFilters,
    addIngredientsFilter,
    deleteIngredientsFilter,
  };
};

export default FindRecipeApp;
