import React, { useState, useRef } from 'react';
import './ModalFilters.css';
import '../Modals.css';
import Combobox from 'react-widgets/lib/Combobox';
import './Combobox.scss';

const ingredients = [
  'apple',
  'avocado',
  'banana',
  'beef',
  'bread',
  'broccoli',
  'broth',
  'butter',
  'carrot',
  'cherry tomatoes',
  'chicken',
  'chilli',
  'cocoa',
  'coconut oil',
  'coriander',
  'corn',
  'cream cheese',
  'cumin',
  'eggs',
  'flaxseed',
  'frozen fruits',
  'garlic',
  'ginger',
  'green bean',
  'green beans',
  'honey',
  'lemon',
  'lime',
  'mango',
  'milk',
  'millet',
  'oatmeal',
  'onion',
  'orange',
  'parma ham',
  'parsley',
  'peanut butter',
  'porridge oats',
  'poultry',
  'protein powder',
  'pumpkin seeds',
  'quinoa',
  'raspberries',
  'red beans',
  'red onion',
  'rice',
  'rucola',
  'sesame seeds',
  'skyr',
  'soy souce',
  'tomato paste',
  'tomatoes',
  'vanilla pudding',
  'wholegrain bun',
  'yoghurt',
];

const ModalFilters = ({
  isOpen,
  closeModal,
  filters,
  activeFilters,
  toggleFilter,
  ingredientsFilter,
  addIngredientsFilter,
  deleteIngredientsFilter,
}) => {
  const afterSelect = useRef(false);
  const [addIngredientsInput, setAddIngredientsInput] = useState('');

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
          <Combobox
            placeholder='Add ingredients'
            suggest={true}
            data={ingredients.filter((currentIngredient) => {
              /* Dont include already active ingredient filters in the options list */
              const arrayIngredientsFilter = ingredientsFilter.map(
                (ingredientObj) => ingredientObj.ingredientName
              );
              return !arrayIngredientsFilter.includes(currentIngredient);
            })}
            value={addIngredientsInput}
            onChange={(value) => {
              if (afterSelect.current === false) {
                setAddIngredientsInput(value);
              } else {
                afterSelect.current = false;
              }
            }}
            onSelect={(item) => {
              setAddIngredientsInput('');
              addIngredientsFilter(item);
              afterSelect.current = true;
            }}
            filter='startsWith'
          />
        </div>
        <div className='ingredients-list modal-content__ingredients-list'>
          {ingredientsFilter.map((ingredient) => (
            <button
              key={ingredient.id}
              title='Delete'
              className='ingredients-list__item btn'
              onClick={() => deleteIngredientsFilter(ingredient.ingredientName)}
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
