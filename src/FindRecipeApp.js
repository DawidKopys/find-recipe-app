import React, { useState } from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import SearchBar from './SearchBar/SearchBar';
import ChooseCategoryButton from './ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from './AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from './ResetFiltersButton/ResetFiltersButton';

const FindRecipeApp = () => {
  const [addIngredientsInput, setAddIngredientsInput] = useState('');
  const [openedModal, setOpenedModal] = useState('none');

  return (
    <div className='recipe-finder-app'>
      <section className='sidebar'>
        <SearchBar />
        <section
          className={`modal recipe-categories-modal ${
            openedModal === 'recipe-categories-modal' ? 'modal-open' : ''
          }`}
        >
          <div className='modal-content-container'>
            <h2>Recipe Categories</h2>
            <button
              className='btn btn-modal-exit'
              onClick={() => {
                setOpenedModal('none');
              }}
            />
            <ul>
              <li>
                <button className='btn-modal btn-radio checked'>All</button>
              </li>
              <li>
                <button className='btn-modal btn-radio'>Main Courses</button>
              </li>
              <li>
                <button className='btn-modal btn-radio'>
                  Breakfasts and suppers
                </button>
              </li>
              <li>
                <button className='btn-modal btn-radio'>Smoothies</button>
              </li>
              <li>
                <button className='btn-modal btn-radio'>Snacks</button>
              </li>
              <li>
                <button className='btn-modal btn-radio'>Salads</button>
              </li>
            </ul>
          </div>
        </section>
        <section
          className={`modal add-filters-modal ${
            openedModal === 'add-filters-modal' ? 'modal-open' : ''
          }`}
        >
          <div className='modal-content-container'>
            <h2>Add Filters</h2>
            <button
              className='btn btn-modal-exit'
              onClick={() => {
                setOpenedModal('none');
              }}
            />
            <ul>
              <li>
                <button className='btn btn-modal btn-checkbox checked'>
                  Vegetarian
                </button>
              </li>
              <li>
                <button className='btn btn-modal btn-checkbox'>Vegan</button>
              </li>
              <li>
                <button className='btn btn-modal btn-checkbox checked'>
                  Keto
                </button>
              </li>
              <li>
                <button className='btn btn-modal btn-checkbox'>
                  Gluten Free
                </button>
              </li>
              <li>
                <button className='btn btn-modal btn-checkbox'>
                  Diary Free
                </button>
              </li>
              <li>
                <button className='btn btn-modal btn-checkbox'>
                  High Protein
                </button>
              </li>
            </ul>
            <h2>Filter by ingredients</h2>
            <div className='ingredients-search-input-container'>
              <label htmlFor='ingredients-search-input' className='sr-only'>
                Find Recipe
              </label>
              <input
                type='text'
                id='ingredients-search-input'
                name='ingredients-search-input'
                placeholder='Add ingredients'
                value={addIngredientsInput}
                onChange={(e) => {
                  setAddIngredientsInput(e.target.value);
                }}
              />
            </div>
            <div className='ingredients-container'>
              <button className='btn btn-ingredient'>Eggs</button>
              <button className='btn btn-ingredient'>Spinach</button>
              <button className='btn btn-ingredient'>Avocado</button>
              <button className='btn btn-ingredient'>Banana</button>
              <button className='btn btn-ingredient'>Garlic</button>
              <button className='btn btn-ingredient'>Toast Bread</button>
            </div>
          </div>
        </section>
        <section className='filters-bar'>
          <ChooseCategoryButton
            onClick={() => {
              setOpenedModal('recipe-categories-modal');
            }}
          />
          <AddFiltersButton
            onClick={() => {
              setOpenedModal('add-filters-modal');
            }}
          />
          <ResetFiltersButton />
        </section>
      </section>
      <section className='recipes-container'>
        {recipes.map((recipe) => {
          const {
            id,
            name,
            macro: { calories, protein, carbs, fats },
            image,
          } = recipe;
          return (
            <div className='recipe-card' key={id}>
              <img src={image} alt={name} />
              <div className='recipe-info-container'>
                <h3>{name}</h3>
                <div className='recipe-macro-container'>
                  <p className='recipe-macro-per-serving'>Macro per serving:</p>
                  <div className='recipe-macro'>
                    <div className='recipe-macro-detail'>
                      <p>{calories}</p>
                      <h4>kcal</h4>
                    </div>
                    <div className='recipe-macro-detail'>
                      <p>{protein}</p>
                      <h4>protein</h4>
                    </div>
                    <div className='recipe-macro-detail'>
                      <p>{carbs}</p>
                      <h4>carbs</h4>
                    </div>
                    <div className='recipe-macro-detail'>
                      <p>{fats}</p>
                      <h4>fats</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FindRecipeApp;
