import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectHopdTab, setNavSecondaryz } from '../../actions';
import { Link, Link } from 'react-router';
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
        <Link
          className='denizen-tab'
          to={
            `/historyofparticipatorydesign/` +
            hopdTab.replace(/ /g, '').toLowerCase()
          }
        >
          {hopdTab}
        </Link>
      </li>
    );
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className='nav-secondaryy'>
              <ul className='list-inline-nav-sec'>
                {this.props.hopdTabs.map(this.renderHopdTab)}
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
