import React from 'react';
import './RecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  recipeDetails: {
    id,
    name,
    macro: { calories, protein, carbs, fats },
    imageURL,
  },
}) => {
  return (
    <Link
      to={`/${encodeURI(name)}`}
      className='recipe-card recipes-list__recipe-card'
      key={id}
    >
      <img className='recipe-card__img' src={imageURL} alt={name} />
      <div className='recipe-info recipe-card__recipe-info'>
        <h3 className='recipe-info__recipe-name'>{name}</h3>
        <div className='recipe-macro'>
          <p className='recipe-macro__title'>Macro per serving:</p>
          <div className='macro-details recipe-macro__macro-details'>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-value'>{calories}</h4>
              <p className='macro-details__macro-name'>kcal</p>
            </div>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-value'>{protein}</h4>
              <p className='macro-details__macro-name'>protein</p>
            </div>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-value'>{carbs}</h4>
              <p className='macro-details__macro-name'>carbs</p>
            </div>
            <div className='macro-details__item'>
              <h4 className='macro-details__macro-value'>{fats}</h4>
              <p className='macro-details__macro-name'>fats</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
