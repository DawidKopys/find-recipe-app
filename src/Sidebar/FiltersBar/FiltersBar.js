import React from 'react';
import ChooseCategoryButton from '../ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from '../AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from '../ResetFiltersButton/ResetFiltersButton';
import './FiltersBar.css';

const FiltersBar = ({ activeFilters, setOpenedModal, resetFilters }) => {
  const isAnyFilterSet = () => {
    return Object.values(activeFilters).includes(true);
  };

  return (
    <section className='filters-bar sidebar__filters-bar'>
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
      {isAnyFilterSet() && <ResetFiltersButton resetFilters={resetFilters} />}
    </section>
  );
};

export default FiltersBar;
