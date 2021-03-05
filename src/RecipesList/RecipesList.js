import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';
import Pagination from './Pagination/Pagination';
import { usePagination } from './Pagination/usePagination';
import { useWindowResize } from './useWindowResize';

const RecipesList = ({ recipes }) => {
  const itemsPerPage = 9;
  const [currentPage, currentRecipes, paginate] = usePagination(
    recipes,
    itemsPerPage
  );
  const { windowWidth } = useWindowResize();

  return (
    <main className='recipes-container recipe-finder-app__recipes-container'>
      {windowWidth > 800 ? (
        <>
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
        </>
      ) : (
        <div className='recipes-list'>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipeDetails={recipe} />
          ))}
        </div>
      )}
    </main>
  );
};

export default RecipesList;
