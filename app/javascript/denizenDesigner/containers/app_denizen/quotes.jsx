import React, { useEffect, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuotesIndex from './quotes_index';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { selectQuoteCategory } from '../../actions';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

class Quotes extends Component {
  handleClick = (quoteCategory) => {
    this.props.selectQuoteCategory(quoteCategory);
  };

  render() {
    const quoteCategoryPath = location.pathname
      .split('/')
      .pop()
      .replace('%20', '_')
      .toLowerCase();

    return (
      <div>
        <Switch>
          <Redirect
            exact
            from='/denizendesigner/quotes'
            exact
            to='/denizendesigner/quotes/All%20Quotes'
          />
        </Switch>
        <div>
          <ul className='quote-filter-menu'>
            {/* <li className='quote-filter-item'>
              <NavLink to={`/denizendesigner/quotes/all`}>All Quotes</NavLink>
            </li> */}
            {this.props.quoteCategories.map((quoteCategory) => {
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
    // selectQuoteCategory: reduxState.selectedQuoteCategory,
    selectedQuoteCategories: reduxState.selectedQuoteCategories,
    quoteCategories: reduxState.quoteCategories,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Quotes);
