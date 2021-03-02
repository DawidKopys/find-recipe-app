import React from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination-nav recipes-container__pagination-nav'>
      <ul className='pagination'>
        {pageNumbers.map((pageNumber) => (
          <li
            onClick={() => paginate(pageNumber)}
            key={pageNumber}
            className={`pagination__list-item${
              currentPage === pageNumber ? ' pagination__list-item--active' : ''
            }`}
          >
            <a className='pagination__link'>{pageNumber}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
