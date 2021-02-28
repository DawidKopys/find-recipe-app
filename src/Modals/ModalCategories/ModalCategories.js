import React from 'react';
import './ModalCategories.css';
import '../Modals.css';
import categories from '../../categories';

const ModalCategories = ({ isOpen, closeModal }) => {
  return (
    <section className={`modal${isOpen ? ' modal--open' : ''}`}>
      <div className='modal-content modal__container'>
        <h2 className='modal-content__heading'>Recipe Categories</h2>
        <button className='modal-content__btn-exit btn' onClick={closeModal} />
        <ul>
          {categories.map((category) => (
            <li className='modal-content__list-item'>
              <button className='modal-content__btn modal-content__btn--type--radio btn'>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ModalCategories;
