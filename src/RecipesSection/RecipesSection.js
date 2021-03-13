import React from 'react';
import RecipesList from './RecipesList/RecipesList';
import EmptyResultsAlert from './EmptyResultsAlert/EmptyResultsAlert';
import LoadingAlert from './LoadingAlert/LoadingAlert';
import RecipesListPagination from './RecipesList/RecipesListPagination';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import { useWindowResize } from '../useWindowResize';
import { useGlobalContext } from 'GlobalContext';

const RecipesSection = () => {
  const { isLoading, filteredRecipes } = useGlobalContext();
  const { windowWidth } = useWindowResize();

  if (isLoading) {
    return <LoadingAlert />;
  }
  if (filteredRecipes.length === 0) {
    return <EmptyResultsAlert />;
  }
  if (windowWidth < 800) {
    return (
      <>
        <RecipesList recipes={filteredRecipes} />
        <ScrollToTopButton />
      </>
    );
  }
  return <RecipesListPagination recipes={filteredRecipes} />;
};

export default RecipesSection;
