// This is the Base component for the quotes page. The actual quotes are rendered through the quotes index component.

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuotesIndex from '../QuotesScreen/quotes_index';
import { Link } from 'react-router';
import { selectQuoteCategory } from '../../../actions';
import { Button, Accordion, Container } from 'react-bootstrap';

import { withRouter } from 'react-router';

class Quotes extends Component {
  constructor() {
    super();
    this.state = { clicked: true };
  }

  componentDidMount() {
    // If we're at the base quotes route, redirect to the first category
    if (this.props.location.pathname === '/denizendesigner/quotes') {
      this.props.router.replace('/denizendesigner/quotes/Community%20Building');
    }
  }

  handleClick = (quoteCategory) => {
    this.props.selectQuoteCategory(quoteCategory);
  };

  render() {
    const quoteCategoryPath = decodeURIComponent(location.pathname
      .split('/')
      .pop())
      .replace(/ /g, '_')
      .toLowerCase();
    

    let quoteCategoriesTopRow = this.props.quoteCategories.slice(0, 7);
    let quoteCategoriesBtmRows = this.props.quoteCategories.slice(
      7,
      this.props.quoteCategories.length
    );

    const changeFilterView = () => {
      this.setState({ clicked: !this.state.clicked });
    };

    return (
      <Container fluid>
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
                    <Link to={`/denizendesigner/quotes/${quoteCategory}`}>
                      {quoteCategory}
                    </Link>
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
                        <Link
                          to={`/denizendesigner/quotes/${quoteCategory}`}
                        >
                          {quoteCategory}
                        </Link>
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
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectQuoteCategory,
    },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedQuoteCategories: reduxState.selectedQuoteCategories,
    quoteCategories: reduxState.quoteCategories,
  };
}

export default withRouter(connect(mapReduxStateToProps, mapDispatchToProps)(Quotes));
