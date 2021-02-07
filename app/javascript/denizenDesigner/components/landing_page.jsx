import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button, Image } from 'react-bootstrap';
import Logo from '../../../assets/images/dd-logo.svg';

const currentYear = new Date().getFullYear();

class LandingPage extends Component {
  render() {
    return (
      <div className='landing-pg'>
        <div className='wrapper '>
          <Row className='logo-landing-pg justify-content-sm-center  mb-2'>
            <Col className='' lg={5} md={7} sm={10} xs={12}>
              <Image
                src={Logo}
                className='d-inline-block align-top'
                alt='Denizen Designer Logo'
                fluid
              />{' '}
            </Col>
          </Row>
          <Row className='justify-content-sm-center mt-5'>
            <Col lg={4} md={6} sm={12} xs={12} className='mb-4'>
              <Link to={`/historyofparticipatorydesign/timeline`}>
                <Button variant='primary' size='lg' block>
                  History of Participatory Design
                </Button>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <Link to={`/denizendesigner/home`}>
                <Button variant='primary' size='lg' block>
                  Denizen Designer
                </Button>
              </Link>
            </Col>
          </Row>

          <div className='push'></div>
        </div>
        <Row className='justify-content-sm-center footer'>
          <Col lg={5} md={7} sm={10}>
            <footer className='footer-landing-pg py-2'>
              © {currentYear} -{' '}
              <span style={{ textDecorationLine: 'underline' }}>
                Equity & Health Innovations Design Research Lab
              </span>{' '}
              | All rights reserved (847) 497-5453‬ / depaulEHILab@gmail.com
            </footer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
