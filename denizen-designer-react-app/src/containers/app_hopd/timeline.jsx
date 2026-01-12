import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HopdTimeline = () => {
  return (
    <div>
      <Row>
        <Col sm={2} className='me-2 '>
          <ul className='timeline-years'>
            <li className='active'>2009</li>
            <li className=''>2010</li>
            <li className=''>2011</li>
            <li className=''>2012</li>
            <li className=''>2013</li>
            <li className=''>2014</li>
            <li className=''>2015</li>
            <li className=''>2016</li>
            <li className=''>2017</li>
            <li className=''>2018</li>
            <li className=''>2019</li>
          </ul>
        </Col>
        <Col sm={9} className='timeline-reports'>
          <div className='timeline-card'>
            <Row>
              <Col sm={3} className='year-col'>
                2009
              </Col>
              <Col sm={9} className='card-body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  varius feugiat ut vulputate pretium. Etiam amet tristique
                  egestas pellentesque at molestie tincidunt. Lacus enim vitae
                  erat porttitor. Lacinia adipiscing aliquam eu vestibulum
                  fermentum, sed hendrerit. Interdum ut vulputate sapien felis
                  curabitur viverra senectus. Pulvinar amet tellus mattis libero
                  sit. Amet duis ut accumsan enim nisi. Tincidunt eget purus
                  pellentesque nibh etiam magna. Facilisis cras phasellus lorem
                  urna. Dolor tortor cras amet et porta dolor. Sit ultricies
                  orci, commodo vulputate.
                </p>

                <Row>
                  <h3>Resources</h3>
                </Row>
                <Row>
                  <ul className='card-links'>
                    <li>ACM Link</li>
                    <li>ACM Link</li>
                    <li>ACM Link</li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HopdTimeline;
