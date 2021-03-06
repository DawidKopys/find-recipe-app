import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipesList = ({ recipes }) => {
  const scrolltoTop = () => {
    document.body.scrollTop = 0; /* For Safari */
    document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera */
  };

  return (
    <main className='recipes-container recipe-finder-app__recipes-container'>
      <div className='recipes-list'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeDetails={recipe} />
        ))}
      </div>
      <button
        className='btn-scroll-to-top recipes-container__btn-scroll-to-top'
        onClick={scrolltoTop}
      ></button>
    </main>
  );
};

export default RecipesList;
