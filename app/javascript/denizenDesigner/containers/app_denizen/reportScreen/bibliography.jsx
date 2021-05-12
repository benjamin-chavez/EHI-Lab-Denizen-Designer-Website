import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Scroll from 'react-scroll';

// var Link = Scroll.Link;
// var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
// var Events = Scroll.Events;
// var scroll = Scroll.animateScroll;
// var scrollSpy = Scroll.scrollSpy;

class Bibliography extends Component {
  // constructor(props) {
  //   super(props);
  //   this.scrollToTop = this.scrollToTop.bind(this);
  // }

  // componentDidMount() {
  //   Events.scrollEvent.register('begin', function () {
  //     console.log('begin', arguments);
  //   });

  //   Events.scrollEvent.register('end', function () {
  //     console.log('end', arguments);
  //   });

  //   scrollSpy.update();
  // }
  // scrollToTop() {
  //   scroll.scrollToTop();
  // }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

  render() {
    return (
      <div className=''>
        <Element name='bibliography'>
          <h2>Bibliography</h2>
        </Element>
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vitae
          adipiscing augue mauris diam porta. Aenean nisi, erat vel ante
          fringilla semper libero aliquet laoreet. Eget pulvinar eu est vel.
          Faucibus egestas euismod feugiat sapien integer luctus odio. Interdum
          elit, diam eget nunc egestas. Augue felis magna tellus enim sed
          molestie enim mi. Sociis arcu etiam urna fermentum erat sodales
          libero. Sollicitudin purus pretium semper integer leo sollicitudin
          arcu sed. Ultrices ullamcorper nunc donec ac ullamcorper interdum
          proin sit.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vitae
          adipiscing augue mauris diam porta. Aenean nisi, erat vel ante
          fringilla semper libero aliquet laoreet. Eget pulvinar eu est vel.
          Faucibus egestas euismod feugiat sapien integer luctus odio. Interdum
          elit, diam eget nunc egestas. Augue felis magna tellus enim sed
          molestie enim mi. Sociis arcu etiam urna fermentum erat sodales
          libero. Sollicitudin purus pretium semper integer leo sollicitudin
          arcu sed. Ultrices ullamcorper nunc donec ac ullamcorper interdum
          proin sit.
        </p>
      </div>
      // </Element>
    );
  }
}

export default Bibliography;
