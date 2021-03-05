import React from 'react';
import RecipesList from './RecipesList/RecipesList';
import EmptyResultsAlert from '../EmptyResultsAlert/EmptyResultsAlert';
import RecipesListPagination from './RecipesList/RecipesListPagination';
import { useWindowResize } from './useWindowResize';

const RecipesSection = ({ recipes }) => {
  const { windowWidth } = useWindowResize();

  if (recipes.length === 0) {
    return <EmptyResultsAlert />;
  }
  if (windowWidth < 800) {
    return <RecipesList recipes={recipes} />;
  }
  return <RecipesListPagination recipes={recipes} />;
};

export default RecipesSection;
