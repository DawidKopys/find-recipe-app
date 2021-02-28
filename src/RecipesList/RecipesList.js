import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipesList = ({ recipes }) => {
  return (
    <main className='recipes-list recipe-finder-app__recipes-list'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipeDetails={recipe} />
      ))}
    </main>
  );
};

export default RecipesList;
