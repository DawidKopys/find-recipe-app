import React from 'react';
import './RecipesList.css';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipesList = ({ recipes }) => {
  const smoothScrollToTop = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      document.body.scrollTop =
        currentScroll - currentScroll / 5; /* For Safari */
      document.documentElement.scrollTop =
        currentScroll -
        currentScroll / 5; /* For Chrome, Firefox, IE and Opera */
    }
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
        onClick={smoothScrollToTop}
      ></button>
    </main>
  );
};

export default RecipesList;
