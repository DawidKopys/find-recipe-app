import React, { useState } from 'react';
import './ModalFilters.css';
import '../Modals.css';
import filters from '../../filters';

const ModalFilters = ({ isOpen, closeModal }) => {
  const [addIngredientsInput, setAddIngredientsInput] = useState('');

  return (
    <section
      className={`modal add-filters-modal ${isOpen ? 'modal-open' : ''}`}
    >
      <div className='modal-content-container'>
        <h2>Add Filters</h2>
        <button className='btn btn-modal-exit' onClick={closeModal} />
        <ul>
          {filters.map((filter) => (
            <li>
              <button className='btn btn-modal btn-checkbox'>{filter}</button>
            </li>
          ))}
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
  );
};

export default ModalFilters;
