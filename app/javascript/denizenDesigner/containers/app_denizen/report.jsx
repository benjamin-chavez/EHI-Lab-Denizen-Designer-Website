import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import * as Scroll from 'react-scroll';
import reportImage from '../../../../assets/images/report-img-1.svg';
import ArrowDown from '../../../../assets/images/ArrowDown.svg';

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
      <Row>
        <Col sm={2} className='mr-2'>
          <ul className='test123'>
            <li className='selected'>
              <Link
                activeClass='active'
                to='firstInsideContainer'
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
              Introduction
              <Image src={ArrowDown} className='pl-2' />
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
              Bibliography
              <Image src={ArrowDown} className='pl-2' />
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
            <h2> Executive Summary</h2>

            <Element name='firstInsideContainer'>
              <h3>Overview</h3>
            </Element>
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
            <div className='report-img'>
              {' '}
              <Image src={reportImage} alt='Denizen Designer Logo' fluid />
            </div>

            <p>
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
              ************************************************
            </p>
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
          </Element>
          {/* </Container> */}
        </Col>
      </Row>
    );
  }
}

export default Report;
