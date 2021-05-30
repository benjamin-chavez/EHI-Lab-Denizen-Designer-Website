import React from 'react';

const Pagination = ({ quotesPerPage, totalQuotes, paginate }) => {
  const pageNumbers = [];
  let active = 1;

  for (let i = 1; i <= Math.ceil(totalQuotes / quotesPerPage); i++) {
    pageNumbers.push(i);
  }

  const setActive = () => {
    active = 2;
  };

  const handleClick = (number, e) => {
    e.target.parentElement.className = 'page-item active';
    console.log(e.target.parentElement);
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
            <a onClick={(e) => handleClick(number, e)} className='page-link'>
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
