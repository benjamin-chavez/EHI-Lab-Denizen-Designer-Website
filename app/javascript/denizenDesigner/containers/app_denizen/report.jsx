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

import Chart from './reportScreen/raceChart';

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
      <Row className='mb-3'>
        <Col sm={2} className=''>
          {/* <Col sm={3} className='mr-2'> */}
          <ul className='test123'>
            <li className='reportDownloadButton'>
              <Link className='' target='_blank' download>
                Download
              </Link>
            </li>
            <li className='selected report-li'>
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
            <li className='report-li'>
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
            <li className='report-li'>
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
            <li className='report-li'>
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
            <li className='report-li'>
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
            <li className='report-li'>
              <Link
                activeClass='active'
                to='summary'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Summary & Key Findings
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            <li className='report-li'>
              <Link
                activeClass='active'
                to='conclusions'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Conclusions & Key Recommendations
                <Image src={ArrowDown} className='pl-2' />
              </Link>
            </li>
            {/* ****************************************************** */}
          </ul>
        </Col>

        <Col sm={9} className='tr**********'>
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
          </Element>
        </Col>
      </Row>
    );
  }
}

export default Report;
