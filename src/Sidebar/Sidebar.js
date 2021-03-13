import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchBar from './SearchBar/SearchBar';
import FiltersBar from './FiltersBar/FiltersBar';
import ModalCategories from '../Modals/ModalCategories/ModalCategories';
import ModalFilters from '../Modals/ModalFilters/ModalFilters';
import { useWindowResize } from '../useWindowResize';

const Sidebar = () => {
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
      <SearchBar />
      <FiltersBar setOpenedModal={setOpenedModal} />
      <ModalCategories
        isOpen={openedModal === 'recipe-categories-modal'}
        closeModal={closeModal}
      />
      <ModalFilters
        isOpen={openedModal === 'add-filters-modal'}
        closeModal={closeModal}
      />
    </section>
  );
};

export default Sidebar;
