import React from 'react';

const Pagination = ({ quotesPerPage, totalQuotes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQuotes / quotesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    paginate(number);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='pagination-nav'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => handleClick(number)} className='page-link'>
              {' '}
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
