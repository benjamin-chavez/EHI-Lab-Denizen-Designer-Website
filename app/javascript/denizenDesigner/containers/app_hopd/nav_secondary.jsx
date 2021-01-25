import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectHopdTab, setNavSecondaryz } from '../../actions';
import { Link, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NavSecondary extends Component {
  handleClick = (hopdTab) => {
    this.props.selectHopdTab(hopdTab);
  };

  renderHopdTab = (hopdTab) => {
    return (
      <li
        key={hopdTab}
        onClick={() => this.handleClick(hopdTab)}
        role='presentation'
      >
        <NavLink
          className='denizen-tab'
          to={
            `/historyofparticipatorydesign/` +
            hopdTab.replace(/ /g, '').toLowerCase()
          }
        >
          {hopdTab}
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
                {this.props.hopdTabs.map(this.renderHopdTab)}
                {/* testing */}
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
      selectHopdTab,
    },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    hopdTabs: reduxState.hopdTabs,
    NavSecondary: reduxState.NavSecondary,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(NavSecondary);
// export default NavSecondary;
