import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <Row className='justify-content-sm-center footer'>
          <Col lg={5} md={7} sm={10}>
            <footer className='footer-landing-pg py-2'>
              © {currentYear} -{' '}
              <span style={{ textDecorationLine: 'underline' }}>
                <a
                  className='main-site-link'
                  target='_blank'
                  href='https://ehilab.cdm.depaul.edu/'
                >
                  Equity & Health Innovations Design Research Lab
                </a>
              </span>{' '}
              <span>| All rights reserved </span> <br />
              <span>(847) 497-5453‬ / depaulEHILab@gmail.com</span>
            </footer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
