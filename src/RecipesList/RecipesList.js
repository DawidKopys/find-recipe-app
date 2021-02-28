import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipesList = ({ recipes }) => {
  return (
    <section className='recipes-container'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipeDetails={recipe} />
      ))}
    </section>
  );
};

export default RecipesList;
