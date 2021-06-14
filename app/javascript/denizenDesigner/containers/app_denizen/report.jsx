import React, { Component } from 'react';

import ReportMobile from './reportScreen/reportMobile';
import ReportDesktop from './reportScreen/reportDesktop';
import Scroll from 'react-scroll';

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
      this.setState({ activeSection: newSection });
      this.CollapseMenu();
    };

    return (
      <div>
        {this.state.matches && <ReportDesktop />}
        {!this.state.matches && <ReportMobile />}
      </div>
    );
  }
}

export default Report;
