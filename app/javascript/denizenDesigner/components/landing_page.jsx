import React, { Component } from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class LandingPage extends Component {
  render() {
    return (
      <div className='landing-pg'>
        <Row className='logo-landing-pg justify-content-md-center'>
          <Col md='auto'>
            <img
              src='../../../assets/images/dd-logo.svg'
              className='d-inline-block align-top'
              alt='Denizen Designer Logo'
            />
          </Col>
        </Row>
        <Row className='justify-content-sm-center'>
          <Link to={`/denizendesigner/home`}>
            <div className='btn-landing-pg'>
              History of Participatory Design
            </div>
          </Link>
          <Link to={`/denizendesigner/home`}>
            <div className='btn-landing-pg'>Denizen Designer</div>
          </Link>
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
