import React, { Component } from 'react';
import QuotesIndex from './quotes_index';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

class Quotes extends Component {
  render() {
    let quoteCategories = [
      'Community Building',
      'Trust',
      'Power',
      'Space Making',
      'Increasing access',
      'Knowledge Building',
      'Responsibility',
      'Mutual Learning',
      'Change Making',
      'Rewards/Upsides/Positives (Need new name)',
      'Community Empowerment',
      'Future Implications',
      'Adaptation',
      'Design',
    ];
    const quoteCategoryPath = location.pathname
      .split('/')
      .pop()
      .replace('%20', '_')
      .toLowerCase();

    return (
      <div>
        <div>
          <p>{quoteCategoryPath}</p>
          {/* <ul className='quote-filter-menu'>
            <li className='quote-filter-item selected'>
              Made data meaningful for individuals
            </li>
            <li className='quote-filter-item'>Opportunity to advance</li>
            <li className='quote-filter-item'>Co-design</li>
          </ul> */}
          <ul className='quote-filter-menu'>
            <li className='quote-filter-item selected'>
              Made data meaningful for individuals
            </li>
            {quoteCategories.map((quoteCategory) => {
              return (
                <li className='quote-filter-item'>
                  <NavLink to={`/denizendesigner/quotes/${quoteCategory}`}>
                    {quoteCategory}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <QuotesIndex quoteCategoryPath={quoteCategoryPath} />
        </div>
      </div>
    );
  }
}

export default Quotes;
