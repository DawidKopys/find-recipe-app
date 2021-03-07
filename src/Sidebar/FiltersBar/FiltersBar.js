import React from 'react';
import ChooseCategoryButton from '../ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from '../AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from '../ResetFiltersButton/ResetFiltersButton';
import './FiltersBar.css';

const FiltersBar = ({
  activeCategory,
  activeFilters,
  setOpenedModal,
  resetFilters,
}) => {
  const getNumberOfActiveFilters = () => {
    const getOccurences = ({ array, value }) =>
      array.reduce(
        (occurences, currentValue) =>
          currentValue === value ? occurences + 1 : occurences,
        0
      );

    return getOccurences({ array: Object.values(activeFilters), value: true });
  };

  return (
    <section className='filters-bar sidebar__filters-bar'>
      <ChooseCategoryButton
        activeCategory={activeCategory}
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
      {getNumberOfActiveFilters() !== 0 && (
        <ResetFiltersButton resetFilters={resetFilters} />
      )}
    </section>
  );
};

export default FiltersBar;
