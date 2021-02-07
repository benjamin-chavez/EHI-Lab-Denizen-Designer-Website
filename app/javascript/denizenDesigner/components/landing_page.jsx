import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button, Image } from 'react-bootstrap';
import Logo from '../../../assets/images/dd-logo.svg';

// d
class LandingPage extends Component {
  render() {
    return (
      <div className='landing-pg'>
        <Row className='logo-landing-pg justify-content-sm-center'>
          <Col sm='auto'>
            <Image
              src={Logo}
              className='d-inline-block align-top'
              alt='Denizen Designer Logo'
              fluid
            />{' '}
          </Col>
        </Row>
        <Row className='justify-content-sm-center'>
          <Col sm='auto'>
            <Link to={`/historyofparticipatorydesign/timeline`}>
              <div className='btn-landing-pg '>
                History of Participatory Design
              </div>
            </Link>
            <Link to={`/denizendesigner/home`}>
              <div className='btn-landing-pg'>Denizen Designer</div>
            </Link>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <footer className='footer-landing-pg'>
              © YYYYY - Equity & Health Innovations Design Research Lab | All
              rights reserved (847) 497-5453‬ / depaulEHILab@gmail.com
            </footer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
