import React, { Component } from 'react';
import QuotesIndex from './quotes_index';

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

    return (
      <div>
        <div>
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
              return <li className='quote-filter-item'>{quoteCategory}</li>;
            })}
          </ul>
          <QuotesIndex />
        </div>
      </div>
    );
  }
}

export default Quotes;
