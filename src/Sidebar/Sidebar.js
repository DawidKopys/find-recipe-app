import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchBar from './SearchBar/SearchBar';
import FiltersBar from './FiltersBar/FiltersBar';
import ModalCategories from '../Modals/ModalCategories/ModalCategories';
import ModalFilters from '../Modals/ModalFilters/ModalFilters';
import { useWindowResize } from '../useWindowResize';

const Sidebar = ({
  activeCategory,
  setActiveCategory,
  filters,
  activeFilters,
  toggleFilter,
  setNameFilter,
  resetFilters,
  ingredientsFilter,
  addIngredientFilter,
  deleteIngredientFilter,
}) => {
  const [openedModal, setOpenedModal] = useState('none');
  const { windowWidth } = useWindowResize();

  const closeModal = () => {
    setOpenedModal('none');
  };

  useEffect(() => {
    if (openedModal !== 'none') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openedModal]);

  useEffect(() => {
    if (windowWidth >= 800 && openedModal !== 'none') {
      setOpenedModal('none');
    }
  }, [windowWidth]);

  return (
    <section className='sidebar recipe-finder-app__sidebar'>
      <SearchBar setNameFilter={setNameFilter} />
      <FiltersBar
        activeCategory={activeCategory}
        activeFilters={activeFilters}
        setOpenedModal={setOpenedModal}
        resetFilters={resetFilters}
      />
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
        ingredientsFilter={ingredientsFilter}
        addIngredientFilter={addIngredientFilter}
        deleteIngredientFilter={deleteIngredientFilter}
      />
    </section>
  );
};

export default Sidebar;
