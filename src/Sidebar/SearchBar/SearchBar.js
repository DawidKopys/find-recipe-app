import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { useGlobalContext } from 'GlobalContext';

const SearchBar = () => {
  const { setNameFilter } = useGlobalContext();
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const debounceTimerId = setTimeout(() => {
      setNameFilter(userInput.toLocaleLowerCase());
    }, 500);
    return () => {
      clearTimeout(debounceTimerId);
    };
  }, [userInput]);

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
