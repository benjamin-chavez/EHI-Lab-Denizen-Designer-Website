import React, { Component } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { selectDenizenTab, setNavSecondaryz } from "../../actions";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// import test from "../../../assets/images/dd-logo-nav";
import Media from "react-bootstrap/Media";
import NavLogo from "../../../../assets/images/dd-logo-nav.svg";

class NavPrimary extends Component {
  render() {
    return (
      <div className='nav-primary'>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Brand as={Link} to='/' href='/'>
            <img
              src={NavLogo}
              className='d-inline-block align-top'
              alt='Denizen Designer Logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Nav.Link
                as={Link}
                href='/historyofparticipatorydesign/timeline'
                to='/historyofparticipatorydesign/timeline'
                className='nav-primary-text'
              >
                History of Participatory Design
              </Nav.Link>
              <Nav.Link
                as={Link}
                eventKey={2}
                href='/denizendesigner/home'
                to='/denizendesigner/home'
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
