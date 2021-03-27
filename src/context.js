import React, { useState, useEffect, useReducer, useContext } from 'react';
import filters from 'Components/Modals/ModalFilters/filters';
import { reducer } from './reducer';
import 'regenerator-runtime/runtime';

const getLocalStorage = () => {
  let recipesJSON = localStorage.getItem('recipes');
  if (recipesJSON) {
    try {
      return JSON.parse(recipesJSON);
    } catch (e) {
      console.log(e);
      console.log('Invalid JSON stored in the local storage.');
      return [];
    }
  } else {
    return [];
  }
};

const setLocalStorage = (recipes) => {
  localStorage.setItem('recipes', JSON.stringify(recipes));
};

const recipesURL =
  'https://api.jsonbin.io/v3/b/604a7b737ffeba41c07679e9/latest';
const AppContext = React.createContext();

const initialState = {
  isLoading: true,
  filteredRecipes: [],
  categoryFilter: 'all',
  nameFilter: '',
  customFilters: filters.reduce(
    (o, filter) => ({ ...o, [filter.filterName]: false }),
    {}
  ),
  ingredientsFilters: [],
};

const AppProvider = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    const recipes = getLocalStorageRecipes();
    if (recipes.length === 0) {
      fetchRecipes();
    }
  };

  const getLocalStorageRecipes = () => {
    const recipes = getLocalStorage();
    if (recipes.length !== 0) {
      setAllRecipes(recipes);
      dispatch({ type: 'SET_LOADED_SUCCESS' });
    }
    return recipes;
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetch(recipesURL);
      const responseJSON = await response.json();
      const recipes = responseJSON.record;
      setAllRecipes(recipes);
      setLocalStorage(recipes);
      dispatch({ type: 'SET_LOADED_SUCCESS' });
    } catch (error) {
      console.log('reject:', error);
    }
  };

  useEffect(() => {
    const checkRecipeNameFilter = (recipeName) => {
      return recipeName.toLowerCase().includes(state.nameFilter);
    };

    const checkRecipeCategoryFilter = (recipeCategory) => {
      return (
        state.categoryFilter === 'all' ||
        recipeCategory === state.categoryFilter
      );
    };

    const checkRecipeCustomFilters = (recipeTags) => {
      /* Check if recipe tags array contain all set filters */
      for (const filter in state.customFilters) {
        if (state.customFilters[filter] === true) {
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
      for (const ingredient of state.ingredientsFilters) {
        if (!recipeIngredients.includes(ingredient.ingredientName)) {
          return false;
        }
      }
      return true;
    };

    dispatch({
      type: 'DISPLAY_ITEMS',
      payload: allRecipes.filter(
        (recipe) =>
          checkRecipeCategoryFilter(recipe.category) &&
          checkRecipeNameFilter(recipe.name) &&
          checkRecipeCustomFilters(recipe.tags) &&
          checkRecipeIngredientsFilters(recipe.ingredients)
      ),
    });
  }, [
    allRecipes,
    state.categoryFilter,
    state.customFilters,
    state.nameFilter,
    state.ingredientsFilters,
  ]);

  const setCategoryFilter = (category) => {
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: category });
  };

  const setNameFilter = (name) => {
    dispatch({ type: 'SET_NAME_FILTER', payload: name });
  };

  const toggleCustomFilter = (filter) => {
    dispatch({ type: 'TOGGLE_CUSTOM_FILTER', payload: filter });
  };

  const resetCustomFilters = () => {
    dispatch({ type: 'RESET_CUSTOM_FILTERS' });
  };

  const addIngredientsFilter = (ingredient) => {
    dispatch({ type: 'ADD_INGREDIENTS_FILTER', payload: ingredient });
  };

  const deleteIngredientsFilter = (ingredient) => {
    dispatch({ type: 'DELETE_INGREDIENTS_FILTER', payload: ingredient });
  };

  const deleteAllIngredientsFilters = () => {
    dispatch({ type: 'DELETE_ALL_INGREDIENTS_FILTERS' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCategoryFilter,
        setNameFilter,
        toggleCustomFilter,
        resetCustomFilters,
        addIngredientsFilter,
        deleteIngredientsFilter,
        deleteAllIngredientsFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
