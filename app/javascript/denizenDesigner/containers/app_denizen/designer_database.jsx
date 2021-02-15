import React, { Component } from 'react';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
  Image,
  Container,
} from 'react-bootstrap';

import CitiesBannerGraphic from '../../../../assets/images/citiesBannerGraphic.svg';
import DocumentIcon from '../../../../assets/images/documentIcon.svg';

class DesignerDatabase extends Component {
  location = () => {
    useLocation();
  };

  renderDesignersIndex(city) {
    // const city = location.pathname.split('/').pop();
    return (
      <div>
        <DesignersIndex city={city} />
      </div>
    );
  }

  render() {
    const city = location.pathname.split('/').pop();
    return (
      <div className=''>
        <Container fluid>
          <Row>
            <NavLink className='participate-btn' to='#'>
              <div>
                {'  '}
                <Image src={DocumentIcon} alt='Document Icon' fluid />
                {'  '}
              </div>
              <span className='pl-1 participate-btn-text'> Participate</span>
            </NavLink>
          </Row>
          <Row className='designer-city-banner my-2'>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant='outline-light'
                  id='dropdown-basic'
                  className='dropdownButon'
                >
                  {city == 'designerdatabase' ? 'Cities' : city}
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
            <Col xs={8} className='cities-banner-graphic'>
              <div className='cities-banner-graphic-img'>
                {' '}
                <Image src={CitiesBannerGraphic} alt='Cities Graphic' fluid />
              </div>
            </Col>
          </Row>
          <div className='mt-3'>
            {this.renderDesignersIndex(city)}
            {/* <ParticipantList /> */}
          </div>
        </Container>
      </div>
    );
  }
}

export default DesignerDatabase;
