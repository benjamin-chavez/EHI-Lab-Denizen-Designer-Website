import React, { Component } from 'react';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';

import { Row, Col, Jumbotron, Button, Card, Container } from 'react-bootstrap';

// import BannerBackground from '../../../assets/images/interviews-banner-background.png';

class Interviews extends Component {
  render() {
    return (
      <div>
        <Row className=''>
          <ParticipantsIndex />
        </Row>
      </div>
    );
  }
}

export default Interviews;
