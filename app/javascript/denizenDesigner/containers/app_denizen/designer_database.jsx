import React, { Component } from 'react';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';

class DesignerDatabase extends Component {
  location = () => {
    useLocation();
  };

  renderDesignersIndex() {
    const city = location.pathname.split('/').pop();
    return (
      <div>
        <DesignersIndex city={city} />
      </div>
    );
  }

  render() {
    return (
      // <div className='container'>
      <div>
        <Row>
          <NavLink className='participate-btn' to='#'>
            Participate
          </NavLink>
        </Row>
        <Row className='designer-city-banner my-2'>
          <Col>
            <Dropdown>
              <Dropdown.Toggle
                variant='outline-light'
                id='dropdown-basic'
                classname='dropdownButon'
              >
                Cities
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <NavLink to='/denizendesigner/designerdatabase/ATL'>
                    Atlanta
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to='/denizendesigner/designerdatabase/BST'>
                    Boston
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to='/denizendesigner/designerdatabase/CHI'>
                    Chicago
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to='/denizendesigner/designerdatabase/DT'>
                    Detroit
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <div className='mt-3'>
          {/* <ul className='designer-city-menu'>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/ATL'>ATL</NavLink>
            </li>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/BST'>BST</NavLink>
            </li>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/CHI'>CHI</NavLink>
            </li>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/DT'>DT</NavLink>
            </li>
          </ul> */}
          {this.renderDesignersIndex()}
          {/* <ParticipantList /> */}
        </div>
      </div>
    );
  }
}

export default DesignerDatabase;
