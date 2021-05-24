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
  Card,
} from 'react-bootstrap';

// import * as Scroll from 'react-scroll';
import Bibliography from './reportScreen/bibliography';
import ExecutiveSummary from './reportScreen/executiveSummary';
import Introduction from './reportScreen/introduction';
import Overview from './reportScreen/overview';
import ResearchProcess from './reportScreen/researchProcess';
import Demographics from './reportScreen/demographics';
import Summary from './reportScreen/summary';
import Conclusions from './reportScreen/conclusions';

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
                to='overview'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Overview
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
              <Link
                activeClass='active'
                to='researchProcess'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Research Process
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='demographics'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Demographics
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='summary'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Summary and Key Findings
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='conclusions'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Conclusions and Key Recommendations
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            {/* ****************************************************** */}
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
            <ExecutiveSummary />
            <Overview />

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
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Card className='my-4 report-chart-card'>
                    <Card.Body>
                      <Row className='report-chart-text'>
                        <Col>
                          <Card.Title className='title'>Race</Card.Title>
                          <Card.Text className='text-body'>
                            The racial demographics of the Denizen Designers was
                            just as diverse with 41.2% identifying as
                            Black/African American, 29.4% Asian, 28.4% White,
                            8.4% Hispanic, 2.9% Middle Eastern/Arab, 2.9%
                            American Indian/Alaskan origin and 2% Caribbean or
                            West Indian. This dramatic increase in the amount of
                            diversity, in both race and gender identity, allowed
                            for the Denizen Designer Project to learn more about
                            the perspectives and challenges that generally
                            underrepresented people have identified or seen
                            within the design field.{' '}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Card className='my-4 report-chart-card'>
                    <Card.Body>
                      <Row className='report-chart-text'>
                        <Col>
                          <Card.Title className='title'>Gender</Card.Title>
                          <Card.Text className='text-body'>Text Body</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* END OF MOVEABLE SECTION! */}

            <Introduction />
            <ResearchProcess />
            <Demographics />
            <Summary />
            <Conclusions />
          </Element>
        </Col>
      </Row>
    );
  }
}

export default Report;
