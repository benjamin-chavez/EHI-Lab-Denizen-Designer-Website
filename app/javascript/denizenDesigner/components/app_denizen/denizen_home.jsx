import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button, Card, Container } from 'react-bootstrap';

// import ParticipantsIndex from '../../containers/app_denizen/participants_index';

class DenizenHome extends Component {
  render() {
    return (
      <div className='homeScreenWrapper'>
        <div className='homeScreen pb-3'>
          <Row className='center mb-3 '>
            <Col>
              <h1 className='title'>Design + Community</h1>
            </Col>
          </Row>

          <Row className='center mb-3'>
            <Col md={1}></Col>
            <Col md={10}>
              <p className='textBody'>
                The Denizen Designer Project documents the insights and
                experiences of individuals and collectives who have engaged
                design as a way to address social, economic, or political
                challenges in their local environments. We interviewed people
                from this project who come from a variety of backgrounds ranging
                from graphic design to architecture and consulting. Although
                their backgrounds and interpretations of design may be
                different, there is a common theme that participatory design and
                community work are fundamental aspects to ethical and
                transformative design. We hope these interviews bring more
                awareness to this type of work and a stronger network of Denizen
                Designers will be formed.{' '}
              </p>
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row className='center justify-content-sm-center pb-5'>
            <Col sm={12} md={6} lg={4}>
              <Link className='denizen-link' to='/denizendesigner/interviews'>
                <Button
                  className='homeBtn p-3'
                  variant='light'
                  onMouseDown={(e) => e.preventDefault()}
                  block
                >
                  Meet The Denizen Designers
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DenizenHome;
