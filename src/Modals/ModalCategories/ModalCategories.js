import React from 'react';
import './ModalCategories.css';
import '../Modals.css';
import categories from '../../categories';

const ModalCategories = ({
  isOpen,
  closeModal,
  activeCategory,
  setActiveCategory,
}) => {
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
                  activeCategory === category.categoryName
                    ? 'modal-content__btn--checked'
                    : ''
                } btn`}
                onClick={() => setActiveCategory(category.categoryName)}
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
