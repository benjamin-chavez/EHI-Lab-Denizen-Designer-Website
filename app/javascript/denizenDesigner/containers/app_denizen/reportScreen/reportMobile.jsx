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
  Button,
  Collapse,
  Accordion,
} from 'react-bootstrap';

// import * as Scroll from 'react-scroll';
import Bibliography from './bibliography';
import ExecutiveSummary from './executiveSummary';
import Introduction from './introduction';
import Overview from './overview';
import ResearchProcess from './researchProcess';
import Demographics from './demographics';
import Summary from './summary';
import Conclusions from './conclusions';
import References from './references';

// import reportImage from '../../../../assets/images/report-img-1.svg';
// import ArrowDown from '../../../../assets/images/ArrowDown.svg';

// import Chart from './reportScreen/raceChart';

import Scroll from 'react-scroll';

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class ReportMobile extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = { activeSection: 'Executive Summary' };
    this.myRef = React.createRef();
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

  CollapseMenu() {
    this.myRef.current.click();
  }

  render() {
    const changeActiveSection = (newSection) => {
      // console.log('changeactiveSection');
      this.setState({ activeSection: newSection });
      this.CollapseMenu();
    };

    let activeSection = this.state.activeSection;

    return (
      <Row className='mb-3'>
        <Col sm={3} className='report-col-2'>
          <ul className='test123'>
            <li className='reportDownloadButton'>
              <Button className='pl-0 reportDownloadBtn'>
                <Link className='' target='_blank' download>
                  Download
                </Link>
              </Button>
            </li>
          </ul>
          <Accordion>
            <Accordion.Toggle
              className='accordianBtn'
              ref={this.myRef}
              eventKey='0'
            >
              <i className='fa fa-chevron-down'> </i>
              {''}
              <span className='ml-1'>{activeSection}</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              {/* <Col sm={3} className='mr-2'> */}
              <ul className='test123'>
                <li className='report-li'>
                  <Link
                    activeClass='active'
                    to='executiveSummary'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() => changeActiveSection('Executive Summary')}
                  >
                    Executive Summary
                    {/* <Image src={ArrowDown} className='pl-2' /> */}
                  </Link>
                </li>
                <li className='report-li'>
                  <Link
                    activeClass='active'
                    to='overview'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() => changeActiveSection('Overview')}
                  >
                    Overview
                    {/* <Image src={ArrowDown} className='pl-2' /> */}
                  </Link>
                </li>
                <li className='report-li'>
                  <Link
                    activeClass='active'
                    to='introduction'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() => changeActiveSection('Introduction')}
                  >
                    Introduction
                    {/* <Image src={ArrowDown} className='pl-2' /> */}
                  </Link>
                </li>
                <li className='report-li'>
                  <Link
                    activeClass='active'
                    to='researchProcess'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() => changeActiveSection('Research Process')}
                  >
                    Research Process
                    {/* <Image src={ArrowDown} className='pl-2' /> */}
                  </Link>
                </li>
                <li className='report-li'>
                  <Link
                    activeClass='active'
                    to='demographics'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() => changeActiveSection('Demographics')}
                  >
                    Demographics
                    {/* <Image src={ArrowDown} className='pl-2' /> */}
                  </Link>
                </li>
                <li className='report-li'>
                  <Link
                    activeClass='active'
                    to='summary'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() =>
                      changeActiveSection('Summary & Key Findings')
                    }
                  >
                    Summary & Key Findings
                    {/* <Image src={ArrowDown} className='pl-2' /> */}
                  </Link>
                </li>
                <li className='report-li '>
                  <Link
                    activeClass='active'
                    to='conclusions'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() =>
                      changeActiveSection('Conclusions & Key Recommendations')
                    }
                  >
                    Conclusions & Key Recommendations
                    {/* <Image src={ArrowDown} className='pl-2 ' /> */}
                  </Link>
                </li>
                <li className='report-li '>
                  <Link
                    activeClass='active'
                    to='references'
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId='containerElement'
                    onClick={() => changeActiveSection('References')}
                  >
                    References
                    {/* <Image src={ArrowDown} className='pl-2 ' /> */}
                  </Link>
                </li>
                {/* ****************************************************** */}
              </ul>
            </Accordion.Collapse>
          </Accordion>
        </Col>
        {/* <div className='mr-4'></div> */}
        <Col sm={9} className='report-col-9'>
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
            <Introduction />
            <ResearchProcess />
            <Demographics />
            <Summary />
            <Conclusions />
            <References />
          </Element>
        </Col>
      </Row>
    );
  }
}

export default ReportMobile;
