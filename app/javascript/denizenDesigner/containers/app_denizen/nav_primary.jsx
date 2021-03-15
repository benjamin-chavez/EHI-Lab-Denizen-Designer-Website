import React, { Component } from 'react';
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { selectDenizenTab, setNavSecondaryz } from "../../actions";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router';

// import test from "../../../assets/images/dd-logo-nav";
import Media from 'react-bootstrap/Media';
import NavLogo from '../../../../assets/images/dd-logo-nav.svg';

class NavPrimary extends Component {
  // location = () => {
  //   useLocation();
  // };

  // renderDesignersIndex() {
  //   const city = location.pathname.split('/').pop();
  //   return (
  //     <div>
  //       <div>sdf{city}</div>
  //     </div>
  //   );
  // }

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
          <Container fluid>
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
