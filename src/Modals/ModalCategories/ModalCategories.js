import React from 'react';
import './ModalCategories.css';
import '../Modals.css';

const ModalCategories = ({ isOpen, closeModal }) => {
  return (
    <section
      className={`modal recipe-categories-modal ${isOpen ? 'modal-open' : ''}`}
    >
      <div className='modal-content-container'>
        <h2>Recipe Categories</h2>
        <button className='btn btn-modal-exit' onClick={closeModal} />
        <ul>
          <li>
            <button className='btn-modal btn-radio checked'>All</button>
          </li>
          <li>
            <button className='btn-modal btn-radio'>Main Courses</button>
          </li>
          <li>
            <button className='btn-modal btn-radio'>
              Breakfasts and suppers
            </button>
          </li>
          <li>
            <button className='btn-modal btn-radio'>Smoothies</button>
          </li>
          <li>
            <button className='btn-modal btn-radio'>Snacks</button>
          </li>
          <li>
            <button className='btn-modal btn-radio'>Salads</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ModalCategories;
