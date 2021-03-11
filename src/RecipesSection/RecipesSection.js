import React from 'react';
import RecipesList from './RecipesList/RecipesList';
import EmptyResultsAlert from './EmptyResultsAlert/EmptyResultsAlert';
import LoadingAlert from './LoadingAlert/LoadingAlert';
import RecipesListPagination from './RecipesList/RecipesListPagination';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import { useWindowResize } from '../useWindowResize';

const RecipesSection = ({ isLoading, recipes }) => {
  const { windowWidth } = useWindowResize();

  if (isLoading) {
    return <LoadingAlert />;
  }
  if (recipes.length === 0) {
    return <EmptyResultsAlert />;
  }
  if (windowWidth < 800) {
    return (
      <>
        <RecipesList recipes={recipes} />
        <ScrollToTopButton />
      </>
    );
  }
  return <RecipesListPagination recipes={recipes} />;
};

export default RecipesSection;
