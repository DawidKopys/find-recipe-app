import React from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPageNumber = pageNumbers.length;

  return (
    <nav className='pagination-nav recipes-container__pagination-nav'>
      <ul className='pagination'>
        <li
          className={`pagination__list-item ${
            currentPage === 1
              ? ' pagination__list-item--disabled'
              : ' pagination__list-item--active'
          }`}
        >
          <a
            onClick={() => paginate(currentPage - 1)}
            className={`pagination__link${
              currentPage === 1 ? ' pagination__link--disabled' : ''
            }`}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            onClick={() => paginate(pageNumber)}
            key={pageNumber}
            className={`pagination__list-item${
              currentPage === pageNumber
                ? ' pagination__list-item--current'
                : ' pagination__list-item--active'
            }`}
          >
            <a
              className={`pagination__link${
                currentPage === pageNumber ? ' pagination__link--current' : ''
              }`}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li
          className={`pagination__list-item ${
            currentPage === lastPageNumber
              ? ' pagination__list-item--disabled'
              : ' pagination__list-item--active'
          }`}
        >
          <a
            onClick={() => paginate(currentPage + 1)}
            className={`pagination__link${
              currentPage === lastPageNumber
                ? ' pagination__link--disabled'
                : ''
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
