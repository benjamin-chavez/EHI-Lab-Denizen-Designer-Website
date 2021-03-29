import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuotesIndex from './quotes_index';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { selectQuoteCategory } from '../../actions';

class Quotes extends Component {
  handleClick = (quoteCategory) => {
    this.props.selectQuoteCategory(quoteCategory);
  };

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
          <ul className='quote-filter-menu'>
            <li className='quote-filter-item'>
              <NavLink to={`/denizendesigner/quotes/quotes`}>
                All Quotes
              </NavLink>
            </li>
            {quoteCategories.map((quoteCategory) => {
              return (
                <li
                  className='quote-filter-item'
                  key={quoteCategory}
                  onClick={() => this.handleClick(quoteCategory)}
                  role='presentation'
                >
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

// export default Quotes;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // setNavSecondary: setNavSecondary
      selectQuoteCategory,
    },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectQuoteCategory: reduxState.selectedQuoteCategory,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Quotes);
