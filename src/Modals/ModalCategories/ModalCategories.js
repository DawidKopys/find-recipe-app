import React from 'react';
import './ModalCategories.css';
import '../Modals.css';
import categories from '../../categories';

const ModalCategories = ({ isOpen, closeModal }) => {
  return (
    <section
      className={`modal recipe-categories-modal ${isOpen ? 'modal-open' : ''}`}
    >
      <div className='modal-content-container'>
        <h2>Recipe Categories</h2>
        <button className='btn btn-modal-exit' onClick={closeModal} />
        <ul>
          {categories.map((category) => (
            <li>
              <button
                className={`btn btn-modal btn-radio ${
                  category === 'all' ? 'checked' : ''
                }`}
              >
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
