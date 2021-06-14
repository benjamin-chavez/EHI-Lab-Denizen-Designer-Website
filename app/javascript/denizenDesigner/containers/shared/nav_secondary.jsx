/* The original design essentially had two nav bars. Once the history of participatory design portion of the website is complete, Dr. Harrington might request the orignal navbar design be added. At the moment the primary nav bar only holds the DD logo and then renders the secondary navbar. The secondary navbar currently hold the actual navigation between pages.  */

import React, { Component, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDenizenTab } from '../../actions';
import { NavLink } from 'react-router-dom';

class NavSecondary extends Component {
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
      <div className='nav-secondaryy'>
        <ul className='list-inline-nav-sec'>
          {this.props.denizenTabs.map(this.renderDenizenTab)}
        </ul>
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
