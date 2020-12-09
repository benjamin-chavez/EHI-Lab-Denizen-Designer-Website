import React, { Component } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { selectDenizenTab, setNavSecondaryz } from "../../actions";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import ddLogo from "../../../assets/images/dd-logo-nav";
import Media from "react-bootstrap/Media";

class NavPrimary extends Component {
  render() {
    return (
      <div className='Nav-Primary'>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Brand href='/denizendesigner/home'>
            <img
              src={ddLogo}
              className='d-inline-block align-top'
              alt='Denizen Designer Logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Nav.Link
                href='/denizendesigner/home'
                className='nav-primary-text'
              >
                History of Participatory Design
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href='/denizendesigner/home'
                className='nav-primary-text'
              >
                Denizen Designer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavPrimary;
