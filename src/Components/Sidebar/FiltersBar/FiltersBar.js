import React from 'react';
import ChooseCategoryButton from '../ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from '../AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from '../ResetFiltersButton/ResetFiltersButton';
import './FiltersBar.css';
import { useGlobalContext } from 'GlobalContext';

const FiltersBar = ({ openCategoriesModal, openFiltersModal }) => {
  const { customFilters, ingredientsFilters } = useGlobalContext();

  const getNumberOfActiveFilters = () => {
    const getValueOccurences = ({ array, value }) => {
      return array.reduce(
        (occurences, currentValue) =>
          currentValue === value ? occurences + 1 : occurences,
        0
      );
    };

    return (
      getValueOccurences({
        array: Object.values(customFilters),
        value: true,
      }) + ingredientsFilters.length
    );
  };

  return (
    <section className='filters-bar sidebar__filters-bar'>
      <ChooseCategoryButton onClick={openCategoriesModal} />
      <AddFiltersButton
        numberOfActiveFilters={getNumberOfActiveFilters()}
        onClick={openFiltersModal}
      />
      {getNumberOfActiveFilters() !== 0 && <ResetFiltersButton />}
    </section>
  );
};

export default FiltersBar;
