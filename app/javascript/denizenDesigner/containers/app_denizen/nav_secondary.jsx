import React, { Component, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDenizenTab, setNavSecondaryz } from '../../actions';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NavSecondary extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedDenizenTab !== this.props.selectedDenizenTab) {
  //     this.props.fetchMessages(nextProps.selectedDenizenTab);
  //   }
  // }

  handleClick = (denizenTab) => {
    this.props.selectDenizenTab(denizenTab);
  };

  renderDenizenTab = (denizenTab) => {
    return (
      <li
        key={denizenTab}
        onClick={() => this.handleClick(denizenTab)}
        role='presentation'
      >
        <NavLink
          className='denizen-tab'
          to={`/denizendesigner/` + denizenTab.replace(/ /g, '').toLowerCase()}
        >
          {denizenTab}
        </NavLink>
      </li>
    );
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className='nav-secondaryy'>
              <ul className='List-Inline'>
                {this.props.denizenTabs.map(this.renderDenizenTab)}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // setNavSecondary: setNavSecondary
      selectDenizenTab,
    },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    denizenTabs: reduxState.denizenTabs,
    NavSecondary: reduxState.NavSecondary,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(NavSecondary);
