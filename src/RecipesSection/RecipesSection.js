import React from 'react';
import RecipesList from './RecipesList/RecipesList';
import EmptyResultsAlert from '../EmptyResultsAlert/EmptyResultsAlert';

const RecipesSection = ({ recipes }) => {
  if (recipes.length === 0) {
    return <EmptyResultsAlert />;
  }
  return <RecipesList recipes={recipes} />;
};

export default RecipesSection;
