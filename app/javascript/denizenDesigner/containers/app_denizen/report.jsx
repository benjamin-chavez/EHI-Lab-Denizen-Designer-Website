import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
  Tabs,
} from 'react-bootstrap';

// import * as Scroll from 'react-scroll';
import Bibliography from './reportScreen/bibliography';
import Introduction from './reportScreen/introduction';
import reportImage from '../../../../assets/images/report-img-1.svg';
import ArrowDown from '../../../../assets/images/ArrowDown.svg';

import Chart from './reportScreen/Chart';

import Scroll from 'react-scroll';

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Report extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <Row className=''>
        <Col sm={2} className=''>
          {/* <Col sm={3} className='mr-2'> */}
          <ul className='test123'>
            <li className='selected'>
              <Link
                activeClass='active'
                to='executiveSummary'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
                // style={{ display: 'inline-block', margin: '20px' }}
              >
                Executive Summary
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='introduction'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Introduction
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            <li>
              I. Header
              <Image src={ArrowDown} className='pl-2' />
            </li>
            <li>
              II. Header
              <Image src={ArrowDown} className='pl-2' />
            </li>
            <li>
              III. Header
              <Image src={ArrowDown} className='pl-2' />
            </li>
            <li>
              IV. Header
              <Image src={ArrowDown} className='pl-2' />
            </li>
            <li>
              Conclusion & Key Recommendations
              <Image src={ArrowDown} className='pl-2' />
            </li>
            <li>
              <Link
                activeClass='active'
                to='bibliography'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Bibliography
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
          </ul>
        </Col>

        <Col sm={9}>
          {/* <Container className='report-container'> */}
          <Element
            name='test7'
            className='report-container'
            id='containerElement'
            style={{
              // position: 'relative',
              // height: '100%',
              width: '100%',
              overflow: 'scroll',
              // marginBottom: '100px',
            }}
          >
            <Element name='executiveSummary'>
              <h2>Executive Summary</h2>
            </Element>

            <h3>Overview: The Denizen Designer Project</h3>
            <p>
              Participatory Design is positioned to be a democratized approach
              to design which centers and amplifies community voices that may
              otherwise be neglected. Researchers, scholars, and practitioners
              alike have begun to look to this approach as a way to solve
              societal problems alongside the communities that are impacted. The
              Denizen Designer Project is an ethnographic exploration of best
              practices and use cases of participatory design as a
              methodological framework. This project featured individuals who
              leverage design as a practice or framework to work towards change
              in marginalized communities. Using ethnographic interviews, we
              collected over 100 accounts of local community members who are
              engaging in participatory design work. The Denizen Designer
              Project highlighted this design work in local communities and
              identified perspectives on design’s access and reach for those
              outside of academia.
            </p>
            <div className='report-img'>
              {' '}
              <Image src={reportImage} alt='Denizen Designer Logo' fluid />
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              vitae adipiscing augue mauris diam porta. Aenean nisi, erat vel
              ante fringilla semper libero aliquet laoreet. Eget pulvinar eu est
              vel. Faucibus egestas euismod feugiat sapien integer luctus odio.
              Interdum elit, diam eget nunc egestas. Augue felis magna tellus
              enim sed molestie enim mi. Sociis arcu etiam urna fermentum erat
              sodales libero. Sollicitudin purus pretium semper integer leo
              sollicitudin arcu sed. Ultrices ullamcorper nunc donec ac
              ullamcorper interdum proin sit.
            </p>
            {/* <Chart /> */}
            {/* YOU WILL BE ABLE TO MOVE THE FOLLOWING SECTION OF CODE INTO ANOTHER FILE ONCE YOU HAVE THE REST OF THE REPORT FUNCTIONING */}
            {/* <Chart legendPosition='bottom' /> */}
            {/* <ul className='report-chart-category-list'>
              <li>Race</li>
              <li>Gender</li>
              <li>Education</li>
              <li>Environment & Sectors</li>
              <li>Geographic Spread</li>
              <li>Issues Addressed</li>
              <li>Roles and Designing Background</li>
              <li>Design Employment</li>
            </ul> */}

            <Tab.Container id='' defaultActiveKey='first'>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Chart legendPosition='bottom' />
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <p className='fillerTab'>Gender Data</p>
                </Tab.Pane>
              </Tab.Content>
              <Row>
                <Col>
                  <Nav variant='pills' className='list-inline'>
                    <Nav.Item className='report-chart-category'>
                      <Nav.Link eventKey='first'>Race</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='report-chart-category'>
                      <Nav.Link eventKey='second'>Gender</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Tab.Container>
            {/* END OF MOVEABLE SECTION! */}
            <Introduction />

            <Bibliography />
          </Element>
          {/* </Container> */}
          {/* <Element name='introduction'>
            <p>**********************************</p>
          </Element> */}
        </Col>
      </Row>
    );
  }
}

export default Report;
