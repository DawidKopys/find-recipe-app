import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipesList = ({ recipes }) => {
  return (
    <main className='recipes-container recipe-finder-app__recipes-container'>
      <div className='recipes-list'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeDetails={recipe} />
        ))}
      </div>
      <button className='btn-scroll-to-top recipes-container__btn-scroll-to-top'></button>
    </main>
  );
};

export default RecipesList;
