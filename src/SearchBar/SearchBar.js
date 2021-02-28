import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <section className='search-bar sidebar__search-bar'>
      <label htmlFor='recipe-search-input' className='sr-only'>
        Find Recipe
      </label>
      <input
        type='text'
        id='recipe-search-input'
        name='recipe-search-input'
        className='search-bar__input'
        placeholder='Find Recipe'
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
    </section>
  );
};

export default SearchBar;
