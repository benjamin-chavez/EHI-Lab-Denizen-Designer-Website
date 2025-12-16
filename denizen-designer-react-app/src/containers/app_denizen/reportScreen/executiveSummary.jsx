// See reportMain component for base component

import React, { Component } from 'react';

import Scroll from 'react-scroll';

var Element = Scroll.Element;

class ExecutiveSummary extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='executiveSummary' className='executiveSummaryElement'>
          <h2>Executive Summary</h2>
        </Element>
        {/* <p>Dr. Harrington will write this..</p> */}
      </div>
    );
  }
}

export default ExecutiveSummary;
