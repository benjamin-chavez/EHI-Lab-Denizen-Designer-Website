import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import ExecutiveSummary from './reportScreen/executiveSummary';
import Introduction from './reportScreen/introduction';
import Overview from './reportScreen/overview';
import ResearchProcess from './reportScreen/researchProcess';
import Demographics from './reportScreen/demographics';
import Summary from './reportScreen/summary';
import Conclusions from './reportScreen/conclusions';

import Scroll from 'react-scroll';

var Link = Scroll.Link;
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
        <Col sm={3} className='report-col-2'>
          <ul className='test123'>
            <li className='reportDownloadButton'>
              <Button className='pl-0 reportDownloadBtn'>
                <Link className='' target='_blank' download>
                  Download
                </Link>
              </Button>
            </li>
            <li className='report-li'>
              <Link
                activeClass='active'
                to='executiveSummary'
                spy={true}
                smooth={true}
                duration={500}
                containerId='containerElement'
              >
                Executive Summary
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
              >
                Conclusions & Key Recommendations
              </Link>
            </li>
          </ul>
        </Col>

        <Col sm={9} className='report-col-9'>
          <Element
            name='test7'
            className='report-container'
            id='containerElement'
            style={{
              width: '100%',
              overflow: 'scroll',
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
