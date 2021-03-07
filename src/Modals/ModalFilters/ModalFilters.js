import React, { useState } from 'react';
import './ModalFilters.css';
import '../Modals.css';

const ModalFilters = ({
  isOpen,
  closeModal,
  filters,
  activeFilters,
  toggleFilter,
  ingredientsFilter,
  addIngredientFilter,
  deleteIngredientFilter,
}) => {
  const [addIngredientsInput, setAddIngredientsInput] = useState('');

  const getKey = () => new Date().getTime().toString();

  return (
    <section className={`modal${isOpen ? ' modal--open' : ''}`}>
      <div className='modal-content modal__container'>
        <h2 className='modal-content__heading'>Add Filters</h2>
        <button className='modal-content__btn-exit btn' onClick={closeModal} />
        <ul>
          {filters.map((filter) => (
            <li className='modal-content__list-item' key={filter.id}>
              <button
                className={`modal-content__btn modal-content__btn--type--checkbox ${
                  activeFilters[filter.filterName] === true
                    ? 'modal-content__btn--checked'
                    : ''
                } btn`}
                onClick={() => toggleFilter(filter.filterName)}
              >
                {filter.filterName}
              </button>
            </li>
          ))}
        </ul>

        <h2 className='modal-content__heading'>Filter by ingredients</h2>
        <div className='ingredients-input modal-content__ingredients-input'>
          <label htmlFor='ingredients-search-input' className='sr-only'>
            Find Recipe
          </label>
          <input
            type='text'
            id='ingredients-search-input'
            name='ingredients-search-input'
            className='ingredients-input__input'
            placeholder='Add ingredients'
            value={addIngredientsInput}
            onChange={(e) => {
              setAddIngredientsInput(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addIngredientFilter(addIngredientsInput);
                setAddIngredientsInput('');
              }
            }}
          />
        </div>
        <div className='ingredients-list modal-content__ingredients-list'>
          {ingredientsFilter.map((ingredient) => (
            <button
              key={ingredient.id}
              title='Delete'
              className='ingredients-list__item btn'
              onClick={() => deleteIngredientFilter(ingredient.ingredientName)}
            >
              {ingredient.ingredientName}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalFilters;
