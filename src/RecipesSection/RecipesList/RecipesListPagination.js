import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';
import Pagination from './Pagination/Pagination';
import { usePagination } from './Pagination/usePagination';

const RecipesListPagination = ({ recipes }) => {
  const itemsPerPage = 9;
  const [currentPage, currentRecipes, paginate] = usePagination(
    recipes,
    itemsPerPage
  );

  return (
    <main className='recipes-container recipe-finder-app__recipes-container'>
      <div className='recipes-list'>
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeDetails={recipe} />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={recipes.length}
        currentPage={currentPage}
        paginate={paginate}
      ></Pagination>
    </main>
  );
};

export default RecipesListPagination;
