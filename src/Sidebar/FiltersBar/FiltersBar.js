import React from 'react';
import ChooseCategoryButton from '../ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from '../AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from '../ResetFiltersButton/ResetFiltersButton';
import './FiltersBar.css';
import { useGlobalContext } from 'GlobalContext';

const FiltersBar = ({ setOpenedModal }) => {
  const { customFilters } = useGlobalContext();

  const getNumberOfActiveFilters = () => {
    const getOccurences = ({ array, value }) => {
      return array.reduce(
        (occurences, currentValue) =>
          currentValue === value ? occurences + 1 : occurences,
        0
      );
    };

    return getOccurences({ array: Object.values(customFilters), value: true });
  };

  return (
    <section className='filters-bar sidebar__filters-bar'>
      <ChooseCategoryButton
        onClick={() => {
          setOpenedModal('recipe-categories-modal');
        }}
      />
      <AddFiltersButton
        numbeOfActiveFilters={getNumberOfActiveFilters()}
        onClick={() => {
          setOpenedModal('add-filters-modal');
        }}
      />
      {getNumberOfActiveFilters() !== 0 && <ResetFiltersButton />}
    </section>
  );
};

export default FiltersBar;
