import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Scroll from 'react-scroll';
import OverviewGraphic from '../../../../../assets/images/reportAssets/SurveyOVERVIEW.png';

var Element = Scroll.Element;

class Overview extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='overview' className='pt-3'>
          <h2>Overview: The Denizen Designer Project </h2>
        </Element>
        <p>
          Participatory Design is positioned to be a democratized approach to
          design which centers and amplifies community voices that may otherwise
          be neglected. Researchers, scholars, and practitioners alike have
          begun to look to this approach as a way to solve societal problems
          alongside the communities that are impacted. The Denizen Designer
          Project is an ethnographic exploration of best practices and use cases
          of participatory design as a methodological framework. This project
          featured individuals who leverage design as a practice or framework to
          work towards change in marginalized communities. Using ethnographic
          interviews, we collected over 100 accounts of local community members
          who are engaging in participatory design work. The Denizen Designer
          Project highlighted this design work in local communities and
          identified perspectives on design’s access and reach for those outside
          of academia.{' '}
        </p>
        <div className='report-img'>
          {' '}
          <Image src={OverviewGraphic} alt='Education Graphic' fluid />
        </div>
      </div>
    );
  }
}

export default Overview;
