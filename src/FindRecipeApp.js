import React, { useState, useEffect } from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import filters from './filters';
import Sidebar from './Sidebar/Sidebar';
import RecipesSection from './RecipesSection/RecipesSection';

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

const FindRecipeApp = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [activeCategory, setActiveCategory] = useState('all');
  const [nameFilter, setNameFilter] = useState('');
  const [customFilters, setCustomFilters] = useState(
    filters.reduce((o, filter) => ({ ...o, [filter.filterName]: false }), {})
  );
  const [ingredientsFilters, setIngredientsFilters] = useState([]);

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
    if (activeCategory === 'all') {
      setFilteredRecipes(
        recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(nameFilter) &&
            isRecipeApplicable(
              recipe.tags,
              customFilters,
              recipe.ingredients,
              ingredientsFilters
            )
        )
      );
    } else {
      setFilteredRecipes(
        recipes.filter(
          (recipe) =>
            recipe.category === activeCategory &&
            recipe.name.toLowerCase().includes(nameFilter) &&
            isRecipeApplicable(
              recipe.tags,
              customFilters,
              recipe.ingredients,
              ingredientsFilters
            )
        )
      );
    }
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
      <RecipesSection recipes={filteredRecipes} />
    </div>
  );
};

export default FindRecipeApp;
