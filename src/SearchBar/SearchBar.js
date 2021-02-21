import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <div className='recipe-search-container'>
      <label htmlFor='recipe-search-input' className='sr-only'>
        Find Recipe
      </label>
      <input
        type='text'
        id='recipe-search-input'
        name='recipe-search-input'
        placeholder='Find Recipe'
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
