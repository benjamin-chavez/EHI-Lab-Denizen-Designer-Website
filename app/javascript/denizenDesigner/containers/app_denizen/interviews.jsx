import React, { Component } from 'react';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';

import { Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';

import BannerBackground from '../../../assets/images/interviews-banner-background.png';

class Interviews extends Component {
  render() {
    return (
      <div>
        <Row>
          <div className=''>
            <div className='interviewsBanner py-4 px-5'>
              <Col>
                <Row>
                  <Col sm={4}>
                    {/* <Col> */}
                    <h2 className='bannerHeader'>THE DENIZEN DESIGNERS</h2>
                  </Col>
                  <Col sm={8}>
                    {/* <Col> */}
                    <span className='bannerText'>
                      We interviewed people from this project who come from a
                      variety of backgrounds ranging from graphic design to
                      architecture and consulting. Although their backgrounds
                      and interpretations of design may be different, there is a
                      common theme that participatory design and community work
                      are fundamental aspects to ethical and transformative
                      design. We hope these interviews bring more awareness to
                      this type of work and a stronger network of Denizen
                      Designers will be formed.{' '}
                    </span>
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
        </Row>

        <Row className='my-4 '>
          <ParticipantsIndex />
        </Row>
      </div>
    );
  }
}

export default Interviews;
