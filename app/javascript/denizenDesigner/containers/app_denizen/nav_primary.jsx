import React, { Component } from 'react';
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { selectDenizenTab, setNavSecondaryz } from "../../actions";
import { Link, NavLink } from 'react-router-dom';
import NavSecondary from './nav_secondary';

import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Image,
} from 'react-bootstrap';

import { useLocation } from 'react-router';

// import test from "../../../assets/images/dd-logo-nav";
import Media from 'react-bootstrap/Media';
import NavLogo from '../../../../assets/images/dd-logo-nav.svg';
import NavLogoMobile from '../../../../assets/images/dd-logo-nav-mobile.svg';

class NavPrimary extends Component {
  render() {
    return (
      <div className='nav-primary px-0'>
        <Navbar
          fixed='top'
          // className='px-0 navredtest'
          className='fixed-navbar '
          collapseOnSelect
          expand='lg'
        >
          <Container fluid className='pl-0'>
            <Row>
              <Col md={12} className='pb-2'>
                <Navbar.Brand
                  as={Link}
                  to='/'
                  href='/'
                  className='nav-brand-mobile'
                >
                  <img
                    // src={NavLogo}
                    src={NavLogoMobile}
                    className='d-inline-block align-top nav-brand-mobile'
                    alt='Denizen Designer Logo'
                  />
                </Navbar.Brand>
                <Navbar.Brand
                  as={Link}
                  to='/'
                  href='/'
                  className='nav-brand-desktop'
                >
                  <img
                    // src={NavLogo}
                    src={NavLogo}
                    className='d-inline-block align-top nav-brand-desktop'
                    alt='Denizen Designer Logo'
                  />
                </Navbar.Brand>
                <Nav className='mr-auto rr'></Nav>
                <div className='pr-0'>
                  {/* UNCOMMENT THE FOLLOWING BLOCK OF CODE TO SHOW THE HOPD BUTTON */}
                  {/* <NavLink
                to='/historyofparticipatorydesign'
                className='nav-primary-text mobile-nav'
              >
                History of Participatory Design
              </NavLink> */}
                  {/* <NavLink
                // as={Link}
                // eventKey={2}
                // href='/denizendesigner/'
                to='/denizendesigner'
                className='nav-primary-text mobile-nav'
              >
                Denizen Designer
              </NavLink> */}
                </div>
                {/* <Navbar.Toggle
              aria-controls='responsive-navbar-nav'
              className='pr-0'
            /> */}
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='mr-auto'></Nav>
                  <Nav>
                    {/* UNCOMMENT THE FOLLOWING BLOCK OF CODE TO SHOW THE HOPD BUTTON */}
                    {/* <NavLink
                  to='/historyofparticipatorydesign'
                  className='nav-primary-text desktop-nav'
                >
                  History of Participatory Design
                </NavLink> */}
                    {/* <NavLink
                  // as={Link}
                  // eventKey={2}
                  // href='/denizendesigner/'
                  to='/denizendesigner'
                  className='nav-primary-text desktop-nav'
                >
                  Denizen Designer
                </NavLink> */}
                  </Nav>
                </Navbar.Collapse>
              </Col>
              <Col md={12}>
                <NavSecondary />
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavPrimary;

// import React, { Component } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// // import { bindActionCreators } from "redux";
// // import { connect } from "react-redux";
// // import { selectDenizenTab, setNavSecondaryz } from "../../actions";
// // import { Link } from "react-router-dom";
// import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// class NavPrimary extends Component {
//   render() {
//     return (
//       <div className='nav-primary'>
//         <Navbar collapseOnSelect expand='lg'>
//           {/* <LinkContainer to='/'>
//         <Navbar.Brand > */}
//           <Navbar.Brand href='/denizendesigner/home'>
//             <img
//               src='../../../../assets/images/dd-logo-nav.svg'
//               className='d-inline-block align-top'
//               alt='Denizen Designer Logo'
//             />
//           </Navbar.Brand>
//           {/* </LinkContainer> */}
//           <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//           <Navbar.Collapse id='responsive-navbar-nav'>
//             <Nav className='mr-auto'></Nav>
//             <Nav>
//               <LinkContainer to='/historyofparticipatorydesign/timeline'>
//                 <Nav.Link className='nav-primary-text'>
//                   History of Participatory Design
//                 </Nav.Link>
//               </LinkContainer>
//               <LinkContainer to='/denizendesigner/home'>
//                 <Nav.Link eventKey={2} className='nav-primary-text'>
//                   Denizen Designer
//                 </Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default NavPrimary;
