import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Scroll from 'react-scroll';

var Element = Scroll.Element;

class ExecutiveSummary extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='executiveSummary' className='pt-3'>
          <h2>Executive Summary</h2>
        </Element>
        {/* <p>Dr. Harrington will write this..</p> */}
      </div>
    );
  }
}

export default ExecutiveSummary;
