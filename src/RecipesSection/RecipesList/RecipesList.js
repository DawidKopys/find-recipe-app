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
    </main>
  );
};

export default RecipesList;
