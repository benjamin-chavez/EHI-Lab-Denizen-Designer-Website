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
import Bibliography from './reportScreen/bibliography';
import ExecutiveSummary from './reportScreen/executiveSummary';
import Introduction from './reportScreen/introduction';
import Overview from './reportScreen/overview';
import ResearchProcess from './reportScreen/researchProcess';
import Demographics from './reportScreen/demographics';
import Summary from './reportScreen/summary';
import Conclusions from './reportScreen/conclusions';
import ReportMobile from './reportScreen/reportMobile';
import ReportDesktop from './reportScreen/reportDesktop';

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
    this.state = { activeSection: 'Executive Summary' };
    this.myRef = React.createRef();
    this.state = { matches: window.matchMedia('(min-width: 576px)').matches };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();

    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 576px)').addListener(handler);
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
      <div>
        {this.state.matches && <ReportDesktop />}
        {!this.state.matches && <ReportMobile />}
      </div>
    );
  }
}

export default Report;
