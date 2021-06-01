import React, { useEffect, useState, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuotesIndex from './quotes_index';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { selectQuoteCategory } from '../../actions';
import { Row, Col, Button, Collapse, Accordion, Card } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

class Quotes extends Component {
  constructor() {
    super();
    // this.state = { filterView: 'Click text' };
    this.state = { clicked: true };
  }

  handleClick = (quoteCategory) => {
    this.props.selectQuoteCategory(quoteCategory);
  };

  render() {
    const quoteCategoryPath = location.pathname
      .split('/')
      .pop()
      .replace('%20', '_')
      .toLowerCase();

    let quoteCategoriesTopRow = this.props.quoteCategories.slice(0, 7);
    let quoteCategoriesBtmRows = this.props.quoteCategories.slice(
      7,
      this.props.quoteCategories.length
    );

    // let filterView = 'Expand';

    const changeFilterView = () => {
      console.log('changeFilterVIew');
      // this.setState({ filterView: 'Collapse' });
      // this.setState({clicked: !this.state.clicked})
      // this.state.clicked === true ? this.state.clicked =
      this.setState({ clicked: !this.state.clicked });
    };

    return (
      <div>
        <Switch>
          <Redirect
            exact
            from='/denizendesigner/quotes'
            exact
            to='/denizendesigner/quotes/Community%20Building'
          />
        </Switch>
        <div>
          <Accordion defaultActiveKey='0'>
            <ul className='quote-filter-menu mb-0'>
              {quoteCategoriesTopRow.map((quoteCategory) => {
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
              <Accordion.Collapse eventKey='1'>
                <ul className='quote-filter-menu'>
                  {quoteCategoriesBtmRows.map((quoteCategory) => {
                    return (
                      <li
                        className='quote-filter-item'
                        key={quoteCategory}
                        onClick={() => this.handleClick(quoteCategory)}
                        role='presentation'
                      >
                        <NavLink
                          to={`/denizendesigner/quotes/${quoteCategory}`}
                        >
                          {quoteCategory}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Collapse>
            </ul>

            <Accordion.Toggle
              className='quotes-expand-btn pl-0 mb-3'
              as={Button}
              variant='link'
              eventKey='1'
              onMouseDown={(e) => e.preventDefault()}
              block
              onClick={changeFilterView}
            >
              {this.state.clicked ? 'Expand' : 'Collapse'}
            </Accordion.Toggle>
          </Accordion>
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
