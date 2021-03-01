import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({
  recipeDetails: {
    id,
    name,
    macro: { calories, protein, carbs, fats },
    imageMobile,
    imageDesktop,
  },
}) => {
  return (
    <div className='recipe-card recipes-list__recipe-card' key={id}>
      <img
        className='recipe-card__img'
        srcSet={`${imageMobile} 105w, ${imageDesktop} 640w`}
        sizes='(max-width: 800px) 105px, 150px'
        src={imageMobile}
        alt={name}
      />
      <div className='recipe-info recipe-card__recipe-info'>
        <h3 className='recipe-info__recipe-name'>{name}</h3>
        <div className='recipe-macro'>
          <p className='recipe-macro__title'>Macro per serving:</p>
          <div className='macro-details recipe-macro__macro-details'>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-name'>{calories}</h4>
              <p className='macro-details__macro-value'>kcal</p>
            </div>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-name'>{protein}</h4>
              <p className='macro-details__macro-value'>protein</p>
            </div>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-name'>{carbs}</h4>
              <p className='macro-details__macro-value'>carbs</p>
            </div>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-name'>{fats}</h4>
              <p className='macro-details__macro-value'>fats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
