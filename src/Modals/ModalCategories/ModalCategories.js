import React from 'react';
import './ModalCategories.css';
import '../Modals.css';
import categories from '../../categories';
import { useGlobalContext } from 'GlobalContext';

const ModalCategories = ({ isOpen, closeModal }) => {
  const { categoryFilter, setCategoryFilter } = useGlobalContext();

  return (
    <section className={`modal${isOpen ? ' modal--open' : ''}`}>
      <div className='modal-content modal__container'>
        <h2 className='modal-content__heading'>Recipe Categories</h2>
        <button className='modal-content__btn-exit btn' onClick={closeModal} />
        <ul>
          {categories.map((category) => (
            <li className='modal-content__list-item' key={category.id}>
              <button
                className={`modal-content__btn modal-content__btn--type--radio ${
                  categoryFilter === category.categoryName
                    ? 'modal-content__btn--checked'
                    : ''
                } btn`}
                onClick={() => setCategoryFilter(category.categoryName)}
              >
                {category.categoryName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ModalCategories;
