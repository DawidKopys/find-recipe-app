import React, { useEffect, useState } from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';
import Pagination from './Pagination/Pagination';

const RecipesList = ({ recipes }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastItem - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

export default RecipesList;
