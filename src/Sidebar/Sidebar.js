import React, { useState } from 'react';
import './Sidebar.css';
import SearchBar from '../SearchBar/SearchBar';
import ChooseCategoryButton from '../ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from '../AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from '../ResetFiltersButton/ResetFiltersButton';
import ModalCategories from '../Modals/ModalCategories/ModalCategories';
import ModalFilters from '../Modals/ModalFilters/ModalFilters';

const Sidebar = ({
  activeCategory,
  setActiveCategory,
  filters,
  activeFilters,
  toggleFilter,
  setNameFilter,
}) => {
  const [openedModal, setOpenedModal] = useState('none');

  const closeModal = () => {
    setOpenedModal('none');
  };

  return (
    <section className='sidebar recipe-finder-app__sidebar'>
      <SearchBar setNameFilter={setNameFilter} />
      <ModalCategories
        isOpen={openedModal === 'recipe-categories-modal'}
        closeModal={closeModal}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ModalFilters
        isOpen={openedModal === 'add-filters-modal'}
        closeModal={closeModal}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        filters={filters}
      />
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
        <ResetFiltersButton />
      </section>
    </section>
  );
};

export default Sidebar;
